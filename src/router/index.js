import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import create from '@/components/Create'
import search from '@/components/Search'
import ad from '@/components/Ad'
import adList from '@/components/AdList'
import about from '@/components/About'
import edit from '@/components/Edit'
import success from '@/components/CreateSuccess'
import vendors from '@/components/Vendors'
import vendorList from '@/components/VendorList'
import vendorProfile from '@/components/VendorProfile'
import vendorApplication from '@/components/VendorApplication'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: home
  }, {
    path: '/create',
    name: 'create',
    component: create
  }, {
    path: '/edit/:id',
    name: 'edit',
    component: edit,
    props: true
  }, {
    path: '/search',
    name: 'search',
    component: search
  }, {
    path: '/ad/:id',
    name: 'ad',
    component: ad,
    props: true
  }, {
    path: '/ad-list',
    name: 'ad-list',
    component: adList,
    props: true
  }, {
    path: '/about-us',
    name: 'about',
    component: about
  }, {
    path: '/success',
    name: 'success',
    component: success
  }, {
    path: '/vendors',
    name: 'vendors',
    component: vendors
  }, {
    path: '/vendors/:type',
    name: 'vendor-list',
    component: vendorList,
    props: true
  }, {
    path: '/vendors/:type/:id',
    name: 'vendor-profile',
    component: vendorProfile,
    props: true
  }, {
    path: '/vendor-application',
    name: 'vendor-application',
    component: vendorApplication
  }]
})
