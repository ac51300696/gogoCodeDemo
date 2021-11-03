import pager from '../util/pager'
import Vue from 'vue'
import { createDecorator } from 'vue-class-component'
import { ref, set } from '@vue/composition-api'
/**
 * decorator of a loadIng
 * @param from key
 * @return PropertyDecorator
 */

export function loading(options: string[] = [], btnKey = 'btnSave') {
    return createDecorator((componentOptions, key) => {
        let pagerLoadingHandle:any  = {}
        const oldCreat = componentOptions.created
        const oldDestoryed = componentOptions.beforeDestroy
        ;(componentOptions.mixins || (componentOptions.mixins = [])).push({
            data(this: Vue) {
                return {
                    [btnKey]: {}
                }
            }
        })
        componentOptions.created = function() {
            const vm = this as (Vue & { btnSave: Record<string, boolean> })
            pagerLoadingHandle = pager.subscribe({
                next: (message:any) => {
                    if (!options.includes(message.data)) {
                        return
                    }
                    console.log(message, 'message')
                    if (message.type === 'SET_URL_LOADING') {
                        vm.$set(vm.btnSave, message.data, true)
                    }
                    if (message.type === 'CANEL_URL_LOADING') {
                        vm.$set(vm.btnSave, message.data, false)
                    }
                }
            })
            oldCreat?.apply(this)
        }
        componentOptions.beforeDestroy = function() {
            pagerLoadingHandle.unsubscribe()
            oldDestoryed?.apply(this)
        }
    })
}
export function loadingV3(options: string[] = [], btnKey = 'btnSave') {
    let pagerLoadingHandle:any  = {}
    const btnSave = ref<Record<string, boolean>>({})
    const created = () =>{
        pagerLoadingHandle = pager.subscribe({
            next: (message:any) => {
                if (!options.includes(message.data)) {
                    return
                }
                console.log(message, 'message')
                debugger
                // 3.0并不需要set
                if (message.type === 'SET_URL_LOADING') {
                    set(btnSave.value, message.data, true)
                    // btnSave.value[message.data] = true
                    // vm.$set(vm.btnSave, message.data, true)
                }
                if (message.type === 'CANEL_URL_LOADING') {
                    set(btnSave.value, message.data, false)
                    // btnSave.value[message.data] = false
                }
            }
        })
    }

    const beforeDestroy = function() {
        pagerLoadingHandle.unsubscribe
    }
    return {
        btnSave,
        created,
        beforeDestroy
    }
}
export const http = (url:string) => {
    return new Promise<string>(res => {
        pager.next({type: 'SET_URL_LOADING', data: url})
        setTimeout(() => {
            console.log('请求完成')
            pager.next({type: 'CANEL_URL_LOADING', data: url})
            res(url)
        }, 3 * 1000);
    })
}
