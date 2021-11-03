import Vue from 'vue'
import { Subject } from 'rxjs'
declare module 'vue/types/vue' {
    interface Vue {
    }
}
// declare module '@vue/composition-api' {
//     interface SetupContext {
//       readonly refs: { [key: string]: Vue | Element | Vue[] | Element[] }
//     }
//   }
