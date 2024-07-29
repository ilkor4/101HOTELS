import axios from "axios";
import {sortArray} from "../helpers/sortArray";

export const commentModule = {
    state: () => ({
        comments: [],
        currentComment: null,
        selectedSort: '',
        isLoading: false,
        totalPages: 0,
        currentPage: 1,
        commentsOnPage: 3
    }),
    getters: {
        sortedComments(state) {
            return sortArray([...state.comments], state.selectedSort)
        },
        sortedAndCutComments(state, getters) {
            const start = (state.currentPage - 1) * state.commentsOnPage;
            const end = start + state.commentsOnPage

            return getters
                .sortedComments
                .slice(start, end);

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
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },
        setCurrentPage(state, currentPage) {
            state.currentPage = currentPage;
        },
    },
    actions: {
        async fetchGetComments({commit, state}) {
            try {
                commit('setIsLoading', true);

                const response = await axios.get('/api/comments/');

                commit('setComments', response.data)
                commit('setTotalPages', Math.ceil(state.comments.length / state.commentsOnPage));
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
