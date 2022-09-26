import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main'},
    component: HomeView
  },
  {
    path: '/contacts',
    name: 'contacts',
    meta: {layout: 'main'},
    component: () => import('../views/Contacts.vue')
  },
  {
    path: '/sitemap',
    name: 'sitemapPage',
    meta: {layout: 'main'},
    component: () => import('../views/sitemap.vue')
  },
  {
    path: '/museum-history',
    name: 'museumHistoryPage',
    meta: {layout: 'main'},
    component: () => import('../views/about/museumHistory.vue')
  },
  {
    path: '/management',
    name: 'managementPage',
    meta: {layout: 'main'},
    component: () => import('../views/about/management.vue')
  },
  {
    path: '/management/:id',
    name: 'managersSinglePage',
    meta: {layout: 'main'},
    component: () => import('../views/about/managersSingle.vue')
  },
  {
    path: '/visitors-about-us',
    name: 'visitorsAboutUsPage',
    meta: {layout: 'main'},
    component: () => import('../views/about/visitorsAboutUs.vue')
  },
  {
    path: '/visitors-about-us/:id',
    name: 'visitorsCommentSinglePage',
    meta: {layout: 'main'},
    component: () => import('../views/about/visitorsCommentSingle.vue')
  },
  {
    path: '/partners',
    name: 'partnersPage',
    meta: {layout: 'main'},
    component: () => import('../views/about/partners.vue')
  },
  {
    path: '/documents',
    name: 'documentsPage',
    meta: {layout: 'main'},
    component: () => import('../views/about/documents.vue')
  },
  {
    path: '/vacancies',
    name: 'vacanciesPage',
    meta: {layout: 'main'},
    component: () => import('../views/about/vacancies.vue')
  },
  {
    path: '/faq',
    name: 'faqPage',
    meta: {layout: 'main'},
    component: () => import('../views/about/faq.vue')
  },
  {
    path: '/halls',
    name: 'hallsPage',
    meta: {layout: 'main'},
    component: () => import('../views/inMuseum/halls.vue')
  },
  {
    path: '/halls/:id',
    name: 'hallsSinglePage',
    meta: {layout: 'main'},
    component: () => import('../views/inMuseum/hallsSingle.vue')
  },
  {
    path: '/sections',
    name: 'sectionsPage',
    meta: {layout: 'main'},
    component: () => import('../views/inMuseum/sections.vue')
  },
  {
    path: '/sections/:id',
    name: 'sectionsSinglePage',
    meta: {layout: 'main'},
    component: () => import('../views/inMuseum/sectionsSingle.vue')
  },
  {
    path: '/additional',
    name: 'additionalPlacesPage',
    meta: {layout: 'main'},
    component: () => import('../views/inMuseum/additionalPlaces.vue')
  },
  {
    path: '/exhibits',
    name: 'exhibitsPage',
    meta: {layout: 'main'},
    component: () => import('../views/collection/exhibits.vue')
  },
  {
    path: '/exhibits/:id',
    name: 'exhibitsSinglePage',
    meta: {layout: 'main'},
    component: () => import('../views/collection/exhibitsSingle.vue')
  },
  {
    path: '/paintings',
    name: 'paintingsPage',
    meta: {layout: 'main'},
    component: () => import('../views/collection/paintings.vue')
  },
  {
    path: '/paintings/:id',
    name: 'paintingsSinglePage',
    meta: {layout: 'main'},
    component: () => import('../views/collection/paintingsSingle.vue')
  },
  {
    path: '/statues',
    name: 'statuesPage',
    meta: {layout: 'main'},
    component: () => import('../views/collection/statues.vue')
  },
  {
    path: '/statues/:id',
    name: 'statuesSinglePage',
    meta: {layout: 'main'},
    component: () => import('../views/collection/statuesSingle.vue')
  },
  {
    path: '/library',
    name: 'libraryPage',
    meta: {layout: 'main'},
    component: () => import('../views/collection/library.vue')
  },
  {
    path: '/events',
    name: 'eventsPage',
    meta: {layout: 'main'},
    component: () => import('../views/press/events.vue')
  },
  {
    path: '/events/:id',
    name: 'eventsSinglePage',
    meta: {layout: 'main'},
    component: () => import('../views/press/eventsSingle.vue')
  },
  {
    path: '/exhibitions',
    name: 'exhibitionsPage',
    meta: {layout: 'main'},
    component: () => import('../views/press/exhibitions.vue')
  },
  {
    path: '/exhibitions/:id',
    name: 'exhibitionsSinglePage',
    meta: {layout: 'main'},
    component: () => import('../views/press/exhibitionsSingle.vue')
  },
  {
    path: '/news',
    name: 'newsPage',
    meta: {layout: 'main'},
    component: () => import('../views/press/news.vue')
  },
  {
    path: '/news/:id',
    name: 'newsSinglePage',
    meta: {layout: 'main'},
    component: () => import('../views/press/newsSingle.vue')
  },
  {
    path: '/medias-about-us',
    name: 'mediasAboutUsPage',
    meta: {layout: 'main'},
    component: () => import('../views/press/mediasAboutUs.vue')
  },
  {
    path: '/medias-about-us/:id',
    name: 'mediasAboutUsSinglePage',
    meta: {layout: 'main'},
    component: () => import('../views/press/mediasAboutUsSingle.vue')
  },
  {
    path: '/open-data',
    name: 'openDataPage',
    meta: {layout: 'main'},
    component: () => import('../views/press/openData.vue')
  },
  {
    path: '/open-data/:id',
    name: 'openDataSinglePage',
    meta: {layout: 'main'},
    component: () => import('../views/press/openDataSingle.vue') 
  },
  {
    path: '/articles',
    name: 'articlesPage',
    meta: {layout: 'main'},
    component: () => import('../views/press/articles.vue')
  },
  {
    path: '/articles/:id',
    name: 'articlesSinglePage',
    meta: {layout: 'main'},
    component: () => import('../views/press/articlesSingle.vue') 
  },
  {
    path: '/materials-for-medias',
    name: 'materialsPage',
    meta: {layout: 'main'},
    component: () => import('../views/press/materials.vue')
  },
  {
    path: '/photo-gallery',
    name: 'photoGalleryPage',
    meta: {layout: 'main'},
    component: () => import('../views/media/photoGallery.vue')
  },
  {
    path: '/3d-files',
    name: 'threeDFilesPage',
    meta: {layout: 'main'},
    component: () => import('../views/media/3dFiles.vue')
  },
  {
    path: '/3d-files/:id',
    name: '3dFilesSinglePage',
    meta: {layout: 'main'},
    component: () => import('../views/media/3dFilesSingle.vue') 
  },
  {
    path: '/vr-tour',
    name: 'vrTourPage',
    meta: {layout: 'main'},
    component: () => import('../views/media/vrTour.vue')
  },
  {
    path: '/video-gallery',
    name: 'videoGalleryPage',
    meta: {layout: 'main'},
    component: () => import('../views/media/videoGallery.vue')
  },
  {
    path: '/shop',
    name: 'shopPage',
    meta: {layout: 'main'},
    component: () => import('../views/services/shop.vue')
  },
  {
    path: '/shop/:id',
    name: 'shopSinglePage',
    meta: {layout: 'main'},
    component: () => import('../views/services/shopSingle.vue') 
  },
  {
    path: '/visiting-museum',
    name: 'visitingMuseumPage',
    meta: {layout: 'main'},
    component: () => import('../views/services/visitingMuseum.vue')
  },
  {
    path: '/volunteers-program',
    name: 'volunteersProgramPage',
    meta: {layout: 'main'},
    component: () => import('../views/services/volunteersProgram.vue')
  },
  {
    path: '/bank-cards',
    name: 'bankCardsPage',
    meta: {layout: 'main'},
    component: () => import('../views/services/bankCards.vue')
  },
  {
    path: '/bank-cards/:id',
    name: 'bankCardsSinglePage',
    meta: {layout: 'main'},
    component: () => import('../views/services/bankCardsSingle.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
