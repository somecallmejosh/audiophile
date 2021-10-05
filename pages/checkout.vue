<template>
  <div class="relative">
    <form
      v-if="$store.state.cart.length"
      @submit.prevent="formSubmit()"
      class="flex flex-col flex-grow min-h-full bg-ap-gray-200"
    >
      <div
        class="grid w-full max-w-6xl gap-6 px-6 py-12 mx-auto md:px-10 lg:px-0 lg:grid-cols-5 lg:space-y-0 lg:gap-6"
      >
        <div class="w-full p-8 space-y-8 bg-white rounded-2xl lg:col-span-3">
          <h1 class="text-xl font-bold tracking-wider uppercase">Checkout</h1>
          <div class="space-y-6">
            <h2 class="font-bold tracking-wider uppercase text-ap-orange-200">
              Billing details
            </h2>
            <div class="grid gap-6 md:grid-cols-2">
              <v-input
                v-model="form[name.id]"
                :payload="name"
                :v="$v.form[name.id] ? $v.form[name.id] : null"
                :set-value="form[name.id]"
              />
              <v-input
                v-model="form[email.id]"
                :payload="email"
                :v="$v.form[email.id] ? $v.form[email.id] : null"
                :set-value="form[email.id]"
              />
              <v-input
                v-model="form[phone.id]"
                :payload="phone"
                :v="$v.form[phone.id] ? $v.form[phone.id] : null"
                :set-value="form[phone.id]"
              />
            </div>
          </div>

          <div class="space-y-6">
            <h2 class="font-bold tracking-wider uppercase text-ap-orange-200">
              Shipping Info
            </h2>
            <div class="grid gap-6 md:grid-cols-2">
              <v-input
                v-model="form[address.id]"
                :payload="address"
                :v="$v.form[address.id] ? $v.form[address.id] : null"
                :set-value="form[address.id]"
                class="md:col-span-2"
              />
              <v-input
                v-model="form[zip.id]"
                :payload="zip"
                :v="$v.form[zip.id] ? $v.form[zip.id] : null"
                :set-value="form[zip.id]"
              />
              <v-input
                v-model="form[city.id]"
                :payload="city"
                :v="$v.form[city.id] ? $v.form[city.id] : null"
                :set-value="form[city.id]"
              />
              <v-input
                v-model="form[country.id]"
                :payload="country"
                :v="$v.form[country.id] ? $v.form[country.id] : null"
                :set-value="form[country.id]"
              />
            </div>
          </div>
          <div class="space-y-6">
            <h2 class="font-bold tracking-wider uppercase text-ap-orange-200">
              Payment Details
            </h2>
            <v-combo
              v-model="form[paymentMethod.id]"
              :payload="paymentMethod"
              :v="$v.form[paymentMethod.id] ? $v.form[paymentMethod.id] : null"
              :set-value="form[paymentMethod.id]"
            />
            <div
              v-if="form.paymentMethod === 'eMoney'"
              class="grid gap-6 md:grid-cols-2"
            >
              <v-input
                v-model="form[emoneyNumber.id]"
                :payload="emoneyNumber"
                :v="$v.form[emoneyNumber.id] ? $v.form[emoneyNumber.id] : null"
                :set-value="form[emoneyNumber.id]"
              />
              <v-input
                v-model="form[emoneyPin.id]"
                :payload="emoneyPin"
                :v="$v.form[emoneyPin.id] ? $v.form[emoneyPin.id] : null"
                :set-value="form[emoneyPin.id]"
              />
            </div>
          </div>
          <div
            v-if="form.paymentMethod === 'cashOnDelivery'"
            class="flex items-center space-x-4"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              role="img"
              class="flex-shrink-0 text-ap-orange-200"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M42.2812 8.4375H46.5938C47.3704 8.4375 48 9.06713 48 9.84375C48 10.6204 47.3704 11.25 46.5938 11.25H45.0938V23.9062C45.0938 24.6829 44.4641 25.3125 43.6875 25.3125H33.8438V40.9688C33.8438 41.7454 33.2141 42.375 32.4375 42.375H25.0773C24.4239 45.5805 21.5831 48 18.1875 48H1.40625C0.629625 48 0 47.3704 0 46.5938C0 45.8171 0.629625 45.1875 1.40625 45.1875H18.1875C20.021 45.1875 21.585 44.012 22.1653 42.375H8.4375C7.66087 42.375 7.03125 41.7454 7.03125 40.9688C7.03125 40.1921 7.66087 39.5625 8.4375 39.5625H12.5625C13.3379 39.5625 13.9688 38.9317 13.9688 38.1562C13.9688 37.3808 13.3379 36.75 12.5625 36.75H9.43444C6.87619 36.75 4.37297 37.6373 2.38575 39.2485C1.78247 39.7376 0.896906 39.6454 0.407719 39.0419C-0.0814688 38.4385 0.0110625 37.553 0.614344 37.0639C2.84203 35.2578 5.58806 34.1792 8.4375 33.9741V18.375C8.4375 17.5984 9.06713 16.9688 9.84375 16.9688H18.375V7.03125C18.375 6.25462 19.0046 5.625 19.7812 5.625H28.1223C31.9334 2.02078 36.9875 0 42.2641 0H46.5938C47.3704 0 48 0.629625 48 1.40625C48 2.18287 47.3704 2.8125 46.5938 2.8125H42.2642C38.805 2.8125 35.4975 3.79453 32.658 5.625H38.0625C38.8326 5.625 39.4688 6.25228 39.4688 7.03125C39.4688 7.52423 39.3372 7.69561 38.4891 8.80021C38.0648 9.3528 37.4613 10.1389 36.6052 11.3157C36.2039 11.8513 36.3433 12.6075 36.8974 12.9688C37.4088 13.3025 38.0923 13.1781 38.4534 12.6856L41.1473 9.01219C41.4121 8.65088 41.8333 8.4375 42.2812 8.4375ZM32.4375 16.9688C32.9273 16.9688 33.3582 17.2195 33.6099 17.5993C35.4415 15.9118 34.2652 12.7969 31.7344 12.7969C29.5943 12.7969 28.2687 15.1348 29.3533 16.9688H32.4375ZM21.1875 8.4375H35.2472C35.0152 8.75898 34.8251 9.00687 34.6644 9.21646C34.3106 9.67792 34.0992 9.95371 33.896 10.4204C29.6796 8.64131 25.1696 12.4771 26.337 16.9688H21.1875V8.4375ZM22.5938 25.4062V19.7812H19.7812V25.4062H22.5938ZM31.0312 39.5625H16.5403C17.5098 36.8283 15.4711 33.9375 12.5625 33.9375H11.25V19.7812H16.9688V26.8125C16.9688 27.5891 17.5984 28.2188 18.375 28.2188H24C24.7766 28.2188 25.4062 27.5891 25.4062 26.8125V19.7812H31.0312V39.5625ZM33.8438 20.7288V22.5H42.2812V12.2217L40.7213 14.3488C39.9301 15.4278 38.6519 16.0371 37.2972 15.9602C37.1467 18.1043 35.7894 19.9393 33.8438 20.7288Z"
                fill="#D87D4A"
              />
            </svg>

            <p class="opacity-50">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
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
                  <p class="font-bold text-ap-black-700">
                    ${{ product.price }}
                  </p>
                </div>
                <div
                  class="flex flex-shrink-0 w-auto h-12 ml-auto font-bold opacity-50"
                >
                  x{{ product.quantity }}
                </div>
              </li>
            </ul>
            <div class="space-y-2">
              <div class="flex justify-between">
                <p class="font-bold tracking-widest text-ap-black-700">TOTAL</p>
                <p class="text-xl font-bold">
                  {{ $store.getters.getCartTotal | currency }}
                </p>
              </div>
              <div class="flex justify-between">
                <p class="font-bold tracking-widest text-ap-black-700">
                  SHIPPING
                </p>
                <p class="text-xl font-bold">{{ 50 | currency }}</p>
              </div>
              <div class="flex justify-between">
                <p class="font-bold tracking-widest text-ap-black-700">
                  VAT (INCLUDED)
                </p>
                <p class="text-xl font-bold">
                  {{ ($store.getters.getCartTotal * 0.2) | currency }}
                </p>
              </div>
              <div class="flex justify-between pt-6">
                <p class="font-bold tracking-widest text-ap-black-700">
                  GRAND TOTAL
                </p>
                <p class="text-xl font-bold text-ap-orange-200">
                  {{ ($store.getters.getCartTotal * 1.2 + 50) | currency }}
                </p>
              </div>
            </div>
            <button class="w-full btn btn-primary">
              Continue & Pay
            </button>
          </div>
        </div>
      </div>
    </form>
    <div
      v-else
      class="flex flex-col w-full max-w-6xl px-6 py-12 mx-auto space-y-6 md:px-10 lg:px-0"
    >
      <h1 class="text-2xl font-bold tracking-wider uppercase">
        Cart is <span class="text-ap-orange-200">empty</span>
      </h1>
      <p class="opacity-50">
        There are no items in your cart. Feel free to have a peek at one of the
        following categories.
      </p>
      <div class="pt-20">
        <category-nav />
      </div>
    </div>
    <transition name="slide-down">
      <div
        v-if="isPaid"
        aria-label="Products"
        class="fixed inset-0 z-40 flex items-center justify-center w-screen h-full max-h-full pt-20 overflow-y-scroll transition-transform duration-0 lg:pt-24"
      >
        <div
          class="fixed z-40 w-11/12 p-6 space-y-6 overflow-y-scroll transition-transform duration-300 ease-in-out transform bg-white shadow-xl md:w-full max-w-11/12 md:max-w-xl content rounded-2xl h-4/5"
        >
          <span
            class="flex items-center justify-center w-20 h-20 text-white rounded-full md:w-24 md:h-24 bg-ap-orange-200"
          >
            <icon-check class="w-12 h-12" />
          </span>
          <div class="space-y-2">
            <p class="text-2xl font-bold tracking-wider uppercase md:text-4xl">
              Thank you <br />for your order
            </p>
            <p class="opacity-50">
              You will receive an email confrmation shortly.
            </p>
          </div>
          <div
            class="grid overflow-hidden md:gap-6 md:grid-cols-2 rounded-2xl bg-ap-gray-200"
          >
            <div class="p-4 space-y-4 divide-y divide-black divide-opacity-25">
              <div class="flex items-center w-full">
                <div class="flex-shrink-0 w-16 h-16 mr-4">
                  <img
                    :src="`/assets/cart/image-${getFirstCartItem.image}.jpg`"
                    :alt="getFirstCartItem.name"
                    class="object-cover w-16 h-16 rounded-lg"
                  />
                </div>
                <div class="mr-4">
                  <p class="font-bold">{{ getFirstCartItem.name }}</p>
                  <p class="font-bold text-ap-black-700">
                    ${{ getFirstCartItem.price }}
                  </p>
                </div>
                <div class="flex flex-shrink-0 w-auto h-12 ml-auto ">
                  <p class="w-full text-center">
                    x {{ getFirstCartItem.quantity }}
                  </p>
                </div>
              </div>
              <div class="pt-2 text-center">
                <p class="font-bold opacity-50">
                  and {{ $store.state.cart.length - 1 }} item(s)
                </p>
              </div>
            </div>
            <div class="flex items-center p-6 text-white bg-ap-black-800">
              <div class="space-y-2 ">
                <p class="tracking-wider uppercase opacity-50">Grand Total</p>
                <p class="text-3xl font-bold">
                  {{ ($store.getters.getCartTotal * 1.2 + 50) | currency }}
                </p>
              </div>
            </div>
          </div>
          <button @click="emptyCart()" class="w-full btn-primary">
            Back to Home
          </button>
        </div>
        <button
          @click="isPaid = false"
          aria-label="Close products menu"
          class="fixed inset-0 z-0 w-full h-full transition-opacity duration-300 ease-out bg-black bg-opacity-50"
        ></button>
      </div>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";
import Vuelidate from "vuelidate";
import { required, requiredIf, email } from "vuelidate/lib/validators";
Vue.use(Vuelidate);
export default Vue.extend({
  async asyncData({ $dataApi, store }) {
    const product = await $dataApi.getProduct();
    store.dispatch("fetchProducts", product);
  },
  data() {
    return {
      name: {
        id: "name",
        label: "Name",
        type: "text",
        errorMessages: [
          {
            validationType: "required",
            text: "Required"
          }
        ]
      },
      email: {
        id: "email",
        label: "Email",
        type: "email",
        errorMessages: [
          {
            validationType: "required",
            text: "Required"
          },
          {
            validationType: "email",
            text: "Wrong format"
          }
        ]
      },
      phone: {
        id: "phone",
        label: "Phone",
        type: "tel",
        errorMessages: [
          {
            validationType: "required",
            text: "Required"
          }
        ]
      },
      address: {
        id: "address",
        label: "Address",
        type: "text",
        errorMessages: [
          {
            validationType: "required",
            text: "Required"
          }
        ]
      },
      zip: {
        id: "zip",
        label: "Zip",
        type: "text",
        errorMessages: [
          {
            validationType: "required",
            text: "Required"
          }
        ]
      },
      city: {
        id: "city",
        label: "City",
        type: "text",
        errorMessages: [
          {
            validationType: "required",
            text: "Required"
          }
        ]
      },
      country: {
        id: "country",
        label: "Country",
        type: "text",
        errorMessages: [
          {
            validationType: "required",
            text: "Required"
          }
        ]
      },
      paymentMethod: {
        id: "paymentMethod",
        label: "Payment Method",
        type: "radio",
        component: "combo",
        options: [
          {
            id: "eMoney",
            text: "e-Money"
          },
          {
            id: "cashOnDelivery",
            text: "Cash on Delivery"
          }
        ],
        errorMessages: [
          {
            validationType: "required",
            text: "Required"
          }
        ]
      },
      emoneyNumber: {
        id: "emoneyNumber",
        label: "e-Money Number",
        type: "text",
        errorMessages: [
          {
            validationType: "requiredIf",
            text: "Required"
          }
        ]
      },
      emoneyPin: {
        id: "emoneyPin",
        label: "e-Money PIN",
        type: "text",
        errorMessages: [
          {
            validationType: "requiredIf",
            text: "Required"
          }
        ]
      },
      form: {
        name: "",
        email: "",
        phone: "",
        address: "",
        zip: "",
        city: "",
        country: "",
        paymentMethod: "",
        emoneyNumber: "",
        emoneyPin: ""
      },
      isPaid: false
    };
  },
  computed: {
    getFirstCartItem() {
      return this.$store.state.cart[0];
    },
    getCartTotal() {
      return this.$store.getters.getCartTotal;
    }
  },
  validations() {
    return {
      form: {
        name: { required },
        email: { required, email },
        phone: { required },
        address: { required },
        zip: { required },
        city: { required },
        country: { required },
        paymentMethod: { required },
        emoneyNumber: {
          requiredIf: requiredIf(() => {
            return this.form.paymentMethod === "eMoney";
          })
        },
        emoneyPin: {
          requiredIf: requiredIf(() => {
            return (
              this.form.paymentMethod === "eMoney" &&
              this.form.emoneyNumber.length > 0
            );
          })
        }
      }
    };
  },
  methods: {
    async formSubmit() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.isPaid = true;
      }
    },
    emptyCart() {
      this.isPaid = false;
      this.$store.dispatch("emptyCart");
      this.$router.push("/");
    }
  }
});
</script>
