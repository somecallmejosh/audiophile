<template>
  <div class="space-y-2">
    <v-form-field-wrapper :form-wrapper-payload="formWrapperPayload">
      <input
        :id="payload.id"
        :ref="payload.id"
        v-model="dataValue"
        :name="payload.id"
        :type="payload.type ? payload.type : 'text'"
        :class="classValues"
        :aria-invalid="ariaInvalid"
        :aria-describedby="ariaDescribedBy"
        :aria-required="requiresValidation ? 'true' : null"
        :placeholder="payload.placeholder ? payload.placeholder : null"
        :min="payload.minDate ? payload.minDate : null"
        :max="payload.maxDate ? payload.maxDate : null"
        class=""
        @blur="v ? v.$touch() : ''"
      />
    </v-form-field-wrapper>
    <template v-if="requiresValidation">
      <v-error-message
        v-if="v.$error"
        :id="payload.id"
        :error-messages="payload.errorMessages"
        :v="v"
      />
    </template>
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

<style></style>
