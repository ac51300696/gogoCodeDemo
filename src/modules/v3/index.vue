<template>
    <div class="full bg-main flex-column">
        <el-button type="primary" :loading="btnSave[fetchUrl]" @click="fetchDemo">{{fetchUrl}}</el-button>
    </div>
</template>
<script lang="ts">
import { defineComponent,onBeforeUnmount } from '@vue/composition-api'
import { fetchDemo, fetchUrl } from '@/api/fetch'
import { loadingV3 } from '@/api/loading'
export default defineComponent({
    setup() {
        const {
            btnSave,
            created,
            beforeDestroy
        } = loadingV3([fetchUrl])
        created()
        onBeforeUnmount(() => {
            beforeDestroy
        })
        return {
            fetchUrl,
            fetchDemo,
            btnSave,
            beforeDestroy
        }
    },
})
</script>
