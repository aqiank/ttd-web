<template>
  <div class="home">
    <el-tabs v-model="activeTab" @tab-click="handleClick">
      <el-tab-pane label="Location" name="location"><Location /></el-tab-pane>
      <el-tab-pane label="Event" name="event"><Event /></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import Location from '@/components/Location.vue'
import Event from '@/components/Event.vue'

export default {
  name: 'Home',
  components: {
    Location,
    Event,
  },
  data() {
    return {
      activeTab: 'location'
    };
  },
  created() {
    this.$store.commit('refreshItems')
  },
  methods: {
    handleClick(/*tab, event*/) {
    }
  }
}
</script>
