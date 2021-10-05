export const state = () => ({
  products: [],
  sidePanelIsVisible: false,
  cartIsVisible: false,
  cart: []
});

export const getters = {
  getProduct: state => slug => {
    return state.products.json.hits.filter(product => product.slug === slug)[0];
  },
  productCategories: state => {
    let categories = [];
    state.products.json.hits.forEach(item => {
      if (categories.indexOf(item.category) === -1) {
        categories.push(item.category);
      }
    });
    return categories;
  },
  filterCategoryItems: state => category => {
    return state.products.json.hits.filter(item => item.category === category);
  },
  getCategoryFromSlug: state => slug => {
    const product = state.products.json.hits.filter(
      product => product.slug === slug
    )[0];
    return product.category;
  },
  getCartTotal: state => {
    if (state.cart.length) {
      let total = 0;
      state.cart.forEach(item => {
        const quantityTotal = item.quantity * item.price;
        total += quantityTotal;
      });
      return total;
    } else {
      return 0;
    }
  }
};

export const mutations = {
  setProducts(state, payload) {
    state.products = payload;
  },
  setSidepanelVisibility(state, payload) {
    typeof payload === "boolean"
      ? (state.sidePanelIsVisible = payload)
      : (state.sidePanelIsVisible = !state.sidePanelIsVisible);
  },
  setCartVisibility(state, payload) {
    typeof payload === "boolean"
      ? (state.cartIsVisible = payload)
      : (state.cartIsVisible = !state.cartIsVisible);
  },
  setCart(state, payload) {
    const itemPositionInCart = state.cart.findIndex(
      x => x.itemId === payload.itemId
    );
    function pushToCart() {
      payload.quantity > 0 ? state.cart.push(payload) : null;
    }
    if (itemPositionInCart !== -1) {
      state.cart.splice(itemPositionInCart, 1);
      pushToCart();
    } else {
      pushToCart();
    }
    if (process.client) {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  },
  replaceCartFromLocalStorage(state, payload) {
    state.cart = payload;
  },
  adjustProductCount(state, payload) {
    const itemPositionInCart = state.cart.findIndex(
      x => x.itemId === payload.id
    );
    console.log(state.cart[itemPositionInCart].quantity);
    if (payload.direction === "increase") {
      state.cart[itemPositionInCart].quantity++;
    }
    if (payload.direction === "decrease") {
      if (state.cart[itemPositionInCart].quantity > 1) {
        state.cart[itemPositionInCart].quantity--;
      } else {
        const confirmation = confirm(
          "Are you sure you want to remove this item from your cart?"
        );
        if (confirmation) {
          state.cart.splice(itemPositionInCart, 1);
        }
      }
    }
    if (process.client) {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  },
  emptyCart(state) {
    state.cart = [];
    if (process.client) {
      localStorage.removeItem("cart");
    }
  }
};

export const actions = {
  async fetchProducts({ commit }, payload) {
    commit("setProducts", payload);
  },
  async toggleSidepanelVisibility({ commit }, payload) {
    commit("setSidepanelVisibility", payload);
  },
  async toggleCartVisibility({ commit }, payload) {
    commit("setCartVisibility", payload);
  },
  async updateCart({ commit }, payload) {
    commit("setCart", payload);
  },
  async adjustProductCount({ commit }, payload) {
    commit("adjustProductCount", payload);
  },
  async replaceCartFromLocalStorage({ commit }, payload) {
    commit("replaceCartFromLocalStorage", payload);
  },
  async emptyCart({ commit }) {
    commit("emptyCart");
  }
};
