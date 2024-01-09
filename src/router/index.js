import { createRouter, createWebHistory } from 'vue-router'
import MainPageView from '../views/MainPageView.vue'
import AboutView from '../views/AboutView.vue'
import CareerMap from '../views/CareerMapView.vue'
import SkillsMap from '../views/SkillsMapView.vue'
import SkillsMapMain from '../views/SkillMapMainView.vue'
import FunctionalSkills from '../views/FunctionalSkillsView.vue'
import EnablingSkillsDetails from '../views/EnablingSkillsDetailsView.vue'
import FunctionalSkillsDetails from '../views/FunctionalSkillsDetailsView.vue'
import EnablingSkills from '../views/EnablingSkillsView.vue'
import ContactUs from '../views/ContactUsView.vue'
import AboutThePSF from '../views/AboutThePSFView.vue'
import TAAE from '../views/TAAEView.vue'
import Message from '../views/MessageView.vue'
import TechnicalGuide from '../views/TechnicalGuideView.vue'
import Testimonial from '../views/TestimonialView.vue'
import Acknowledgement from '../views/AcknowledgmentView.vue'
import RevisionLog from '../views/RevisionLogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: CareerMap
    },
    {
      path: '/careermap',
      name: 'careermap',
      component: CareerMap
    },
    {
      path: '/skillsmap/:text',
      name: 'skillsmap',  
      component: SkillsMap
    },
    ,
    {
      path: '/skillsmapmain',
      name: 'skillsmapmain',  
      component: SkillsMapMain
    },
    {
      path: '/functionalskills',
      name: 'functionalskills',
      component: FunctionalSkills
    },
    {
      path: '/enablingskills',
      name: 'enablingskills',
      component: EnablingSkills
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: ContactUs
    },
    {
      path: '/abouthePSF',
      name: 'abouthePSF',
      component: AboutThePSF
    },
    {
      path: '/taae',
      name: 'taae',
      component: TAAE
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/technicalguide',
      name: 'technicalguide',
      component: TechnicalGuide
    },
    {
      path: '/testimonial',
      name: 'testimonial',
      component: Testimonial
    },
    {
      path: '/acknowledgement',
      name: 'acknowledgement',
      component: Acknowledgement
    },
    {
      path: '/revisionlog',
      name: 'revisionlog',
      component: RevisionLog
    },
    {
      path: '/functionalskillsdetails/:fscCode',
      name: 'functionalskillsdetails',
      component: FunctionalSkillsDetails
    },
    {
      path: '/enablingskillsdetails/:escCode',
      name: 'enablingskillsdetails',
      component: EnablingSkillsDetails
    },
    {
      path: '/MainPage',
      name: 'MainPage',
      component: MainPageView
    },
  ]
})

export default router
