export default {
  namespaced: true,
  state: {
    isSiteFirstLoaded: true,
    isMenuNavigationOpened: false,
    hidePageControl: false,
    isActiveBurger: false,
    transitionDirection: '', // to-left || to-right
    isPageLoaderHide: false, // useful in develop mode
    navigation: [],
    router: null,
  },
  getters: {
    isSiteFirstLoaded: (state) => state.isSiteFirstLoaded,
    isMenuNavigationOpened: (state) => state.isMenuNavigationOpened,
    isActiveBurger: (state) => state.isActiveBurger,
    transitionDirection: (state) => state.transitionDirection,
    hidePageControl: (state) => state.hidePageControl,
    isPageLoaderHide: (state) => state.isPageLoaderHide,
    navigation: (state) => state.navigation,
  },
  mutations: {
    // setIsSiteFirstLoaded(state, bool) {
    //   state.isSiteFirstLoaded = bool
    // },
    setIsMenuNavigation(state, bool) {
      state.isMenuNavigationOpened = bool
    },
    setHidePageControl(state, bool) {
      state.hidePageControl = bool
    },
    setDirection(state, route, direction) {
      if (direction) {
        state.transitionDirection = direction;
        return
      }
      const { routes } = state.router?.options
      const currentIndex = routes.findIndex((x) => x.name === state.router.currentRoute.name)
      const goToIndex = routes.findIndex((x) => x.name === route.name)
      state.transitionDirection = currentIndex < goToIndex ? 'to-right' : 'to-left'
    },
    toPage(state, { route, direction }) {
      this.commit('app/setIsMenuNavigation', false)
      this.commit('app/setHidePageControl', true)
      this.commit('app/setDirection', route, direction)

      setTimeout(() => navigateTo(route), 600)
      // setTimeout(() => state.router.push(route), 600)
      setTimeout(() => this.commit('app/setHidePageControl', false), 900)
    },
    setIsPageLoaderHide(state, bool) {
      state.isPageLoaderHide = bool
    },
    setNavigation(state, arr) {
      const orderList = ['index','portfolio','about','contacts', 'matter']
      state.navigation = orderList.map(name => arr.find(x=>x.name === name))
    },
    setRoutes(state, routes) {
      state.router = routes
    }
  },
}
