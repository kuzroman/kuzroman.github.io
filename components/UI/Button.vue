<template>
  <div class="ui-button">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'UIButton',
  props: {
    text: { type: String, default: 'Button' },
    disabled: { type: Boolean, default: false },
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>

<style lang="scss">
@import './_props.scss';

.ui-button {
  background: $color-4;
  padding: 8px;
  color: $color-5;
  text-align: center;
  font-weight: bold;
  border-radius: 2px;
  cursor: pointer;
  transform: translateY(0);
  box-shadow: 0 8px 10px rgba(0, 0, 0, 1);
  transition: 0.3s transform, 0.3s box-shadow;
  font-size: 0.8em;
  text-transform: uppercase;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0);
    transition: 0.3s background-color;
  }

  &:not(.disabled):hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.7);
    transform: translateY(-2px);

    &:after {
      background: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
