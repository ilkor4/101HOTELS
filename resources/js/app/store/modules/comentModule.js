import axios from "axios";

export const commentModule = {
    state: () => ({
        comments: [],
        currentComment: null,
        isLoading: false,
        selectedSort: '',
    }),
    getters: {
        sortedComments(state) {
            return [...state.comments]
                .sort((itemA, itemB) => {
                    return itemA[state.selectedSort]
                        ?.localeCompare(itemB[state.selectedSort])
                })
        }
    },
    mutations: {
        setComments(state, comments) {
            state.comments = comments;
        },
        setCurrentComment(state, comment) {
            state.currentComment = comment;
        },
        setIsLoading(state, isLoading) {
            state.isLoading = isLoading;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
    },
    actions: {
        async fetchGetComments({state, commit}) {
            commit('setIsLoading', true);

            try {
                const response = await axios.get('/api/comments/');

                commit('setComments', response.data);
            } catch (err) {
                console.log(err)
            } finally {
                commit('setIsLoading', false);
            }
        },
        async fetchGetComment({commit, state}, id) {
            try {
                const response = await axios.get(`/api/comments/${id}`);

                commit('setCurrentComment', response.data);
            } catch (err) {
                console.log(err)
            }
        },
        async fetchCreateComment({dispatch}, comment) {
            try {
                await axios.post('/api/comments/', comment);
                await dispatch('fetchGetComments');
            } catch (err) {
                console.log(err)
            }
        },
        async fetchEditComment({dispatch}, comment) {
            try {
                await axios.patch(`/api/comments/${comment.id}`, comment);
                await dispatch('fetchGetComments');
                await dispatch('fetchGetComment', comment.id);
            } catch (err) {
                console.log(err)
            }
        },
        async fetchDeleteComment({dispatch}, id) {
            try {
                await axios.delete(`/api/comments/${id}`);
                await dispatch('fetchGetComments');
            } catch (err) {
                console.log(err)
            }
        }

    },
    namespaced: true
}
