<template>
  <button
    ref="refSwitchNode"
    type="button"
    role="switch"
    :aria-checked="isChecked"
    :disabled="disabled || loading"
    :class="{
      [prefixCls]: true,
      [`${prefixCls}-small`]: size === 'small',
      [`${prefixCls}-large`]: size === 'large',
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-checked`]: isChecked,
      [`${prefixCls}-disabled`]: disabled || loading,
    }"
    :style="[cssVars]"
    @click="handleClick"
  >
    <template v-if="loading">
      <span
        role="img"
        aria-label="loading"
        :class="`${prefixCls}-loading-icon`"
      >
        <svg
          class="anticon-spin"
          data-icon="loading"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
          viewBox="0 0 1024 1024"
          focusable="false"
        >
          <path
            d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
          />
        </svg>
      </span>
    </template>
    <span :class="`${prefixCls}-inner`">
      <template v-if="isChecked">
        <slot name="checkedChildren">{{ finalCheckedChildren }}</slot>
      </template>
      <template v-else>
        <slot name="unCheckedChildren">{{ finalUnCheckedChildren }}</slot>
      </template>
    </span>
  </button>
</template>
<script lang="ts">
import { defineComponent, computed, watch, reactive } from 'vue';
import type { PropType } from 'vue';
import { useLocale } from '@linehub/hooks';

type SwitchSizes = 'small' | 'default' | 'large';
type CheckedType = boolean | string | number;

export default defineComponent({
  name: 'LineSwitch',
  props: {
    prefixCls: {
      type: String,
      default: 'line-switch',
    },
    size: {
      type: String as PropType<SwitchSizes>,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    checkedChildren: {
      type: String,
      default: '',
    },
    unCheckedChildren: {
      type: String,
      default: '',
    },
    checkedColor: {
      type: String,
      default: '#5755B3',
    },
    unCheckedColor: {
      type: String,
      default: 'rgba(0,0,0,.25)',
    },
    checkedValue: {
      type: Boolean,
      default: true,
    },
    unCheckedValue: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean as PropType<CheckedType>,
      default: false,
    },
  },
  emits: ['update:checked', 'change', 'click'],
  setup(props, { emit }) {
    const { t } = useLocale();

    const finalCheckedChildren = computed(
      () => props.checkedChildren || t('line.switch.enable')
    );
    const finalUnCheckedChildren = computed(
      () => props.unCheckedChildren || t('line.switch.disable')
    );

    const checkedData = reactive({
      checked: props.checked,
    });

    const cssVars = computed(() => ({
      '--LineSwitchCheckedColor': props.checkedColor,
      '--LineSwitchUnCheckedColor': props.unCheckedColor,
    }));

    const isChecked = computed(
      () => checkedData.checked === props.checkedValue
    );

    watch(
      () => props.checked,
      (cur) => {
        checkedData.checked = cur;
      }
    );

    const setChecked = (
      check: CheckedType,
      evt: MouseEvent | KeyboardEvent
    ) => {
      if (props.disabled) {
        return;
      }
      if (props.checked === undefined) {
        checkedData.checked = check;
      }
      emit('update:checked', check);
      emit('change', check, evt);
    };

    const handleClick = (evt: MouseEvent) => {
      const newChecked = isChecked.value
        ? props.unCheckedValue
        : props.checkedValue;
      setChecked(newChecked, evt);
      emit('click', newChecked, evt);
    };

    return {
      finalCheckedChildren,
      finalUnCheckedChildren,
      cssVars,
      isChecked,
      handleClick,
    };
  },
});
</script>
