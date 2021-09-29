<template>
  <div :id="`${id}-error-description`">
    <template v-for="(item, index) in errorMessages">
      <p
        v-if="v.$error && !v[item.validationType]"
        :key="index"
        class="text-xs font-semibold text-red-600"
      >
        {{ item.text }}
      </p>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    errorMessages: {
      type: [Object, Array],
      required: true
    },
    v: {
      type: [Object, Array],
      required: false,
      default: null
    },
    id: {
      type: String,
      required: true
    }
  }
};
</script>
