<template>
  <section
    aria-label="Production Validation"
    class="grid gap-12 text-center lg:grid-cols-2"
  >
    <div class="lg:order-1">
      <picture>
        <source
          srcset="/assets/shared/desktop/image-best-gear.jpg"
          media="(min-width: 1024px)"/>
        <source
          srcset="/assets/shared/tablet/image-best-gear.jpg"
          media="(min-width: 768px)"/>
        <source
          srcset="/assets/shared/tablet/image-best-gear.jpg"
          media="(min-width: 300px)"/>
        <img
          src="/assets/${pshared/tablet/image-best-gear.jpg"
          class="object-cover w-full rounded-lg md:h-full"
          alt="Product"
      /></picture>
    </div>
    <div class="lg:flex lg:items-center lg:text-left lg:order-0 lg:pr-24">
      <div class="w-full max-w-2xl mx-auto space-y-8 lg:max-w-reset lg:mx-0">
        <h2 class="text-3xl font-bold capitalize lg:text-5xl">
          Bringing you the <span class="text-ap-orange-200">best</span> audio
          gear
        </h2>
        <p class="opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
