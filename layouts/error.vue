<template>
  <div
    class="grid w-full max-w-6xl gap-6 px-6 py-12 mx-auto md:grid-cols-2 md:px-10 lg:px-0 lg:gap-24"
  >
    <div class="flex items-center">
      <div class="space-y-2">
        <h1 class="text-4xl font-bold">
          Doh! <span class="text-ap-orange-200">Our bad</span>
        </h1>
        <p class="opacity-50">
          Something weird happened on our website. Probably something on our
          end. If our server logs are doing their job, they'll definitely let us
          know what's up. If you're seeing this, we're sorry.
        </p>
      </div>
    </div>
    <div class="md:max-h-96">
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
  </div>
</template>
