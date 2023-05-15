<template>
  <el-config-provider :locale="locale">
    <common-header @changeLang="changeLang" />

    <button @click="changeLang(zhCn)">中文</button>
    <button @click="changeLang(en)">英文</button>
    <router-view />

    <commonFooter />
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from "element-plus/lib/locale/lang/zh-cn"
import en from "element-plus/lib/locale/lang/en"
import { ref } from "vue"
import { useI18n } from "vue-i18n"
import commonHeader from "./layout/commonHeader.vue"
import commonFooter from "./layout/commonFooter.vue"

const { locale: localeLanguage } = useI18n()

const locale = ref(zhCn)

const changeLang = (language: any) => {
  locale.value = language
  localeLanguage.value = language.name
  console.log("language", language)
}
</script>
