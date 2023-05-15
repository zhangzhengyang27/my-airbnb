<template>
    <el-config-provider :locale="locale">
        <button @click="changeLang(zhCn)">中文</button>
        <button @click="changeLang(en)">英文</button>
        <router-link to="/home">首页</router-link>
        <router-link to="/mine">个人中心</router-link>
        <router-view />
    </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import { ref } from 'vue'

const locale = ref(zhCn)
const changeLang = (language: any) => {
    console.log(language)
    locale.value = language
}
</script>
