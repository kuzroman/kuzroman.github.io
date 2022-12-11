// import axios from 'axios'
const defaultIsSent = false

// const apiGetAllLeaders = '/api/users/getAll'
// const apiAddLeader = '/api/users/add'

export default {
    namespaced: true,
    state: {
        leaders: [],
        isSent: defaultIsSent
    },
    getters: {
        leaders: (state) => state.leaders,
        isSent: (state) => state.isSent,
        getSortLeaders: (state) => {
            return [...state.leaders]
                .sort((a, b) => b.score - a.score)
                .map((x, i) => ({...x,...{rate: i}}))
        },
    },
    actions: {
        getLeaders({commit}) {
            return fetch('')
                .then((response) => response.json())
                .then((leaders) => {
                    commit('fetchLeaders', leaders)
                })
        },
        addLeader({commit}, data) {
            return '';
            // axios.post(apiAddLeader, data)
            //     .then(function (response) {
            //         console.log(response, data);
            //         commit('setIsSent', true)
            //     })
            //     .catch(function (error) {
            //         // console.error(error);
            //     });
        }
    },
    mutations: {
        fetchLeaders(state, leaders) {
            state.leaders = leaders
        },
        setIsSent(state, bool) {
            state.isSent = bool
        },

        resetStateLeaderBoard(state) {
            state.isSent = defaultIsSent
        },
    },
}



// import axios from 'axios'
// const defaultIsSent = false
//
// const apiGetAllLeaders = '/api/users/getAll'
// const apiAddLeader = '/api/users/add'

// export const state = () => ({
//     leaders: [],
//     isSent: defaultIsSent
// })

// export const getters = {
//     leaders: (state) => state.leaders,
//     isSent: (state) => state.isSent,
//     getSortLeaders: (state) => {
//         return [...state.leaders]
//             .sort((a, b) => b.score - a.score)
//             .map((x, i) => ({...x,...{rate: i}}))
//     },
// }

// export const mutations = {
//     fetchLeaders(state, leaders) {
//         state.leaders = leaders
//     },
//     setIsSent(state, bool) {
//         state.isSent = bool
//     },
//
//     resetStateLeaderBoard(state) {
//         state.isSent = defaultIsSent
//     },
// }

// export const actions = {
    // getLeaders({commit}) {
    //     return fetch(apiGetAllLeaders)
    //         .then((response) => response.json())
    //         .then((leaders) => {
    //             commit('fetchLeaders', leaders)
    //         })
    // },
    // addLeader({commit}, data) {
    //     return axios.post(apiAddLeader, data)
    //         .then(function (response) {
    //             console.log(response, data);
    //             commit('setIsSent', true)
    //         })
    //         .catch(function (error) {
    //             // console.error(error);
    //         });
    // }
// }