<template>
  <div
    v-if="sign !== '|'"
    class="letter-tag"
    :class="styles"
    ref="letterEl"
  >
    {{ sign }}
  </div>
  <br v-else />
</template>

<script setup>
const emit = defineEmits(['letter-tag--show'])

const props = defineProps({
  sign: { type: String, default: ' ' },
  isKilled: { type: Boolean, default: false },
  isShow: { type: Boolean, default: false },
})

const letterEl = ref(null);
const x1 = ref(null);
const x2 = ref(null);
const y1 = ref(null);
const y2 = ref(null);
const id = ref(getCurrentInstance().vnode.key);

const styles = computed(() => {
  return [{ show: props.isShow }, { hide: props.isKilled }]
});

const updateData = () => {
  if (!letterEl.value) return;
  let rect = letterEl.value.getBoundingClientRect()
  x1.value = Math.ceil(rect.left)
  y1.value = Math.ceil(rect.top)
  x2.value = Math.ceil(rect.left + letterEl.value.clientWidth)
  y2.value = Math.ceil(rect.top + letterEl.value.clientHeight)
};

watch(() => props.isShow, () => {
  updateData()
  if (!x1.value || !y1.value) return
  emit('letter-tag--show', {
    x1: x1.value,
    x2: x2.value,
    y1: y1.value,
    y2: y2.value,
    id: id.value
  })
})
</script>

<style lang="scss">
.letter-tag {
  font-size: 1em;
  display: inline-block;
  opacity: 0;

  &.show {
    opacity: 1;
  }

  &.hide {
    opacity: 0;
  }
}
</style>
