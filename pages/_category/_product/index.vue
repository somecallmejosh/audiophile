<template>
  <div
    class="max-w-6xl px-6 py-12 mx-auto space-y-20 overflow-y-scroll md:py-24 md:space-y-32 md:px-10 lg:px-0 product-page"
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
              class="object-cover w-full h-full rounded-lg"
              alt="Product"
              height="1120"
              width="1080"
          /></picture>
        </div>
        <div class="flex items-center md:col-span-4">
          <div class="space-y-8 md:py-24">
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
            <p class="text-2xl font-bold">$ {{ product.price }}</p>
            <div class="flex items-center space-x-6">
              <div class="flex w-auto h-12 bg-ap-gray-200">
                <button@click="productCounter >= 1 ? productCounter-- : ''" class="px-4 text-center" :class="productCounter === 0 ? 'opacity-25 pointer-events-none' : 'opacity-100'">-</button@click=>
                <input type="text" v-model="productCounter" class="w-8 text-center bg-ap-gray-200" />
                <button @click="productCounter++" class="px-4 text-center">
                  +
                </button>
              </div>
              <button class="btn btn-primary" :class="productCounter === 0 ? 'opacity-25 pointer-events-none' : 'opacity-100'" :disabled="productCounter === 0">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section aria-labelledby="features">
      <h3 id="features" class="mb-8 text-3xl font-bold">Features</h3>
      <div
        v-html="$md.render(product.features)"
        class="space-y-6 opacity-50"
      ></div>
    </section>
    <section aria-label="Product images" class="grid gap-6 md:grid-cols-4">
      <div class="space-y-6 md:col-span-2 md:row-span-2">
        <div>
          <picture
            ><source
              :srcset="`/assets/${product.gallery.first.desktop}`"
              media="(min-width: 1024px)"/>
            <source
              :srcset="`/assets/${product.gallery.first.tablet}`"
              media="(min-width: 768px)"/>
            <source
              :srcset="`/assets/${product.gallery.first.mobile}`"
              media="(min-width: 300px)"/>
            <img
              :src="`/assets/${product.gallery.first.desktop}`"
              class="object-cover w-full rounded-lg"
              alt="Product"
          /></picture>
        </div>
        <div>
          <picture
            ><source
              :srcset="`/assets/${product.gallery.second.desktop}`"
              media="(min-width: 1024px)"/>
            <source
              :srcset="`/assets/${product.gallery.second.tablet}`"
              media="(min-width: 768px)"/>
            <source
              :srcset="`/assets/${product.gallery.second.mobile}`"
              media="(min-width: 300px)"/>
            <img
              :src="`/assets/${product.gallery.second.desktop}`"
              class="object-cover w-full rounded-lg"
              alt="Product"
          /></picture>
        </div>
      </div>
      <div class="md:col-span-2 md:row-span-2">
        <picture
          ><source
            :srcset="`/assets/${product.gallery.third.desktop}`"
            media="(min-width: 1024px)"/>
          <source
            :srcset="`/assets/${product.gallery.third.tablet}`"
            media="(min-width: 768px)"/>
          <source
            :srcset="`/assets/${product.gallery.third.mobile}`"
            media="(min-width: 300px)"/>
          <img
            :src="`/assets/${product.gallery.third.desktop}`"
            class="object-cover w-full rounded-lg md:h-full"
            alt="Product"
        /></picture>
      </div>
    </section>
    <section aria-labelledby="may-also-like" class="text-center ">
      <h3 id="may-also-like" class="mb-8 text-3xl font-bold">
        You may also like
      </h3>
      <ul class="grid gap-12 md:gap-6 md:grid-cols-3">
        <li v-for="item in product.others" :key="item.slug" class="space-y-8">
          <picture
            ><source
              :srcset="`/assets/${item.image.desktop}`"
              media="(min-width: 1024px)"/>
            <source
              :srcset="`/assets/${item.image.tablet}`"
              media="(min-width: 768px)"/>
            <source
              :srcset="`/assets/${item.image.mobile}`"
              media="(min-width: 300px)"/>
            <img
              :src="`/assets/${item.image.desktop}`"
              class="object-cover w-full rounded-lg"
              alt="Product"
          /></picture>
          <div class="space-y-6">
            <h2 class="text-3xl font-bold">{{ item.name }}</h2>
            <nuxt-link
              :to="`/${categoryFromSlug(item.slug)}/${item.slug}`"
              class="btn btn-primary"
              >See Product</nuxt-link
            >
          </div>
        </li>
      </ul>
    </section>
    <div class="pt-16">
      <category-nav />
    </div>
    <product-validation />
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
  data: () => ({
    productCounter: 1
  }),
  computed: {
    product() {
      return this.$store.getters.getProduct(this.$route.params.product);
    }
  },
  methods: {
    categoryFromSlug(slug) {
      return this.$store.getters.getCategoryFromSlug(slug);
    }
  }
};
</script>

<style></style>
