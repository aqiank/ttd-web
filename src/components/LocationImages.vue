<template>
  <div class="location-images">
    <el-row :gutter="16">
      <el-col :span="6" v-for="imageURL in imageURLs" :key="imageURL">
        <div class="btn-close-wrapper" @click="removeImage(imageURL)">
          <el-image :src="imageURL" style="width: 160px; height: 90px" />
          <div class="btn-close">X</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  computed: {
    imageURLs: {
      get() {
        const imageURLs = this.$store.state.locationForm.data.imageURLs.map((imageURL) => '/files/' + imageURL)
        return imageURLs
      }
    }
  },
  methods: {
    removeImage(imageURL) {
      this.$store.commit('removeLocationFormImageURL', imageURL.replace('/files/', ''))
    }
  }
}
</script>

<style scoped lang="scss">
.btn-close-wrapper {
  position: relative;
}

.btn-close {
  position: absolute;
  width: 1rem;
  height: 1rem;
  background: red;
  color: white;
  cursor: pointer;
  top: -.5rem;
  right: -.5rem;
  line-height: 1.1rem;
  text-align: center;
}
</style>