<template>
  <div class="space-y-1">
    <template v-if="!isComboGroup">
      <label
        :for="formWrapperPayload.id"
        class="text-sm font-bold"
        :class="!formWrapperPayload.v.$invalid ? 'text-red-500' : ''"
        >{{ formWrapperPayload.label }}</label
      >
      <span
        v-if="formWrapperPayload.v"
        class="text-red-600"
        aria-label="Required"
        >*</span
      >
    </template>
    <div class="relative" :class="!isComboGroup ? 'rounded-md shadow-sm' : ''">
      <slot />
      <template v-if="formWrapperPayload.v">
        <div
          v-if="formWrapperPayload.v.$error"
          aria-hidden="true"
          class="absolute inset-y-0 right-0 flex items-center pr-3 text-red-500 pointer-events-none"
          :class="
            formWrapperPayload.component === 'select'
              ? 'transform -translate-x-6'
              : ''
          "
        >
          <icon-exclamation-circle />
        </div>
        <div
          v-if="!formWrapperPayload.v.$invalid"
          class="absolute inset-y-0 right-0 flex items-center pr-3 text-green-500 pointer-events-none"
        >
          <icon-check />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    formWrapperPayload: {
      type: Object,
      required: true
    },
    v: {
      type: [Object, Array],
      required: false,
      default: null
    }
  },
  computed: {
    isComboGroup() {
      return !!(this.formWrapperPayload.component === "combo");
    }
  }
};
</script>

<style></style>
