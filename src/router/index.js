import Vue from 'vue'
import {IonicVueRouter} from '@ionic/vue'
import CameraPage from '@/components/CameraPage'
import GeolocationPage from '@/components/GeolocationPage'
import DeviceInfo from '@/components/DeviceInfo'
import Motion from '@/components/Motion'

Vue.use(IonicVueRouter)

export default new IonicVueRouter({
  routes: [
    {
      path: '/',
      name: 'CameraPage',
      component: CameraPage
    },
    {
      path: '/geo-location-page',
      name: 'GeolocationPage',
      component: GeolocationPage
    },
    {
      path: '/device-info-page',
      name: 'DeviceInfoPage',
      component: DeviceInfo
    },
    {
      path: '/motion',
      name: 'Motion',
      component: Motion
    }
  ]
})
