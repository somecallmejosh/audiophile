<template>
  <div class="space-y-2">
    <v-form-field-wrapper :form-wrapper-payload="formWrapperPayload">
      <fieldset>
        <div class="flex space-x-1">
          <legend
            :id="`${payload.id}-label`"
            class="flex mb-1 space-x-1 font-medium"
          >
            {{ payload.label }}
          </legend>
          <span
            v-if="formWrapperPayload.v"
            class="text-red-600"
            aria-label="Required"
            >*</span
          >
        </div>
        <div v-for="(option, id) in payload.options" :key="id">
          <input
            :id="`${payload.id}-${option.id}`"
            v-model="dataValue"
            :ref="`${payload.id}-${option.id}`"
            :name="`${payload.id}-${option.id}`"
            :value="`${option.id}`"
            :class="classValues"
            :type="payload.type"
            :aria-labelledby="
              `${payload.id}-label ${payload.id}-${option.id}-label`
            "
            @blur="v ? v.$touch() : ''"
          />
          <label
            :id="`${payload.id}-${option.id}-label`"
            :for="`${payload.id}-${option.id}`"
            >{{ option.text }}</label
          >
        </div>
      </fieldset>
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
  mixins: [formScripts],
  data() {
    return {
      dataValue: []
    };
  }
};
</script>
