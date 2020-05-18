<template>
  <div class="event">
    <EventFormDialog />
    <el-button class="btn-create-event" @click="showEventForm">Create</el-button>
    <el-button class="btn-generate-events" @click="generateEventContent">Generate</el-button>
    <EventList />
  </div>
</template>

<script>
import EventFormDialog from '@/components/EventFormDialog.vue'
import EventList from '@/components/EventList.vue'
import API from '@/API'

export default {
  name: 'Event',
  components: {
    EventFormDialog,
    EventList,
  },
  methods: {
    showEventForm() {
      this.$store.commit('resetEventForm')
      this.$store.commit('setEventFormVisibility', true)
    },
    generateEventContent() {
      API.generate('event')
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
  .event {
    max-width: 960px;
    margin: 0 auto;
  }
</style>
