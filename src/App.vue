<template>
    <div class="full bg-main flex-column">
        <router-link to="v2"><button>v2</button></router-link><router-link to="v3"><button>v3</button></router-link>
        contain：
        <router-view class="flex-grow" style="height: 0" />
    </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
@Component({
    name: 'root',
})
export default class extends Vue {

}
</script>
