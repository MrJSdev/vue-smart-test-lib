import Vue from 'vue'
import { SmartSelect, NameWithPhoto } from './components/index'
const Components = {
  SmartSelect, 
  NameWithPhoto
}

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name])
})

export default Components