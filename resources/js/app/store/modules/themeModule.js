export const themeModule = {
    state: () => ({
        theme: 'light'
    }),
    mutations: {
        setTheme(state, theme) {
            state.theme = theme;
        }
    },
    namespaced: true
}
