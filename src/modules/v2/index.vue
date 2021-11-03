<template>
    <div class="full bg-main flex-column">
        <el-button type="primary" :loading="btnSave[fetchUrl]" @click="fetchDemo">{{fetchUrl}}</el-button>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { fetchDemo, fetchUrl } from '@/api/fetch'
import { loading } from '@/api/loading'
@Component
@loading([fetchUrl])
export default class extends Vue {
    fetchDemo = fetchDemo
    fetchUrl = fetchUrl
}
</script>
