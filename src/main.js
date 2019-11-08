// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import firebase from 'firebase/app';
import store from './store';
import auth from 'firebase/auth';

Vue.config.productionTip = false;

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB4I8WMEjtaiorSLBwYelykA-hgxQ1YEE4",
  authDomain: "neodeus-41a60.firebaseapp.com",
  databaseURL: "https://neodeus-41a60.firebaseio.com",
  projectId: "neodeus-41a60",
  storageBucket: "neodeus-41a60.appspot.com",
  messagingSenderId: "627141864837",
  appId: "1:627141864837:web:8e00681ae724910bb7a8ec",
  measurementId: "G-DGSEBN67DY"
};
firebase.initializeApp(config);

window.firebase = firebase;

const unsubscribe = firebase.auth().onAuthStateChanged(user => {
    // dispatch user
    store.dispatch('setUser', user);

    new Vue({
        el: '#app',
        router,
        store,
        components: { App },
        template: '<App/>'
    });
    // recursion - this function calls itself on auth state change
    unsubscribe();
});
