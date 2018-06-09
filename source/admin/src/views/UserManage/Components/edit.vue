<template>
    <el-dialog
        title="修改用户信息"
        :visible.sync="isShowDialog"
        @close="closeDialog"
    >
        <el-form :inline="true" ref="userForm" :model="userForm" :rules="formRules" label-width="80px">
           <el-row>
               <el-col :span="12">
                    <el-form-item label="openId" prop="openId">
                        <el-input v-model="userForm.openId" disabled />
                    </el-form-item>
               </el-col>
               <el-col :span="12">
                   <el-form-item label="真实姓名" prop="userName">
                        <el-input v-model="userForm.userName" />
                    </el-form-item>
               </el-col>
           </el-row>
           <el-row>
               <el-col :span="12">
                 <el-form-item label="所属区域" prop="companyId">
                    <el-select v-model="userForm.companyId" placeholder="请选择">
                        <el-option
                          v-for="area in companyArea"
                          :key="area.id"
                          :label="area.value"
                          :value="area.id">
                        </el-option>
                    </el-select>
                </el-form-item>
               </el-col>
               <el-col :span="12">
                    <el-form-item label="创建时间" prop="createTime">
                        <el-input v-model="userForm.createTime" disabled />
                    </el-form-item>
               </el-col>
           </el-row>
            <el-row>
                <el-col :span="6" :offset="18">
                    <el-button type="primary" @click="save">保存</el-button>
                    <el-button @click="cancel">取消</el-button>
                </el-col>
            </el-row>
       </el-form>
    </el-dialog>
</template>
<script>
// api
import { getCompanyAreaList } from '@/api/common'
import { editReader } from '@/api/readerManage'

// user raw data
const rawData = {
  userId: '',
  userName: '',
  openId: '',
  createTime: '',
  companyId: ''
}

export default {
  name: 'EditReader',
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    user: {
      type: Object
    }
  },
  data () {
    return {
      isShowDialog: false,
      companyArea: [],
      userForm: rawData,
      formRules: {}
    }
  },
  watch: {
    isShow (show) {
      this.isShowDialog = show
    },
    user (user) {
      if (user) {
        this.userForm = Object.assign({}, this.userForm, user)
      }
    }
  },
  async beforeMount () {
    const companyArea = await getCompanyAreaList()
    this.companyArea = [].concat(companyArea)
  },
  methods: {
    closeDialog () {
      this.$emit('update:isShow', false)
      this.$emit('update:user', Object.create(null))
      this.userForm = Object.assign({}, rawData)
    },
    async save () {
      try {
        await editReader(this.userForm)
        this.$message({
          message: '修改读者信息成功',
          type: 'success'
        })
        this.closeDialog()
      } catch (error) {
        this.$message.error(error)
      }
    },
    cancel () {
      this.closeDialog()
    }
  }
}
</script>
