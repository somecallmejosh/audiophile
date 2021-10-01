<template>
  <nav class="category-nav" aria-label="Category Nav">
    <ul
      class="grid gap-20 md:grid-cols-3 md:gap-6"
      @click="sidePanelVisibility(false)"
    >
      <li v-for="(category, index) in productCategories">
        <nuxt-link :to="`/${category}`" class="group">
          <div
            class="relative pt-24 pb-16 tracking-widest text-center uppercase rounded-lg bg-ap-gray-200"
          >
            <nuxt-img
              class="absolute top-0 w-48 transition-all duration-200 ease-in-out transform -translate-x-1/2 left-1/2 -translate-y-1/3 group-hover:scale-110"
              :alt="category"
              :src="
                `/assets/shared/desktop/image-category-thumbnail-${category}.png`
              "
            />
            <p class="mb-2 font-bold">{{ category }}</p>
            <div class="flex items-center justify-center space-x-1">
              <p
                class="text-sm font-bold transition-opacity duration-200 ease-in-out opacity-50 group-hover:opacity-100 group-hover:text-ap-orange-200"
              >
                Shop
              </p>
              <svg
                aria-hidden="true"
                role="img"
                width="8"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.322 1l5 5-5 5"
                  stroke="#D87D4A"
                  stroke-width="2"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["productCategories"])
  },
  methods: {
    sidePanelVisibility(payload) {
      this.$store.dispatch("toggleSidepanelVisibility", payload);
    }
  }
};
</script>

<style>
.category-view .category-nav a.nuxt-link-active {
  @apply pointer-events-none;
}

.category-view .category-nav a:not(.nuxt-link-active) div {
  @apply transition-opacity duration-300 ease-in-out opacity-75 hover:opacity-100;
}
</style>
