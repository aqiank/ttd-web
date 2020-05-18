<template>
  <div class="location-list">
    <el-row :gutter="20">
      <el-col :span="6" v-for="location in $store.state.locations" :key="location.id">
        <div class="location-item">
            <el-card :body-style="{ padding: '0px'  }">
              <img class="image" :src="coverImageURL(location)" />
              <div style="padding: 14px;">
                <div style="height: 64px">{{ location.data.title }}</div>
                <div class="bottom clearfix">
                  <el-button style="float: right; margin: .5rem .5rem .5rem 0" type="danger" @click='deleteLocation(location.id)'>Delete</el-button>
                  <el-button style="float: right; margin: .5rem .5rem .5rem 0" @click='editLocation(location)'>Edit</el-button>
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
    coverImageURL(location) {
      const coverImageURL = location.data.coverImageURL
      if (coverImageURL.startsWith('data:')) {
        return coverImageURL
      }

      return '/files/' + coverImageURL
    },
    deleteLocation(id) {
      API.deleteItem(id)
        .then(() => {
          this.$store.commit('refreshItems')
        })
        .catch((res) => {
          alert(res.message)
        })
    },
    editLocation(location) {
      this.$store.commit('setLocationForm', {
        id: location.id,
        data: location.data,
      })
      this.$store.commit('setLocationFormVisibility', true)
    },
  }
}
</script>
<style lang="scss" scoped>
.location-item {
    margin: 1rem 0;
}

.image {
  display: block;
  width: 100%;
  height: 128px;
  object-fit: cover;
}
</style>