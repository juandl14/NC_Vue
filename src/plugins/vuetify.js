import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        light: true,
        themes: {
            light: {
                primary: '#f4d6cc',
                secondary: '#32373b',
                tertiary: '#62929e'
            }
        }
    }
})

export default vuetify