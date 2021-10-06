<template>
  <div class="category-view">
    <div
      v-if="categories.length"
      class="px-6 py-8 text-center text-white bg-ap-black-800 md:py-24"
    >
      <h1 class="text-2xl font-bold tracking-widest uppercase">
        {{ $route.params.category }}
      </h1>
    </div>
    <div
      class="max-w-6xl px-6 py-12 mx-auto space-y-32 md:py-24 md:px-10 lg:px-0"
    >
      <ul v-if="categories.length" class="space-y-32 lg:space-y-40">
        <li
          v-for="(product, index) in categories"
          :key="product.id"
          class="grid gap-8 lg:grid-cols-2 lg:gap-0"
        >
          <div :class="index % 2 ? 'lg:order-0' : 'lg:order-1'">
            <picture
              ><source
                :srcset="`/assets/${product.categoryImage.desktop}`"
                media="(min-width: 1024px)"/>
              <source
                :srcset="`/assets/${product.categoryImage.tablet}`"
                media="(min-width: 768px)"/>
              <source
                :srcset="`/assets/${product.categoryImage.mobile}`"
                media="(min-width: 300px)"/>
              <img
                :src="`/assets/${product.categoryImage.desktop}`"
                class="object-cover w-full rounded-lg"
                alt="Audiophile headphones"
            /></picture>
          </div>
          <div
            class="flex items-center text-center lg:text-left"
            :class="index % 2 ? 'lg:order-1' : 'lg:order-0'"
          >
            <div
              class="w-full space-y-4 lg:space-y-10"
              :class="index % 2 ? 'lg:pl-32' : 'lg:pr-32'"
            >
              <div>
                <p
                  v-if="product.new"
                  class="mb-2 tracking-extreme text-ap-orange-200"
                >
                  NEW PRODUCT
                </p>
                <h2 class="text-3xl font-bold uppercase lg:text-5xl">
                  {{ product.name }}
                </h2>
              </div>
              <p class="opacity-50">
                {{ product.description }}
              </p>
              <nuxt-link
                class="btn btn-primary"
                :to="`/${$route.params.category}/${product.slug}`"
                :aria-label="`Product information for ${product.name}`"
                >See product</nuxt-link
              >
            </div>
          </div>
        </li>
      </ul>
      <div v-else class="space-y-2 text-center">
        <h2 class="text-3xl font-bold tracking-wider uppercase">
          <em>"{{ $route.params.category }}"</em>
          <span class="text-ap-orange-200">Not Found</span>
        </h2>
        <div>
          <p class="text-lg opacity-50">
            We don't have any products associated with the category
            <strong>{{ $route.params.category }}</strong
            >.
          </p>
          <p class="text-lg opacity-50">
            Check out one of the category links below.
          </p>
        </div>
      </div>
      <div class="pt-16">
        <category-nav />
      </div>
      <product-validation v-if="categories.length" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $dataApi, store }) {
    const productExists = store.state.products.json;
    if (!productExists) {
      const product = await $dataApi.getProduct();
      store.dispatch("fetchProducts", product);
    }
  },
  computed: {
    categories() {
      return this.$store.getters.filterCategoryItems(
        this.$route.params.category
      );
    }
  },
  head() {
    return {
      title: `Audiophile ${this.$route.params.category}`,
      link: [
        {
          rel: "canonical",
          href: `https://fem-audiophile.netlify.app/${this.$route.params.category}/`
        }
      ],
      meta: [
        {
          hid: "robots",
          name: "robots",
          content: "noindex"
        },
        {
          hid: "description",
          name: "description",
          content: `An assortment of premium quality Audiophile ${this.$route.params.category}.`
        },
        {
          hid: "og:title",
          property: "og:title",
          content: `Audiophile ${this.$route.params.category}`
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `https://res.cloudinary.com/dwjulenau/image/upload/c_scale,h_627,w_1200/v1633515823/image-hero_i2rxrn.jpg`
        },
        {
          hid: "og:description",
          property: "og:description",
          content: `An assortment of premium quality Audiophile ${this.$route.params.category}.`
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://fem-audiophile.netlify.app/${this.$route.params.category}/`
        },
        {
          hid: "twitter:card",
          property: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter:site",
          property: "twitter:site",
          content: "@joshuabriley"
        },
        {
          hid: "twitter:creator",
          property: "twitter:creator",
          content: "@joshuabriley"
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: `Audiophile ${this.$route.params.category}`
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content: `An assortment of premium quality Audiophile ${this.$route.params.category}.`
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content: `https://res.cloudinary.com/dwjulenau/image/upload/c_scale,h_600,w_1200/v1633515823/image-hero_i2rxrn.jpg`
        }
      ]
    };
  }
};
</script>

<style></style>
