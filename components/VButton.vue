<template>
  <component
    :is="elementType"
    :href="this.href"
    :to="this.to"
    class="btn"
    :class="elementStyle"
    :disabled="disabled && !href && !to"
    v-on="$listeners"
    ><slot></slot
  ></component>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: false
    },
    primary: {
      type: Boolean,
      required: false
    },
    alt: {
      type: Boolean,
      required: false
    },
    secondary: {
      type: Boolean,
      required: false
    },
    to: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    elementType() {
      var type = "";
      if (this.href && this.to) {
        console.log(
          "You cannot have an href and and nuxt link attribute in the same VButton component."
        );
      }
      if (this.href) {
        type = "a";
      } else if (this.to) {
        type = "nuxt-link";
      } else {
        type = "button";
      }
      return type;
    },
    elementStyle() {
      var style = [];
      var styles = [
        ["primary", "btn-primary"],
        ["secondary", "btn-secondary"],
        ["alt", "btn-alt"]
      ];
      styles.forEach(item => {
        // TODO: Fix this typescript error
        if (this[item[0]]) {
          style.push(item[1]);
        }
      });
      return style.join(" ");
    }
  }
};
</script>
