import { createApp } from 'vue'
import App from '@/App.vue'
import { registerPlugins } from '@core/utils/plugins'
import { createPinia } from 'pinia'
import Toast from "vue-toastification"
import Cookies from 'js-cookie'

// Styles
import '@core/scss/template/index.scss'
import '@styles/styles.scss'
import "vue-toastification/dist/index.css"

import 'sweetalert2/dist/sweetalert2.min.css'
import VueSweetalert2 from 'vue-sweetalert2'

// Create vue app
const app = createApp(App)

app.use(createPinia())

app.use(VueSweetalert2)

const options = {
// You can set your default options here
}

app.use(Toast, options)


// Register plugins
registerPlugins(app)


const sessionCookie = Cookies.get('user_session_access_cookie')
if (!sessionCookie) {
  localStorage.removeItem('fuserData')
  localStorage.removeItem('faccessToken')
  localStorage.removeItem('fuserAbilityRules')
  //window.location.href = '/login'
}

// Mount vue app
app.mount('#app')
