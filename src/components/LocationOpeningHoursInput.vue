<template>
  <div>
    <label for="opening-hours-input">Monday
      <el-input class="input-location-opening-hours-monday" placeholder="Monday" v-model="monday" />
    </label>
    <label for="opening-hours-input">Tuesday
      <el-input class="input-location-opening-hours-tuesday" placeholder="Tuesday" v-model="tuesday" />
    </label>
    <label for="opening-hours-input">Wednesday
      <el-input class="input-location-opening-hours-wednesday" placeholder="Wednesday" v-model="wednesday" />
    </label>
    <label for="opening-hours-input">Thursday
      <el-input class="input-location-opening-hours-thursday" placeholder="Thursday" v-model="thursday" />
    </label>
    <label for="opening-hours-input">Friday
      <el-input class="input-location-opening-hours-friday" placeholder="Friday" v-model="friday" />
    </label>
    <label for="opening-hours-input">Saturday
      <el-input class="input-location-opening-hours-saturday" placeholder="Saturday" v-model="saturday" />
    </label>
    <label for="opening-hours-input">Sunday
      <el-input class="input-location-opening-hours-sunday" placeholder="Sunday" v-model="sunday" />
    </label>
  </div>
</template>

<script>
  export default {
    computed: {
      monday: {
        get() {
          return this.$store.state.locationForm.data.openingHours['monday']
        },
        set(value) {
          this.$store.commit('setLocationFormOpeningHours', {day: 'monday', openingHours: value})
        },
      },
      tuesday: {
        get() {
          return this.$store.state.locationForm.data.openingHours['tuesday']
        },
        set(value) {
          this.$store.commit('setLocationFormOpeningHours', {day: 'tuesday', openingHours: value})
        },
      },
      wednesday: {
        get() {
          return this.$store.state.locationForm.data.openingHours['wednesday']
        },
        set(value) {
          this.$store.commit('setLocationFormOpeningHours', {day: 'wednesday', openingHours: value})
        },
      },
      thursday: {
        get() {
          return this.$store.state.locationForm.data.openingHours['thursday']
        },
        set(value) {
          this.$store.commit('setLocationFormOpeningHours', {day: 'thursday', openingHours: value})
        },
      },
      friday: {
        get() {
          return this.$store.state.locationForm.data.openingHours['friday']
        },
        set(value) {
          this.$store.commit('setLocationFormOpeningHours', {day: 'friday', openingHours: value})
        },
      },
      saturday: {
        get() {
          return this.$store.state.locationForm.data.openingHours['saturday']
        },
        set(value) {
          this.$store.commit('setLocationFormOpeningHours', {day: 'saturday', openingHours: value})
        },
      },
      sunday: {
        get() {
          return this.$store.state.locationForm.data.openingHours['sunday']
        },
        set(value) {
          this.$store.commit('setLocationFormOpeningHours', {day: 'sunday', openingHours: value})
        },
      },
    }
  }
</script>
