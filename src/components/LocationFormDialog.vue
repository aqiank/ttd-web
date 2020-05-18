<template>
  <el-dialog
    class="dialog-create-location"
    :title="formTitle"
    :visible.sync="$store.state.locationFormVisible"
    width="40%">
    <el-form ref="form" label-width="150px">
      <el-form-item label="Title">
        <el-input class="input-location-title" v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="Description">
        <el-input class="input-location-description" type="textarea" v-model="description"></el-input>
      </el-form-item>
      <el-form-item label="Address">
        <el-input class="input-location-address" v-model="address"></el-input>
      </el-form-item>
      <el-form-item label="Coordinates">
        <el-input-number class="input-location-latitude" v-model="latitude" :controls="false"></el-input-number>
        <el-input-number class="input-location-longitude" v-model="longitude" :controls="false"></el-input-number>
      </el-form-item>
      <el-form-item label="Phone Number">
        <el-input class="input-location-phone" v-model="phone"></el-input>
      </el-form-item>
      <el-form-item label="Website URL">
        <el-input class="input-location-website-url" v-model="websiteURL"></el-input>
      </el-form-item>
      <el-form-item label="Cover Image">
        <LocationCoverImageInput />
      </el-form-item>
      <el-form-item label="Images">
        <LocationImages />
        <LocationImagesInput />
      </el-form-item>
      <el-form-item label="Tags">
          <LocationTagsInput />
      </el-form-item>
      <el-form-item label="Opening Hours">
          <LocationOpeningHoursInput />
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
        <el-button class="btn-create-event-cancel" @click="handleClose">Cancel</el-button>
        <el-button class="btn-create-location-submit" type="primary" @click="updateLocation" v-if="$store.state.locationForm.id > 0">Update</el-button>
        <el-button class="btn-create-location-submit" type="primary" @click="createLocation" v-else>Create</el-button>
    </span>
  </el-dialog>
</template>
<script>
import LocationCoverImageInput from '@/components/LocationCoverImageInput.vue';
import LocationImagesInput from '@/components/LocationImagesInput.vue';
import LocationImages from '@/components/LocationImages.vue';
import LocationTagsInput from '@/components/LocationTagsInput.vue';
import LocationOpeningHoursInput from '@/components/LocationOpeningHoursInput.vue';

import API from '@/API'

// TODO: Input validation for the form

export default {
  name: 'LocationFormDialog',
  components: {
    LocationCoverImageInput,
    LocationImagesInput,
    LocationImages,
    LocationTagsInput,
    LocationOpeningHoursInput,
  },
  computed: {
    formTitle: {
      get() {
        if (this.$store.state.locationForm.id > 0) {
          return 'Update Location'
        }
        return 'Create Location'
      }
    },
    title: {
      get() {
        return this.$store.state.locationForm.data.title
      },
      set(value) {
        this.$store.commit('setLocationFormTitle', value)
      },
    },
    description: {
      get() {
        return this.$store.state.locationForm.data.description
      },
      set(value) {
        this.$store.commit('setLocationFormDescription', value)
      },
    },
    address: {
      get() {
        return this.$store.state.locationForm.data.address
      },
      set(value) {
        this.$store.commit('setLocationFormAddress', value)
      },
    },
    latitude: {
      get() {
        return this.$store.state.locationForm.data.coordinates[0]
      },
      set(value) {
        this.$store.commit('setLocationFormLatitude', value)
      },
    },
    longitude: {
      get() {
        return this.$store.state.locationForm.data.coordinates[1]
      },
      set(value) {
        this.$store.commit('setLocationFormLongitude', value)
      },
    },
    phone: {
      get() {
        return this.$store.state.locationForm.data.phone
      },
      set(value) {
        this.$store.commit('setLocationFormPhone', value)
      },
    },
    websiteURL: {
      get() {
        return this.$store.state.locationForm.data.websiteURL
      },
      set(value) {
        this.$store.commit('setLocationFormWebsiteURL', value)
      },
    },
  },
  methods: {
    handleClose() {
      this.$store.commit('setLocationFormVisibility', false)
    },
    createLocation() {
      const form = this.$store.state.locationForm
      form.data.coordinates[0] = parseFloat(form.data.coordinates[0])
      form.data.coordinates[1] = parseFloat(form.data.coordinates[1])

      form.data.coordinates.forEach((v) => {
        if (isNaN(v)) {
          alert('Coordinates are not valid!');
        }
      })

      API.createItem(form.data)
        .then(() => {
          this.$store.commit('refreshItems')
          this.handleClose()
        })
        .catch((res) => {
          alert(res.message)
        })
    },
    updateLocation() {
      const form = this.$store.state.locationForm
      form.data.coordinates[0] = parseFloat(form.data.coordinates[0])
      form.data.coordinates[1] = parseFloat(form.data.coordinates[1])

      form.data.coordinates.forEach((v) => {
        if (isNaN(v)) {
          alert('Coordinates are not valid!');
        }
      })

      API.updateItem(form.data)
        .then(() => {
          this.$store.commit('refreshItems')
          this.handleClose()
        })
        .catch((res) => {
          alert(res.message)
        })
    }
  },
}
</script>