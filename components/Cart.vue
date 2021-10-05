<template>
  <div class="relative w-screen max-w-6xl mx-auto">
    <div
      class="absolute z-10 w-11/12 p-4 space-y-12 transition-transform duration-300 ease-in-out transform -translate-x-1/2 bg-white shadow-xl left-1/2 md:max-w-md md:right-6 wrapper rounded-xl top-24 md:translate-x-0 md:left-auto lg:top-4 lg:right-0"
    >
      <div class="flex justify-between">
        <h2 class="mb-2 text-2xl font-bold">
          Cart ({{ shoppingCartItemCount }})
        </h2>
        <button
          v-if="$store.state.cart.length"
          @click="emptyCart"
          class="underline opacity-50 hover:no-underline"
        >
          Remove All
        </button>
      </div>
      <ul class="space-y-6">
        <li
          v-for="product in $store.state.cart"
          :key="product.id"
          class="flex items-center w-full max-w-full"
        >
          <div class="flex-shrink-0 w-16 h-16 mr-4">
            <img
              :src="`/assets/cart/image-${product.image}.jpg`"
              :alt="product.name"
              class="object-cover w-16 h-16 rounded-lg"
            />
          </div>
          <div class="flex flex-col mr-4 flex-grow-1">
            <p class="font-bold">{{ product.name }}</p>
            <p class="font-bold text-ap-black-700">${{ product.price }}</p>
          </div>
          <div class="flex flex-shrink-0 w-auto h-12 ml-auto">
            <button
              @click="adjustProductCount('decrease', product.itemId)"
              class="px-4 text-center transition-colors duration-300 ease-in-out bg-ap-gray-200 hover:bg-opacity-75 hover:text-ap-orange-200"
            >
              -
            </button>
            <div
              class="flex items-center w-8 text-center md:w-8 bg-ap-gray-200"
            >
              <p class="w-full text-center">{{ product.quantity }}</p>
            </div>
            <button
              @click="adjustProductCount('increase', product.itemId)"
              class="px-4 text-center transition-colors duration-300 ease-in-out bg-ap-gray-200 hover:bg-opacity-75 hover:text-ap-orange-200"
            >
              +
            </button>
          </div>
        </li>
      </ul>
      <div class="flex justify-between">
        <p class="font-bold tracking-widest text-ap-black-700">TOTAL</p>
        <p class="text-2xl font-bold">
          {{ $store.getters.getCartTotal | currency }}
        </p>
      </div>
      <div>
        <nuxt-link
          @click.native="toggleCartVisibility()"
          v-if="shoppingCartItemCount > 0"
          class="w-full btn btn-primary"
          to="/checkout"
          >Checkout</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    shoppingCartItemCount() {
      return this.$store.state.cart.length;
    },
    itemPluralization() {
      return this.shoppingCartItemCount === 1 ? "product" : "products";
    }
  },
  methods: {
    toggleCartVisibility() {
      this.$store.dispatch("toggleCartVisibility");
    },
    adjustProductCount(direction, id) {
      this.$store.dispatch("adjustProductCount", { direction, id });
    },
    emptyCart() {
      confirm("Are you sure you want to remove all items from your cart?") &&
        this.$store.dispatch("emptyCart");
    }
  }
};
</script>
