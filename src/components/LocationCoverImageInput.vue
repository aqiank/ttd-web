<template>
    <el-upload
      class="cover-image-uploader"
      action="http://localhost:5000/cover"
      :auto-upload="false"
      :show-file-list="false"
      :on-change="onChange">
      <img v-if="imageURL" :src="imageURL" class="cover-image">
      <i v-else class="el-icon-plus cover-image-uploader-icon"></i>
    </el-upload>
</template>

<style>
  .cover-image-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .cover-image-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .cover-image-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .cover-image {
    width: 178px;
    height: 178px;
    display: block;
    object-fit: cover;
  }
</style>

<script>
  export default {
    computed: {
      imageURL: {
        get() {
          const imageURL = this.$store.state.locationForm.data.coverImageURL

          if (imageURL.startsWith('data:')) {
            return imageURL
          }

          return '/files/' + imageURL
        },

        set(value) {
          this.$store.commit('setLocationFormCoverImageURL', value)
        },
      }
    },
    methods: {
      onChange(file) {
        const reader = new FileReader()
        reader.addEventListener('load', (event) => {
          this.$store.commit('setLocationFormCoverImageURL', event.target.result)
        })
        reader.readAsDataURL(file.raw)
      },
    }
  }
</script>