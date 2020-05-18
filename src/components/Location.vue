<template>
  <div class="location">
    <LocationFormDialog />
    <el-button class="btn-create-location" @click="showLocationForm">Create</el-button>
    <el-button class="btn-generate-locations" @click="generateLocationContent">Generate</el-button>
    <LocationList />
  </div>
</template>

<script>
import LocationFormDialog from '@/components/LocationFormDialog.vue'
import LocationList from '@/components/LocationList.vue'
import API from '@/API'

export default {
  name: 'Location',
  components: {
    LocationFormDialog,
    LocationList,
  },
  methods: {
    showLocationForm() {
      this.$store.commit('resetLocationForm')
      this.$store.commit('setLocationFormVisibility', true)
    },
    generateLocationContent() {
      API.generate('location')
        .then((res) => {
          this.$message(res.message)
        })
        .catch((res) => {
          this.$message.error(res.message)
        })
    },
  }
}
</script>

<style scoped lang="scss">
  .location {
    max-width: 960px;
    margin: 0 auto;
  }
</style>
