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
      class="max-w-6xl px-6 py-24 mx-auto space-y-20 md:px-10 lg:px-0 md:space-y-24"
    >
      <category-nav />
      <section aria-label="Product teasers" class="space-y-12">
        <div
          class="relative grid gap-6 px-12 py-16 overflow-hidden rounded-2xl bg-ap-orange-200 lg:grid-cols-2 lg:items-center"
        >
          <div class="relative z-10 mx-auto lg:mx-0 lg:min-h-[420px]">
            <picture
              ><source
                srcset="/assets/home/desktop/image-speaker-zx9.png"
                media="(min-width: 1024px)"/>
              <source
                srcset="/assets/home/tablet/image-speaker-zx9.png"
                media="(min-width: 768px)"/>
              <source
                srcset="/assets/home/mobile/image-speaker-zx9.png"
                media="(min-width: 300px)"/>
              <img
                src="/assets/home/desktop/image-speaker-zx9.png"
                alt="Zx9 Speaker"
                height="388"
                width="320"
                class="w-40 h-auto md:w-60 lg:w-[410px] lg:absolute"
            /></picture>
          </div>
          <div
            class="relative z-10 space-y-6 text-center lg:text-left lg:pr-32"
          >
            <h2 class="text-5xl font-bold text-white uppercase">ZX9 Speaker</h2>
            <p class="font-thin text-white opacity-75">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <nuxt-link
              to="/speakers/zx9-speaker"
              class="btn-secondary-alt"
              aria-label="Produce information about the ZX9 speaker"
              >See Product</nuxt-link
            >
          </div>
          <div
            class="absolute top-0 z-0 transform -translate-x-1/2 -translate-y-1/4 w-[600px] h-[600px] left-1/2 opacity-25 lg:left-0 lg:-translate-y-12 lg:-translate-x-40 lg:h-[944px] lg:w-[944px]"
          >
            <svg
              aria-hidden="true"
              role="img"
              class="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 944 944"
            >
              <g>
                <circle
                  cx="472"
                  cy="472"
                  r="235.5"
                  style="fill:none;stroke:#fff"
                />
                <circle
                  cx="472"
                  cy="472"
                  r="270.5"
                  style="fill:none;stroke:#fff"
                />
                <circle
                  cx="472"
                  cy="472"
                  r="471.5"
                  style="fill:none;stroke:#fff"
                />
              </g>
            </svg>
          </div>
        </div>
        <div class="relative overflow-hidden rounded-2xl">
          <picture
            ><source
              srcset="/assets/home/desktop/image-speaker-zx7.jpg"
              media="(min-width: 1024px)"/>
            <source
              srcset="/assets/home/tablet/image-speaker-zx7.jpg"
              media="(min-width: 768px)"/>
            <source
              srcset="/assets/home/mobile/image-speaker-zx7.jpg"
              media="(min-width: 300px)"/>
            <img
              src="/assets/home/desktop/image-speaker-zx7.jpg"
              alt="Zx9 Speaker"
              height="388"
              width="320"
              class="object-cover w-full"
          /></picture>
          <div
            class="absolute space-y-6 transform -translate-y-1/2 md:space-y-8 top-1/2 left-6 md:left-12"
          >
            <h2 class="text-3xl font-bold uppercase md:text-4xl">
              ZX7 Speaker
            </h2>
            <nuxt-link
              class="btn-secondary"
              to="/speakers/zx7-speaker"
              aria-label="More information about the ZX7 speaker"
              >See Product</nuxt-link
            >
          </div>
        </div>
        <div class="grid gap-6 md:gap-12 md:grid-cols-2">
          <div class="overflow-hidden rounded-2xl">
            <picture
              ><source
                srcset="/assets/home/desktop/image-earphones-yx1.jpg"
                media="(min-width: 1024px)"/>
              <source
                srcset="/assets/home/tablet/image-earphones-yx1.jpg"
                media="(min-width: 768px)"/>
              <source
                srcset="/assets/home/mobile/image-earphones-yx1.jpg"
                media="(min-width: 300px)"/>
              <img
                src="/assets/home/desktop/image-earphones-yx1.jpg"
                alt="Zx9 Speaker"
                height="388"
                width="320"
                class="object-cover w-full"
            /></picture>
          </div>
          <div
            class="flex items-center px-6 md:px-12 bg-ap-gray-200 rounded-2xl"
          >
            <div class="py-12 space-y-6">
              <h2 class="text-3xl font-bold uppercase md:text-4xl">
                YX1 Earphones
              </h2>
              <nuxt-link
                class="btn-secondary"
                to="/earphones/yx1-earphones"
                aria-label="More information about the YX1 earphones"
                >See Product</nuxt-link
              >
            </div>
          </div>
        </div>
      </section>
      <product-validation />
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
