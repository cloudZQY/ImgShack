<template>
	<div class="history">
    <button @click="clearHistory">清除历史记录(开发用)</button>
		<file-view v-for="file in fileList" :file="file" :index="file.url"></file-view>
	</div>

</template>
<script>
  import {formatFile} from '../util/formatFile';

  import store from '../util/store';
  import FileView from './FileItem.vue';
  export default {
    data() {
      return {
        fileList: [],
      };
    },
    components: {
      FileView,
    },
    mounted() {
      this.getHistory();
    },
    methods: {
      getHistory() {
        this.$data.fileList = formatFile(store.get('fileList'));
        console.log(store.get('fileList'));
      },
      clearHistory() {
        store.clearAllFile();
      }
    }
  }
</script>

<style lang='less'>

</style>