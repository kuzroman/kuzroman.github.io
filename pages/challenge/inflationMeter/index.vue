<template>
  <div class="inflation">
    <p class="mb-4">
      Калькулятор расчитывает зависимость цены от инфляции.<br />
      Например если вы устроились в январе 2015 года на оклад 100т и в этом же
      году была годовая инфляция 10% то чтобы оставаться на том же уровне жизни
      в 2016м году,<br />
      вам нужно получать уже 110т. В то же время, если за следующий год инфляция
      составит еще 10% то зарплата должна быть уже не на 20% выше от 100, а на
      21%, т.к. инфляция рассчитывается от года к году. Данный калькулятор
      учитывает эту прогрессию.
    </p>
    <div class="mb-4">
      <small>
        К сожалению по некоторым странам данные по инфляции доступны не
        полностью
      </small>
    </div>
    <div class="form">
      <div class="ceil">
        <label for="start" class="title">Дата начала расчета</label>
      </div>
      <div class="ceil">
        <input id="start" v-model="startField" class="input" />
      </div>

      <div class="ceil">
        <label for="salary" class="title">Зарплата</label>
      </div>
      <div class="ceil">
        <input id="salary" v-model.number="amount" class="input" />
      </div>

      <div class="ceil">
        <label for="end" class="title">Дата окончания</label>
      </div>
      <div class="ceil">
        <input id="end" v-model="endField" class="input" />
      </div>

      <div class="ceil">
        <label for="end" class="title">Выберите страну</label>
      </div>
      <div class="ceil">
        <select v-model="country">
          <option v-for="(name, i) in countries" :key="i" :value="name">
            {{ name }}
          </option>
        </select>
      </div>
    </div>

    <div class="w-1/6 my-5">
      <UIButton text="Считать" @click="handleClickCalculate" />
    </div>

    <table v-if="requestResult" class="result">
      <tr>
        <td>Дата</td>
        <td>Инфляция за 12 месяцев</td>
        <td>Повышение ЗП</td>
      </tr>
      <tr v-for="(res, i) of result" :key="i">
        <td>{{ res.year }}</td>
        <td>{{ res.rate }}</td>
        <td>{{ res.salary }}</td>
      </tr>
    </table>

    <div class="mt-4">
      <small>
        Последние данные по инфляции в базе за
        {{ lastDateInResult }}
      </small>
    </div>
  </div>
</template>

<script setup lang="ts">
import fetchJsonp from 'fetch-jsonp'
import { format } from 'date-fns'

interface InfliationData {
  Country: number // 1
  InflationRate: number // 1.51
  InflationRateFormatted: string // '1.51'
  InflationRateRounded: string // 1.51
  Month: string // '/Date(883612800000)/'
  MonthFormatted: string // '1998-01-01'
}

const startField = ref('2015/12/1')
const endField = ref(format(new Date(), 'yyyy/MM/dd'))
const amount = ref(150000)
const country = ref('russia')
const requestResult = ref<InfliationData[]>()
const countries = [
  'belarus',
  'brazil',
  'canada',
  'european-union',
  'eurozone',
  'france',
  'germany',
  'greece',
  'india',
  'japan',
  'kazakhstan',
  'mexico',
  'russia',
  'spain',
  'turkey',
  'ukraine',
  'united-kingdom',
  'united-states',
]

const startTimestamp = computed<number>(() =>
  new Date(startField.value).getTime()
)
const endTimestamp = computed<number>(() => new Date(endField.value).getTime())

const diapasonDataList = computed(() => {
  return requestResult.value
    ? requestResult.value.filter((monthObj: InfliationData) => {
        const time = new Date(monthObj.MonthFormatted).getTime()
        return startTimestamp.value <= time && time <= endTimestamp.value
      })
    : []
})

const inflationDataPerYears = computed(() => {
  let tick = 0
  const yearInflationList: number[] = []
  diapasonDataList.value.forEach((data: InfliationData, index: number) => {
    if ((index + 1) % 12 === 0) tick++
    yearInflationList[tick] = yearInflationList[tick]
      ? Number((yearInflationList[tick] + data.InflationRate).toFixed(1))
      : data.InflationRate
  })
  return yearInflationList.reverse() // because we get list from api started from last month
})

const diapasonIncreasingSalary = computed(() => {
  const salaryList: number[] = []
  let salary = amount.value
  inflationDataPerYears.value.forEach((percent: number) => {
    salary = Math.floor(salary + (salary / 100) * percent)
    salaryList.push(salary)
  })
  return salaryList
})

const diapasonYears = computed(() => {
  const years: string[] = []
  const date = startField.value.split('/') // '2015/12/1'
  diapasonIncreasingSalary.value.forEach((item: number, i: number) => {
    years.push(`${+date[0] + i + 1}/${date[1]}/${date[2]}`)
  })
  return years
})

interface Result {
  rate: number
  year: string
  salary: number
}

const result = computed<Result[]>(() => {
  const res: Result[] = []
  inflationDataPerYears.value.forEach((rate, i) => {
    res.push({
      rate,
      year: diapasonYears.value[i],
      salary: diapasonIncreasingSalary.value[i],
    })
  })
  return res
})

const lastDateInResult = computed(() => {
  return requestResult.value ? requestResult.value[0].MonthFormatted : ''
})

const handleClickCalculate = async () => {
  // API https://www.statbureau.org/ru/inflation-api
  const request = {
    value: 'calculate-inflation-value-jsonp', // 67 123.28 ₽
    denomination: 'get-denominations-jsonp',
    all: 'get-data-jsonp',
    rate: 'calculate-inflation-rate-jsonp',
    price: 'calculate-inflation-price-jsonp', // 148 979.61
  }
  const url = `https://www.statbureau.org/${request.all}?`
  const meta = `country=${country.value}&start=${startField.value}&end=${endField.value}&amount=${amount.value}&format=true`

  await fetchJsonp(url + meta, {
    jsonpCallback: 'jsoncallback', // JSONP request!
  })
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      requestResult.value = json
    })
    .catch((ex) => console.error('parsing failed', ex))
}
</script>

<style scoped lang="scss">
@import '../../../assets/styles/props';
.inflation {
  .form {
    display: inline-grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 2px;
    grid-row-gap: 2px;
    background: $color-12;
    padding: 6px;
    color: black;

    .ceil {
      background: white;
      padding: 4px;
    }
    .title {
      height: 100%;
      display: block;
    }

    input {
      padding: 4px 6px;
      color: black;
    }
  }
  .result {
    tr {
      margin: 4px;
    }
    td {
      padding: 6px;
      border: 2px solid $color-12;
      color: black;
      background: white;
    }
  }
}
</style>
