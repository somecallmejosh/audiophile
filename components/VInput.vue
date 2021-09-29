<template>
  <div class="space-y-2" :class="classValues">
    <div class="flex justify-between">
      <label :for="payload.id" class="text-sm font-bold">{{
        payload.label
      }}</label>
      <template v-if="requiresValidation">
        <v-error-message
          v-if="v.$error"
          :id="payload.id"
          :error-messages="payload.errorMessages"
          :v="v"
          class="ml-2"
        />
      </template>
    </div>
    <input
      :id="payload.id"
      :ref="payload.id"
      v-model="dataValue"
      :name="payload.id"
      :type="payload.type ? payload.type : 'text'"
      :aria-invalid="ariaInvalid"
      :aria-describedby="ariaDescribedBy"
      :aria-required="requiresValidation ? 'true' : null"
      :placeholder="payload.placeholder ? payload.placeholder : null"
      :min="payload.minDate ? payload.minDate : null"
      :max="payload.maxDate ? payload.maxDate : null"
      class="rounded w-full border border-[#cfcfcf] px-6 h-[56px] focus:border-ap-orange-200 outline-none focus:outline-none"
      @blur="v ? v.$touch() : ''"
    />

    <v-field-description
      v-if="payload.description"
      :id="payload.id"
      :text="payload.description"
    />
  </div>
</template>

<script>
import formScripts from "~/mixins/formScripts";
export default {
  mixins: [formScripts]
};
</script>

<style>
.error input {
  @apply border-red-500;
}
.error label {
  @apply text-red-500;
}
</style>
