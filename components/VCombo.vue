<template>
  <div class="space-y-2">
    <v-form-field-wrapper :form-wrapper-payload="formWrapperPayload">
      <fieldset class="grid gap-6 md:grid-cols-2">
        <div>
          <legend
            :id="`${payload.id}-label`"
            class="flex mb-1 space-x-1 font-medium"
          >
            {{ payload.label }}
          </legend>
        </div>
        <div class="space-y-6 ">
          <label
            v-for="(option, id) in payload.options"
            :key="id"
            class="flex items-center space-x-2 border h-[56px] px-4 rounded focus:border-ap-orange-200 focus-within:border-ap-orange-200 outline-none font-bold text-sm focus-within:outline-none"
            :id="`${payload.id}-${option.id}-label`"
            :for="`${payload.id}-${option.id}`"
          >
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
              class="text-xs text-ap-orange-200 border-[#cfcfcf] outline-none focus:ring-[#cfcfcf]"
            />
            <span>{{ option.text }}</span>
          </label>
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
<style>
[type="radio"]:checked {
  background-image: none !important;
}
</style>
