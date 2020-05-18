<template>
  <div>
    <el-upload
      list-type="picture-card"
      action="#"
      :auto-upload="false"
      :on-preview="handlePictureCardPreview"
      :on-change="onChange"
      :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.info('Removed image: ', file, fileList)
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      },
      onChange(file) {
        const reader = new FileReader()
        reader.addEventListener('load', (event) => {
          this.$store.commit('addLocationFormImageURL', event.target.result)
        })
        reader.readAsDataURL(file.raw)
      },
    }
  }
</script>