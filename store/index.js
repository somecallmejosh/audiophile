export const state = () => ({
  products: [],
  sidePanelIsVisible: false,
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
    if (state.cart.length === 0) {
      return 0.0;
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
  setCart(state, payload) {
    const itemPositionInCart = state.cart.findIndex(
      x => x.itemId === payload.itemId
    );
    if (itemPositionInCart !== -1) {
      state.cart.splice(itemPositionInCart, 1);
      payload.quantity > 0 ? state.cart.push(payload) : null;
    } else {
      state.cart.push(payload);
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
  async updateCart({ commit }, payload) {
    commit("setCart", payload);
  }
};
