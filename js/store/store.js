import Vue from 'vue'
import Vuex from 'vuex'

import usa from './modules/usa'

Vue.use(Vuex);

export const store = new Vuex.Store({
        modules: {
            usa
        },
        state: {
            user: null,
            userCredits: null,

            isAddingInfoModalShown: false,
            isRegistrationModalShown: false,
            isLoginModalShown: false,
            isCreditsModalShown: false,

            // paymentStatus: null,
            fullscreenMessage: null,

            captchaKey: '6LehkGIUAAAAAMN4o-UWmG6HzDkpl3GDQaaHvU3i',
            posts: [],
            isPostsLoading: false,
            dispatches: [],
            isDispatchesLoading: false,

            regions: null,
            isRegionsLoading: false,

            coupon: null
        },
        actions: {

            async register(state, data) {

                let promise = new Promise((resolve, reject) => {

                    axios.post(`/register`, data).then((response) => {

                        this.state.user = response.data.user;

                        resolve(response.data);

                    }).catch((error) => {

                        reject(error);
                    });
                });

                return promise;
            },

            async login(state, data) {

                let promise = new Promise((resolve, reject) => {

                    axios.post(`/login${data.driver ? `/${data.driver}` : ''}`, _.pickBy(data, (value, key) => key !== 'driver')).then((response) => {

                        //this.state.user = response.data.user;

                        resolve(response.data);

                    }).catch((error) => {

                        reject(error);
                    });
                });

                return promise;
            },

            async resetPassword(state, data) {

                let promise = new Promise((resolve, reject) => {

                    axios.post(`/password/${data.token ? `reset` : 'email'}`, data).then((response) => {

                        resolve(response.data);

                    }).catch((error) => {

                        reject(error);
                    });
                });

                return promise;
            },

            async storeAdditionalInfo(state, data) {

                let promise = new Promise((resolve, reject) => {

                    axios.post(`/additional-info`,  data).then((response) => {

                        resolve(response.data);

                    }).catch((error) => {

                        reject(error);
                    });
                });

                return promise;
            },

            async storeFeedbackData(state, data) {

                let promise = new Promise((resolve, reject) => {

                    axios.post(`/feedback`,  data).then((response) => {

                        resolve(response.data);

                    }).catch((error) => {

                        reject(error);
                    });
                });

                return promise;
            },

            async subscribe(state, data) {

                let promise = new Promise((resolve, reject) => {

                    axios.post(`/subscribe`,  data).then((response) => {

                        resolve(response.data);

                    }).catch((error) => {

                        reject(error);
                    });
                });

                return promise;
            },

            async getPosts(state, params) {

                if (this.state.isPostsLoading){
                    return false;
                }

                this.state.isPostsLoading = true;

                let promise = new Promise((resolve, reject) => {

                    axios.get(`/posts`, {params: params})

                        .then((response) => {

                        this.state.isPostsLoading = false;

                        this.state.posts = this.state.posts.concat(response.data.posts);

                        resolve(response.data);

                    }).catch((error) => {

                        this.state.isPostsLoading = false;

                        reject(error);
                    });
                });

                return promise;
            },

            async getDispatches(state, params) {

                if (this.state.isDispatchesLoading){
                    return false;
                }

                this.state.isDispatchesLoading = true;

                let promise = new Promise((resolve, reject) => {

                    axios.get(`/dispatches`, {params: params})

                        .then((response) => {

                            this.state.isDispatchesLoading = false;

                            this.state.dispatches = this.state.dispatches.concat(response.data.dispatches);

                            resolve(response.data);

                        }).catch((error) => {

                        this.state.isDispatchesLoading = false;

                        reject(error);
                    });
                });

                return promise;
            },

            async payCredit(state, data) {

                let promise = new Promise((resolve, reject) => {

                    axios.post(`/credits/${data.id}/pay`, _.pickBy(data, (value, key) => key !== 'id'))

                        .then((response) => {

                            if (response.data.userCredits){

                                this.state.userCredits = response.data.userCredits;
                            }

                            if (response.data.message){

                                this.state.fullscreenMessage = response.data.message;
                            }

                            resolve(response.data);

                        }).catch((error) => {

                        reject(error);
                    });
                });

                return promise;
            },

            async updateProfile(state, data) {

                let promise = new Promise((resolve, reject) => {

                    data.append('_method', 'put');

                    axios.post(`/profile`, data)

                        .then((response) => {

                            this.state.user = response.data.user;

                            resolve(response.data);

                        }).catch((error) => {

                        reject(error);
                    });
                });

                return promise;
            },

            async changePassword(state, data) {

                let promise = new Promise((resolve, reject) => {

                    axios.put(`/password`, data)

                        .then((response) => {

                            resolve(response.data);

                        }).catch((error) => {

                        reject(error);
                    });
                });

                return promise;
            },

            async getRegions(state) {

                if (this.state.isRegionsLoading){
                    return false;
                }

                this.state.isRegionsLoading = true;

                let promise = new Promise((resolve, reject) => {

                    axios.get(`/regions`)

                        .then((response) => {

                        this.state.isRegionsLoading = false;

                        this.state.regions = response.data;
                        
                        // console.log(this.state.regions)

                        resolve(response.data);

                    }).catch((error) => {

                        this.state.isRegionsLoading = false;

                        reject(error);
                    });
                });

                return promise;
            },

            async storeDispatch(state, data) {

                let promise = new Promise((resolve, reject) => {

                    axios.post('/dispatches', data).then((response) => {

                        resolve(response.data);

                    }).catch((error) => {

                        reject(error);
                    });
                });

                return promise;
            },

            async updateDispatch(state, data) {

                let promise = new Promise((resolve, reject) => {

                    axios.put(`/dispatches/${data.id}`, _.pickBy(data, (value, key) => key !== 'id')).then((response) => {

                        resolve(response.data);

                    }).catch((error) => {

                        reject(error);
                    });
                });

                return promise;
            },

            async checkOrAcceptCoupon(state, params) {

                let promise = new Promise((resolve, reject) => {

                    axios.post(`/coupon/check-or-accept`, params)

                        .then((response) => {

                            this.state.coupon = response.data.coupon;

                            resolve(response.data);

                        }).catch((error) => {

                        reject(error);
                    });
                });

                return promise;
            },

            async dispatchesUnsubscribe(state, data) {

                let promise = new Promise((resolve, reject) => {

                    axios.post(`/dispatches/unsubscribe`, data)

                        .then((response) => {

                            resolve(response.data);

                        }).catch((error) => {

                            reject(error);
                    });
                });

                return promise;
            },
        },
        mutations: {

            setItem(state, data) {

                if (Object.keys(data).length && Object.keys(data)[0] in state){
                    state[Object.keys(data)[0]] = data[Object.keys(data)[0]];
                }
            },
            unsetItem(state, key) {

                if (key && key in state){
                    state[key] = null;
                }
            },
        },
    })
;