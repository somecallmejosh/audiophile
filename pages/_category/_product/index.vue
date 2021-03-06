<template>
  <div
    class="w-full max-w-6xl px-6 py-12 mx-auto space-y-20 md:py-24 md:space-y-32 md:px-10 lg:px-0 product-page"
  >
    <div v-if="product">
      <nuxt-link
        :to="`/${$route.params.category}`"
        class="block mb-6 transition-colors duration-150 hover:text-ap-orange-200"
        >Go Back</nuxt-link
      >
      <section
        v-if="product"
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
              <h1 class="text-5xl font-bold uppercase">{{ product.name }}</h1>
            </div>
            <p class="opacity-50">{{ product.description }}</p>
            <p class="text-2xl font-bold">$ {{ product.price }}</p>
            <div class="flex items-center space-x-6">
              <div class="flex w-auto h-12 ">
                <button
                  @click="productCounter >= 1 ? productCounter-- : ''"
                  class="px-4 text-center transition-colors duration-300 ease-in-out bg-ap-gray-200"
                  :class="
                    productCounter === 0
                      ? 'opacity-25 pointer-events-none'
                      : 'hover:bg-opacity-75 hover:text-ap-orange-200'
                  "
                >
                  -
                </button>
                <div
                  aria-live="assertive"
                  class="flex items-center justify-center w-8 text-center bg-ap-gray-200"
                >
                  <span class="sr-only">Item count:</span>
                  {{ productCounter }}
                </div>
                <button
                  @click="productCounter++"
                  class="px-4 text-center transition-colors duration-300 ease-in-out bg-ap-gray-200 hover:bg-opacity-75 hover:text-ap-orange-200"
                >
                  +
                </button>
              </div>
              <button @click="updateCart()" class="btn btn-primary">
                <span v-if="productInCart">Update Cart</span>
                <span v-else>Add to Cart</span>
              </button>
            </div>
            <p v-if="productInCart">
              <strong>{{ productQuantityInCart }}</strong>
              <span class="opacity-50"
                ><em>{{ product.name }}</em>
                <span v-if="productQuantityInCart > 1">are</span
                ><span v-else>is</span> in your shopping cart.</span
              >
            </p>
          </div>
        </div>
      </section>
    </div>
    <section
      v-if="product"
      aria-labelledby="features"
      class="grid gap-12 lg:grid-cols-3 md:gap-16 lg:gap-24"
    >
      <div class="lg:col-span-2">
        <h2 id="features" class="mb-8 text-3xl font-bold uppercase">
          Features
        </h2>
        <div
          v-html="$md.render(product.features)"
          class="space-y-6 opacity-50"
        ></div>
      </div>
      <div class="md:grid lg:block md:grid-cols-2">
        <h3 class="mb-8 text-3xl font-bold uppercase">In the box</h3>
        <ul class="space-y-3">
          <li
            v-for="(item, index) in product.includes"
            :key="index"
            class="space-x-2"
          >
            <span class="text-ap-orange-200">{{ item.quantity }}x</span>
            <span class="opacity-50">{{ item.item }}</span>
          </li>
        </ul>
      </div>
    </section>
    <section
      v-if="product"
      aria-label="Product images"
      class="grid gap-6 md:grid-cols-4"
    >
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
    <section
      v-if="product"
      aria-labelledby="may-also-like"
      class="text-center "
    >
      <h3 id="may-also-like" class="mb-8 text-3xl font-bold uppercase">
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
            <h2 class="text-3xl font-bold uppercase">{{ item.name }}</h2>
            <nuxt-link
              :to="`/${categoryFromSlug(item.slug)}/${item.slug}`"
              class="btn btn-primary"
              :aria-label="`Production information for ${item.name}`"
              >See Product</nuxt-link
            >
          </div>
        </li>
      </ul>
    </section>
    <div v-else class="space-y-2 text-center">
      <h2 class="text-3xl font-bold tracking-wider uppercase">
        <em>"{{ $route.params.product }}"</em>
        <span class="text-ap-orange-200">Not Found</span>
      </h2>
      <div>
        <p class="text-lg opacity-50">
          We don't have any <strong>{{ $route.params.category }}</strong> by the
          name of <strong>{{ $route.params.product }}</strong
          >.
        </p>
        <p class="text-lg opacity-50">
          Check out one of the category links below.
        </p>
      </div>
    </div>
    <div class="w-full pt-16">
      <category-nav />
    </div>
    <product-validation v-if="product" />
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
    },
    productPositionInCart() {
      return this.$store.state.cart.findIndex(
        x => x.itemId === this.product.id
      );
    },
    productInCart() {
      this.productPositionInCart > -1
        ? (this.productCounter = this.$store.state.cart[
            this.productPositionInCart
          ].quantity)
        : (this.productCounter = 1);
      return this.productPositionInCart > -1;
    },
    productQuantityInCart() {
      return this.$store.state.cart[this.productPositionInCart].quantity;
    }
  },
  methods: {
    updateCart() {
      this.$store.dispatch("updateCart", {
        itemId: this.product.id,
        quantity: this.productCounter,
        name: this.product.name,
        price: this.product.price,
        image: this.product.slug
      });
    },
    categoryFromSlug(slug) {
      return this.$store.getters.getCategoryFromSlug(slug);
    }
  },
  head() {
    return {
      title: `Audiophile ${this.product.name}`,
      link: [
        {
          rel: "canonical",
          href: `https://fem-audiophile.netlify.app/${this.$route.params.category}/${this.$route.params.product}`
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
          content: this.product.description
        },
        {
          hid: "og:title",
          property: "og:title",
          content: `Audiophile ${this.product.name}`
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `https://res.cloudinary.com/dwjulenau/image/upload/c_scale,h_627,w_1200/v1633527810/audiophile-social-card_eggkdu.jpg`
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.product.description
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://fem-audiophile.netlify.app/${this.$route.params.category}/${this.$route.params.product}`
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
          content: `Audiophile ${this.product.name}`
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content: this.product.description
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content: `https://res.cloudinary.com/dwjulenau/image/upload/c_scale,h_600,w_1200/v1633527810/audiophile-social-card_eggkdu.jpg`
        }
      ]
    };
  }
};
</script>

<style></style>
