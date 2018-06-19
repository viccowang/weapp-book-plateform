<template>
    <el-dialog
     width="700px"
    title="创建"
    :visible.sync="isVisible"
    @close="cancel"
    >
        <div class="book-update-page">

        </div>
    </el-dialog>
</template>
<script>
export default {
  name: 'CreateBooks',
  props: {
    isShow: {
      type: Boolean,
      default: false,
      required: true
    },
    isCreate: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      isVisible: false
    }
  },
  watch: {
    isShow (isShow) {
      if (isShow) {

      }
      this.isVisible = isShow
    }
  },
  methods: {
    cancel () {
      this.isVisible = false
      this.$emit('update:isShow', false)
    }
  }
}
</script>
<style lang="scss">

</style>
