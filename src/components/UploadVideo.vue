<template>
  <div>
    <el-upload
        class="upload-demo"
        :action="uploadFileUrl"
        drag
        :on-success="uploadFileSuccess">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>
    <el-button @click="clickTest">点击</el-button>
  </div>
</template>

<script>


import userServer from "@/server/userServer";


export default {
  name: "Empty",
  data() {
    return {
      uploadFileUrl: '/api/fast/dfs/upload/appender/file',
    };
  },
  mounted() {
  },

  methods: {
    uploadFileSuccess(response) {
      let data = response.data;
      console.log(data);
    },
    async clickTest() {
      let response = await userServer.getResPublicKey();
      console.log(response.data.data);
    }
  }
}
</script>

<style scoped>

</style>