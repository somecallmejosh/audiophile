<template>
  <div
    class="max-w-6xl px-6 py-24 mx-auto space-y-20 overflow-y-scroll md:space-y-32 md:px-10 lg:px-0 product-page"
  >
    <div>
      <nuxt-link :to="`/${$route.params.category}`" class="block mb-6"
        >Go Back</nuxt-link
      >
      <section
        aria-label="Product Details"
        class="grid gap-8 md:grid-cols-9 md:gap-12 lg:gap-24"
      >
        <div class="md:col-span-4">
          <picture
            ><source
              :srcset="`/assets/${product.image.desktop}`"
              media="(min-width: 1024px)"/>
            <source
              :srcset="`/assets/${product.image.tablet}`"
              media="(min-width: 768px)"/>
            <source
              :srcset="`/assets/${product.image.mobile}`"
              media="(min-width: 300px)"/>
            <img
              :src="`/assets/${product.image.desktop}`"
              class="object-cover w-full rounded-lg"
              alt="Product"
          /></picture>
        </div>
        <div class="flex items-center md:py-24 md:col-span-4">
          <div class="space-y-8">
            <div>
              <p
                v-if="product.new"
                class="mb-6 uppercase md:mb-2 text-ap-orange-200 tracking-extreme"
              >
                New Product
              </p>
              <h1 class="text-5xl font-bold">{{ product.name }}</h1>
            </div>
            <p class="opacity-50">{{ product.description }}</p>
            <p class="font-bold">$ {{ product.price }}</p>
          </div>
        </div>
      </section>
    </div>
    <section aria-labelledby="#features">
      <h3 id="features" class="mb-6 text-3xl font-bold">Features</h3>
      <div
        v-html="$md.render(product.features)"
        class="space-y-6 opacity-50"
      ></div>
    </section>
    <div class="pt-16">
      <category-nav />
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
    product() {
      return this.$store.getters.getProduct(this.$route.params.product);
    }
  }
};
</script>

<style></style>
