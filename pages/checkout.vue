<template>
  <div class="flex flex-col flex-grow min-h-full bg-ap-gray-200">
    <div
      class="grid w-full max-w-6xl gap-6 px-6 py-12 mx-auto md:px-10 lg:px-0 lg:grid-cols-5 lg:space-y-0 lg:gap-6"
    >
      <div class="w-full p-8 bg-white rounded-2xl lg:col-span-3">
        <h1 class="text-xl font-bold tracking-wider uppercase">Checkout</h1>
        <p>Checkout form coming soon.</p>
      </div>
      <div class=" lg:col-span-2">
        <div class="p-8 space-y-6 bg-white rounded-2xl">
          <h2 class="text-xl font-bold tracking-wider uppercase">Summary</h2>
          <ul class="space-y-4">
            <li
              v-for="product in $store.state.cart"
              :key="product.id"
              class="flex items-center w-full"
            >
              <div class="flex-shrink-0 w-16 h-16 mr-4">
                <img
                  :src="`/assets/cart/image-${product.image}.jpg`"
                  alt=""
                  class="object-cover w-16 h-16 rounded-lg"
                />
              </div>
              <div class="mr-4">
                <p class="font-bold">{{ product.name }}</p>
                <p class="font-bold text-ap-black-700">${{ product.price }}</p>
              </div>
              <div
                class="flex flex-shrink-0 w-auto h-12 ml-auto font-bold opacity-50"
              >
                x{{ product.quantity }}
              </div>
            </li>
          </ul>
          <div class="space-y-1">
            <div class="flex justify-between">
              <p class="font-bold tracking-widest text-ap-black-700">TOTAL</p>
              <p class="text-2xl font-bold">
                ${{ $store.getters.getCartTotal * 1.2 }}
              </p>
            </div>
            <div class="flex justify-between">
              <p class="font-bold tracking-widest text-ap-black-700">
                SHIPPING
              </p>
              <p class="text-2xl font-bold">$50</p>
            </div>
            <div class="flex justify-between">
              <p class="font-bold tracking-widest text-ap-black-700">
                VAT (INCLUDED)
              </p>
              <p class="text-2xl font-bold">
                ${{ $store.getters.getCartTotal * 0.2 }}
              </p>
            </div>
            <div class="flex justify-between">
              <p class="font-bold tracking-widest text-ap-black-700">
                GRAND TOTAL
              </p>
              <p class="text-2xl font-bold text-ap-orange-200">
                ${{ $store.getters.getCartTotal * 1.2 + 50 }}
              </p>
            </div>
          </div>
          <button class="w-full btn btn-primary">Continue & Pay</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
export default Vue.extend({});
</script>
