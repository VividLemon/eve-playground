// TODO will grab items from api, get their market prices
// updates state
// When new types are needed, checks here first to see if it's already fetched
// If it is, don't fetch, if it isn't assemble query string, response is parsed here
interface State {
  items: Array<any>
}

export const state = (): State => ({
  items: []
})

export const mutations = {
  ADD_ITEM (state: State, payload: unknown) {
    state.items.push(payload)
  }
}

export const getters = {
  getItems: (state: State) => state.items
}
