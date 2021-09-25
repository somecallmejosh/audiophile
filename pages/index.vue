<template>
  <div>
    <div class="bg-ap-black-800">
      <div
        class="relative max-w-6xl mx-auto overflow-hidden border-t border-opacity-25 border-ap-black-700"
      >
        <div
          class="relative z-10 w-full px-6 pt-24 pb-32 mx-auto space-y-4 text-center text-white md:py-48 lg:text-left lg:left-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 md:max-w-xl lg:max-w-lg lg:mx-0 xl:px-0 lg:py-0"
        >
          <p class="uppercase opacity-50 tracking-extreme">New product</p>
          <h1
            class="max-w-sm mx-auto text-5xl font-bold leading-tight uppercase lg:text-6xl lg:mx-0 lg:max-w-md"
          >
            XX99 Mark II HeadphoneS
          </h1>
          <p class="max-w-sm mx-auto opacity-50 lg:mx-0 lg:max-w-md">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <div class="pt-6">
            <nuxt-link
              to="/headphones/xx99-mark-two-headphones"
              class="btn btn-primary "
              >See Product</nuxt-link
            >
          </div>
        </div>
        <picture
          ><source
            srcset="
              /assets/home/desktop/image-hero.jpg,
            "
            media="(min-width: 1024px)"/>
          <source
            srcset="/assets/home/tablet/image-header.jpg"
            media="(min-width: 768px)"/>
          <source
            srcset="/assets/home/mobile/image-header.jpg"
            media="(min-width: 300px)"/>
          <img
            src="/assets/home/desktop/image-hero.jpg"
            class="absolute top-1/2 left-1/2 -translate-x-1/2 lg:relative z-0 transform -translate-y-96 lg:-translate-y-20 w-[417px] md:w-[750px] lg:h-[750px] lg:w-auto max-w-reset"
            alt="Audiophile headphones"
            width="1481"
            height="750"
        /></picture>
      </div>
    </div>
    <div
      class="max-w-6xl px-6 py-24 mx-auto overflow-y-scroll md:px-10 lg:px-0"
    >
      <category-nav />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VButton from "~/components/VButton.vue";

export default Vue.extend({
  async asyncData({ $dataApi, store }) {
    const product = await $dataApi.getProduct();
    store.dispatch("fetchProducts", product);
  },
  components: { VButton }
});
</script>
