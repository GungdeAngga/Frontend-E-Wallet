import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import Vue from 'vue'
import VueApollo from 'vue-apollo'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

const httpLink = new HttpLink({
  uri: 'https://alive-beagle-22.hasura.app/v1/graphql'
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

new Vue({
  router,
  vuetify,
    apolloProvider,
  render: h => h(App)
}).$mount('#app')
