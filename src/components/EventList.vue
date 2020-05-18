<template>
  <div class="event-list">
    <el-row :gutter="20">
      <el-col :span="6" v-for="event in $store.state.events" :key="event.id">
        <div class="event-item">
            <el-card :body-style="{ padding: '0px'  }">
              <img class="image" :src="coverImageURL(event)" />
              <div style="padding: 14px;">
                <div style="height: 64px">{{ event.data.title }}</div>
                <div class="bottom clearfix">
                  <el-button style="float: right; margin: .5rem .5rem .5rem 0" type="danger" @click='deleteEvent(event.id)'>Delete</el-button>
                  <el-button style="float: right; margin: .5rem .5rem .5rem 0" @click='editEvent(event)'>Edit</el-button>
                </div>
              </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import API from '@/API'

export default {
  methods: {
    coverImageURL(event) {
      const coverImageURL = event.data.coverImageURL
      if (coverImageURL.startsWith('data:')) {
        return coverImageURL
      }

      return '/files/' + coverImageURL
    },
    deleteEvent(id) {
      API.deleteItem(id)
        .then(() => {
          this.$store.commit('refreshEvents')
        })
        .catch((res) => {
          alert(res.message)
        })
    },
    editEvent(event) {
      this.$store.commit('setEventForm', {
        id: event.id,
        data: event.data,
      })
      this.$store.commit('setEventFormVisibility', true)
    },
  }
}
</script>
<style lang="scss" scoped>
.event-item {
    margin: 1rem 0;
}

.image {
  display: block;
  width: 100%;
  height: 128px;
  object-fit: cover;
}
</style>