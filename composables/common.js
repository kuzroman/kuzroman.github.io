// import {useState} from "nuxt/app";
// export const useCounter = () => useState('counter', () => 0)

import { useRoute as use_Route } from 'vue-router' // workaround bug https://github.com/nuxt/framework/issues/6646
export const useRoute = () => use_Route()
