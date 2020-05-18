<template>
  <el-dialog
    class="dialog-create-event"
    :title="formTitle"
    :visible.sync="$store.state.eventFormVisible"
    width="40%">
    <el-form ref="form" label-width="150px">
      <el-form-item label="Title">
        <el-input class="input-event-title" v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="Description">
        <el-input class="input-event-description" type="textarea" v-model="description"></el-input>
      </el-form-item>
      <el-form-item label="Address">
        <el-input class="input-event-address" v-model="address"></el-input>
      </el-form-item>
      <el-form-item label="Coordinates">
        <el-input-number class="input-event-latitude" v-model="latitude" :controls="false"></el-input-number>
        <el-input-number class="input-event-longitude" v-model="longitude" :controls="false"></el-input-number>
      </el-form-item>
      <el-form-item label="Phone Number">
        <el-input class="input-event-phone" v-model="phone"></el-input>
      </el-form-item>
      <el-form-item label="Website URL">
        <el-input class="input-event-website-url" v-model="websiteURL"></el-input>
      </el-form-item>
      <el-form-item label="Cover Image">
        <EventCoverImageInput />
      </el-form-item>
      <el-form-item label="Images">
        <EventImages />
        <EventImagesInput />
      </el-form-item>
      <el-form-item label="Tags">
          <EventTagsInput />
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
        <el-button class="btn-create-event-cancel" @click="handleClose">Cancel</el-button>
        <el-button class="btn-create-event-submit" type="primary" @click="updateEvent" v-if="$store.state.eventForm.id > 0">Update</el-button>
        <el-button class="btn-create-event-submit" type="primary" @click="createEvent" v-else>Create</el-button>
    </span>
  </el-dialog>
</template>
<script>
import EventCoverImageInput from '@/components/EventCoverImageInput.vue';
import EventImagesInput from '@/components/EventImagesInput.vue';
import EventImages from '@/components/EventImages.vue';
import EventTagsInput from '@/components/EventTagsInput.vue';

import API from '@/API'

// TODO: Input validation for the form

export default {
  name: 'EventFormDialog',
  components: {
    EventCoverImageInput,
    EventImagesInput,
    EventImages,
    EventTagsInput,
  },
  computed: {
    formTitle: {
      get() {
        if (this.$store.state.eventForm.id > 0) {
          return 'Update Event'
        }
        return 'Create Event'
      }
    },
    title: {
      get() {
        return this.$store.state.eventForm.data.title
      },
      set(value) {
        this.$store.commit('setEventFormTitle', value)
      },
    },
    description: {
      get() {
        return this.$store.state.eventForm.data.description
      },
      set(value) {
        this.$store.commit('setEventFormDescription', value)
      },
    },
    address: {
      get() {
        return this.$store.state.eventForm.data.address
      },
      set(value) {
        this.$store.commit('setEventFormAddress', value)
      },
    },
    latitude: {
      get() {
        return this.$store.state.eventForm.data.coordinates[0]
      },
      set(value) {
        this.$store.commit('setEventFormLatitude', value)
      },
    },
    longitude: {
      get() {
        return this.$store.state.eventForm.data.coordinates[1]
      },
      set(value) {
        this.$store.commit('setEventFormLongitude', value)
      },
    },
    phone: {
      get() {
        return this.$store.state.eventForm.data.phone
      },
      set(value) {
        this.$store.commit('setEventFormPhone', value)
      },
    },
    websiteURL: {
      get() {
        return this.$store.state.eventForm.data.websiteURL
      },
      set(value) {
        this.$store.commit('setEventFormWebsiteURL', value)
      },
    },
  },
  methods: {
    handleClose() {
      this.$store.commit('setEventFormVisibility', false)
    },
    createEvent() {
      const form = this.$store.state.eventForm
      form.data.coordinates[0] = parseFloat(form.data.coordinates[0])
      form.data.coordinates[1] = parseFloat(form.data.coordinates[1])

      form.data.coordinates.forEach((v) => {
        if (isNaN(v)) {
          alert('Coordinates are not valid!');
        }
      })

      API.createItem(form.data)
        .then(() => {
          this.$store.commit('refreshEvents')
          this.handleClose()
        })
        .catch((res) => {
          alert(res.message)
        })
    },
    updateEvent() {
      const form = this.$store.state.eventForm
      form.data.coordinates[0] = parseFloat(form.data.coordinates[0])
      form.data.coordinates[1] = parseFloat(form.data.coordinates[1])

      form.data.coordinates.forEach((v) => {
        if (isNaN(v)) {
          alert('Coordinates are not valid!');
        }
      })

      API.updateItem(form.data)
        .then(() => {
          this.$store.commit('refreshEvents')
          this.handleClose()
        })
        .catch((res) => {
          alert(res.message)
        })
    }
  },
}
</script>