<template>
  <div class="flex flex-col min-h-screen">
    <header
      class="relative z-30 px-6 text-white bg-ap-black-800 md:px-10 lg:px-0"
    >
      <div
        class="flex items-center justify-center h-20 max-w-6xl mx-auto lg:h-24"
      >
        <button
          :aria-label="
            $store.state.sidePanelIsVisible
              ? 'Close product menu'
              : 'Open product menu'
          "
          @click="sidePanelVisibility()"
          class="flex items-center h-full mr-auto md:mr-8 lg:hidden"
        >
          <icon-hamburger />
        </button>
        <nuxt-link
          class="flex items-center h-full lg:w-1/3"
          to="/"
          aria-label="Home page"
          @click.native="sidePanelVisibility(false)"
          ><logo
        /></nuxt-link>
        <nav
          aria-label="Header Site Nav"
          class="hidden h-full tracking-widest lg:flex site-nav lg:mx-auto lg:w-1/3"
        >
          <ul
            class="flex items-center h-full space-x-4 text-sm font-bold uppercase "
          >
            <li
              class="flex items-center h-full"
              v-for="link in nav"
              :key="link.text.toLowerCase()"
            >
              <nuxt-link
                :to="link.path"
                :exact="link.text === 'Home'"
                class="flex items-center h-full transition-colors duration-150 ease-in-out hover:text-ap-orange-200"
                >{{ link.text }}</nuxt-link
              >
            </li>
          </ul>
        </nav>
        <button
          @click="toggleCartVisibility()"
          aria-label="View shopping cart"
          class="flex items-center h-full ml-auto hover:text-ap-orange-200 lg:w-1/3 lg:justify-end group"
        >
          <icon-cart />
          <span
            v-if="$store.state.cart.length"
            class="flex items-center justify-center w-3 h-3 text-black transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full group-hover:bg-ap-orange-200 "
            >+</span
          >
        </button>
      </div>
    </header>
    <main class="relative z-10 flex flex-col flex-grow bg-white">
      <nuxt />
    </main>
    <footer
      class="relative z-0 px-6 pt-12 pb-10 text-white bg-ap-black-800 md:px-10 lg:px-0"
    >
      <div class="relative max-w-6xl mx-auto">
        <div
          class="flex flex-col justify-center max-w-6xl mx-auto mb-0 text-center md:mb-9 lg:flex-row lg:items-center lg:justify-between"
        >
          <nuxt-link to="/" aria-label="Home page">
            <logo class="block mx-auto mb-12 md:mb-8 md:mx-0 lg:m-0" />
          </nuxt-link>
          <nav
            aria-label="Footer Site Nav"
            class="flex h-full mx-auto mb-12 site-nav justify-self-center md:m-0"
          >
            <ul
              class="flex flex-col items-center h-full space-x-0 space-y-4 text-sm font-bold tracking-widest uppercase md:space-x-4 md:flex-row md:space-y-0 lg:top-28"
            >
              <li
                class="flex items-center h-full"
                v-for="link in nav"
                :key="link.text.toLowerCase()"
              >
                <nuxt-link
                  :to="link.path"
                  :exact="link.text === 'Home'"
                  class="flex items-center h-full transition-colors duration-150 ease-in-out hover:text-ap-orange-200"
                  >{{ link.text }}</nuxt-link
                >
              </li>
            </ul>
          </nav>
        </div>
        <div
          class="flex flex-col md:flex-row md:items-end lg:items-center md:justify-between"
        >
          <div class="mb-12 text-center opacity-50 md:mb-0 md:text-left">
            <p class="max-w-xl mx-auto mb-12 md:mx-0">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <p>Copyright 2021. All Rights Reserved</p>
          </div>
          <nav
            aria-label="Social Media"
            class="flex justify-center md:justify-end"
          >
            <ul class="flex items-center mx-auto space-x-4 md:mx-0">
              <li>
                <a
                  href="#"
                  class="transition-colors hover:text-ap-orange-200"
                  aria-label="Facebook"
                >
                  <icon-facebook />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="transition-colors hover:text-ap-orange-200"
                  aria-label="Twitter"
                >
                  <icon-twitter />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="transition-colors hover:text-ap-orange-200"
                  aria-label="Instagram"
                >
                  <icon-instagram />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div
          class="absolute w-24 h-2 transform -translate-x-1/2 md:translate-x-0 left-1/2 md:left-0 -top-12 bg-ap-orange-200"
        ></div>
      </div>
    </footer>
    <transition name="slide-down">
      <nav
        v-if="$store.state.sidePanelIsVisible"
        aria-label="Products"
        class="fixed z-10 w-screen h-screen max-h-screen overflow-y-scroll transition-transform pt-30 duration-0 lg:hidden lg:pt-24"
      >
        <div
          class="relative z-10 p-6 pt-40 transition-transform duration-300 ease-in-out transform bg-white shadow-xl content rounded-br-2xl rounded-bl-2xl"
        >
          <category-nav />
        </div>
        <button
          @click="sidePanelVisibility()"
          aria-label="Close products menu"
          class="fixed inset-0 z-0 w-full h-full transition-opacity duration-300 ease-out bg-black bg-opacity-50"
        ></button>
      </nav>
    </transition>

    <transition name="slide-down-right">
      <div
        v-if="$store.state.cartIsVisible"
        aria-label="Items in shopping cart"
        class="fixed z-10 w-screen h-screen max-h-screen overflow-y-scroll transition-transform pt-30 duration-0 lg:pt-24"
      >
        <cart />
        <button
          @click="toggleCartVisibility()"
          aria-label="Close shopping cart"
          class="fixed inset-0 z-0 w-full h-full transition-opacity duration-300 ease-out bg-black bg-opacity-50"
        ></button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          text: "Home",
          path: "/"
        },
        {
          text: "Headphones",
          path: "/headphones"
        },
        {
          text: "Speakers",
          path: "/speakers"
        },
        {
          text: "Earphones",
          path: "/earphones"
        }
      ]
    };
  },
  methods: {
    sidePanelVisibility(payload) {
      this.$store.dispatch("toggleSidepanelVisibility", payload);
    },
    toggleCartVisibility() {
      this.$store.dispatch("toggleCartVisibility");
    }
  },
  mounted() {
    const cartLength = this.$store.state.cart.length;
    cartLength === 0 && localStorage.getItem("cart")
      ? this.$store.dispatch(
          "replaceCartFromLocalStorage",
          JSON.parse(localStorage.getItem("cart"))
        )
      : null;
  }
};
</script>
<style>
.slide-down-enter-active {
  transition: all 0.15s ease;
}
.slide-down-leave-active {
  transition: all 0.4s ease;
}
.slide-down-enter,
.slide-down-leave-to {
  @apply bg-opacity-25;
}
.slide-down-enter-active .content {
  transition: all 0.4s ease-in-out;
}
.slide-down-leave-active .content {
  transition: all 0.35s ease-out;
}
.slide-down-enter .content,
.slide-down-leave-to .content {
  @apply -translate-y-full;
}

.slide-down-right-enter-active {
  transition: all 0.15s ease;
}
.slide-down-right-leave-active {
  transition: all 0.4s ease;
}
.slide-down-right-enter,
.slide-down-right-leave-to {
  @apply bg-opacity-25;
}
.slide-down-right-enter-active .wrapper {
  transition: all 0.4s ease-in-out;
}
.slide-down-right-leave-active .wrapper {
  transition: all 0.35s ease-out;
}
.slide-down-right-enter .wrapper,
.slide-down-right-leave-to .wrapper {
  @apply -translate-y-full;
}

.btn-primary,
.btn-secondary,
.btn-secondary-alt {
  @apply h-12 px-8 inline-flex items-center justify-center text-center uppercase tracking-widest font-bold transition-colors duration-200 ease-in-out border text-sm;
}

.btn-primary {
  @apply bg-ap-orange-200 hover:bg-ap-orange-100 border-ap-orange-200 hover:border-ap-orange-100 text-white;
}
.btn-secondary {
  @apply bg-transparent hover:bg-black hover:text-white border-black;
}
.btn-secondary-alt {
  @apply hover:bg-white bg-black text-white hover:text-black border-black;
}
</style>
