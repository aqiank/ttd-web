import Vue from 'vue'
import Vuex from 'vuex'

import API from '@/API'

Vue.use(Vuex)

const DEFAULT_LOCATION_FORM = {
  id: 0,
  data: {
    type: 'location',
    title: '',
    description: '',
    address: '',
    coordinates: [0, 0],
    phone: '',
    websiteURL: '',
    coverImageURL: '',
    imageURLs: [],
    tags: [],
    openingHours: {
      'monday': '',
      'tuesday': '',
      'wednesday': '',
      'thursday': '',
      'friday': '',
      'saturday': '',
      'sunday': '',
    }
  }
}

const DEFAULT_EVENT_FORM = {
  id: 0,
  data: {
    type: 'event',
    title: '',
    description: '',
    address: '',
    coordinates: [0, 0],
    phone: '',
    websiteURL: '',
    coverImageURL: '',
    imageURLs: [],
    tags: [],
  }
}

export default new Vuex.Store({
  state: {
    locationFormVisible: false,
    locationForm: DEFAULT_LOCATION_FORM,
    locations: [],
    eventFormVisible: false,
    eventForm: DEFAULT_EVENT_FORM,
    events: [],
  },
  mutations: {
    // Location
    setLocationFormVisibility(state, payload) {
      state.locationFormVisible = payload
    },
    setLocationForm(state, payload) {
      state.locationForm = payload
    },
    resetLocationForm(state) {
      state.locationForm = DEFAULT_LOCATION_FORM
    },
    setLocationFormTitle(state, title) {
      state.locationForm.data.title = title
    },
    setLocationFormDescription(state, description) {
      state.locationForm.data.description = description
    },
    setLocationFormAddress(state, address) {
      state.locationForm.data.address = address
    },
    setLocationFormLatitude(state, latitude) {
      Vue.set(state.locationForm.data.coordinates, 0, latitude)
    },
    setLocationFormLongitude(state, longitude) {
      Vue.set(state.locationForm.data.coordinates, 1, longitude)
    },
    setLocationFormPhone(state, phone) {
      state.locationForm.data.phone = phone
    },
    setLocationFormWebsiteURL(state, websiteURL) {
      state.locationForm.data.websiteURL = websiteURL
    },
    setLocationFormCoverImageURL(state, coverImageURL) {
      Vue.set(state.locationForm.data, 'coverImageURL', coverImageURL)
    },
    addLocationFormImageURL(state, imageURL) {
      const imageURLs = state.locationForm.data.imageURLs
      imageURLs.push(imageURL)
      Vue.set(state.locationForm.data, 'imageURLs', imageURLs)
    },
    removeLocationFormImageURL(state, imageURL) {
      const imageURLs = state.locationForm.data.imageURLs
      const i = imageURLs.indexOf(imageURL)

      if (i < 0)  {
        return
      }

      imageURLs.splice(i, 1)
      Vue.set(state.locationForm.data, 'imageURLs', imageURLs)
    },
    addLocationFormTag(state, tag) {
      const tags = state.locationForm.data.tags
      tags.push(tag)
      Vue.set(state.locationForm.data, 'tags', tags)
    },
    removeLocationFormTag(state, tag) {
      const tags = state.locationForm.data.tags
      tags.splice(tags.indexOf(tag), 1)
      Vue.set(state.locationForm.data, 'tags', tags)
    },
    setLocationFormOpeningHours(state, payload) {
      Vue.set(state.locationForm.data.openingHours, payload.day, payload.openingHours)
    },

    // Event
    setEventFormVisibility(state, payload) {
      state.eventFormVisible = payload
    },
    setEventForm(state, payload) {
      state.eventForm = payload
    },
    resetEventForm(state) {
      state.eventForm = DEFAULT_EVENT_FORM
    },
    setEventFormTitle(state, title) {
      state.eventForm.data.title = title
    },
    setEventFormDescription(state, description) {
      state.eventForm.data.description = description
    },
    setEventFormAddress(state, address) {
      state.eventForm.data.address = address
    },
    setEventFormLatitude(state, latitude) {
      Vue.set(state.eventForm.data.coordinates, 0, latitude)
    },
    setEventFormLongitude(state, longitude) {
      Vue.set(state.eventForm.data.coordinates, 1, longitude)
    },
    setEventFormPhone(state, phone) {
      state.eventForm.data.phone = phone
    },
    setEventFormWebsiteURL(state, websiteURL) {
      state.eventForm.data.websiteURL = websiteURL
    },
    setEventFormCoverImageURL(state, coverImageURL) {
      Vue.set(state.eventForm.data, 'coverImageURL', coverImageURL)
    },
    addEventFormImageURL(state, imageURL) {
      const imageURLs = state.eventForm.data.imageURLs
      imageURLs.push(imageURL)
      Vue.set(state.eventForm.data, 'imageURLs', imageURLs)
    },
    removeEventFormImageURL(state, imageURL) {
      const imageURLs = state.eventForm.data.imageURLs
      const i = imageURLs.indexOf(imageURL)

      if (i < 0)  {
        return
      }

      imageURLs.splice(i, 1)
      Vue.set(state.eventForm.data, 'imageURLs', imageURLs)
    },
    addEventFormTag(state, tag) {
      const tags = state.eventForm.data.tags
      tags.push(tag)
      Vue.set(state.eventForm.data, 'tags', tags)
    },
    removeEventFormTag(state, tag) {
      const tags = state.eventForm.data.tags
      tags.splice(tags.indexOf(tag), 1)
      Vue.set(state.eventForm.data, 'tags', tags)
    },

    // Items
    refreshItems(state) {
      API.fetchItems()
        .then((res) => {
          const items = JSON.parse(res.responseText);

          state.locations = items.filter((item) => {
            return item.data.type === 'location'
          })

          state.events = items.filter((item) => {
            return item.data.type === 'event'
          })
        })
        .catch((res) => {
          alert(res.message)
        })
    },
  },
  actions: {
  },
  modules: {
  }
})
