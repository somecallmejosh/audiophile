export default {
  props: {
    payload: {
      type: Object,
      required: true
    },
    setValue: {
      type: [String, Array, Object, Boolean, Date, Number],
      required: false,
      default: null
    },
    v: {
      type: [Object, Array],
      required: false,
      default: null
    }
  },
  data() {
    return {
      dataValue: this.payload.initialValue ? this.payload.initialValue : null
    };
  },
  computed: {
    getValue() {
      return this.dataValue;
    },
    requiresValidation() {
      if (this.v) {
        return true;
      } else {
        return false;
      }
    },
    classValues() {
      let returnValue = "";
      if (this.requiresValidation) {
        if (this.v.$error) {
          returnValue = "error";
        }
      } else {
        returnValue = "";
      }
      return returnValue;
    },
    ariaInvalid() {
      let returnValue = null;
      if (this.requiresValidation) {
        if (this.v.$error) {
          returnValue = "true";
        }
      }
      return returnValue;
    },
    ariaDescribedBy() {
      let returnValue = null;
      if (this.payload.description) {
        returnValue = `${this.payload.id}-description`;
      }
      if (this.requiresValidation) {
        if (this.v.$error) {
          returnValue = `${this.payload.id}-error-description`;
        }
      }
      return returnValue;
    },
    formWrapperPayload() {
      return {
        id: this.payload.id,
        v: this.v,
        label: this.payload.label,
        component: this.payload.component
      };
    }
  },
  methods: {
    dataValueReload(dataVal, setVal) {
      if (!dataVal && (setVal || setVal === 0)) {
        return (this.dataValue = setVal);
      }
    }
  },
  watch: {
    getValue(newValue) {
      newValue != null
        ? this.$emit("input", this.dataValue)
        : this.$emit("input", null);
    },
    setValue: {
      // If there is already a value for the field,
      // make sure it shows it the UI.
      handler(value) {
        this.dataValue = value || null;
      }
    }
  },
  mounted() {
    this.dataValueReload(this.dataValue, this.setValue);
  }
};
