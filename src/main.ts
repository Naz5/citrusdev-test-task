import { createApp } from 'vue';

// Vuetify
import 'vuetify/styles/main.sass';
import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css'; // Import MDI icons
import { mdi } from 'vuetify/iconsets/mdi'; // Import Vuetify's MDI integration

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import App from './App.vue';
import router from './router';
import store from './store';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // Use Material Design Icons
    sets: { mdi },
  },
});

createApp(App).use(store).use(router).use(vuetify)
  .mount('#app');
