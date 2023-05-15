<template>
  <div class="header-common">
    <img class="logo" src="../assets/images/layout/logo.png" alt="爱此迎" />
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="orders">{{ t("header.orders") }}</el-menu-item>
      <el-menu-item index="records">{{ t("header.records") }}</el-menu-item>
      <el-sub-menu index="language">
        <template #title>{{ t("header.language") }}</template>
        <el-menu-item index="zh">中文</el-menu-item>
        <el-menu-item index="en">English</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="avatar">
        <img class="avatar" src="../assets/images/layout/avatar.jpg" alt="个人中心" />
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import zhCn from "element-plus/lib/locale/lang/zh-cn"
import en from "element-plus/lib/locale/lang/en"
import { saveLanguageApi, fetchLanguageApi } from "@/api/layout.ts"
import { useI18n } from "vue-i18n"

const { t } = useI18n()
const activeIndex = ref("orders")

/* eslint-disable */
const emit = defineEmits<{
  (e: "changeLang", language: any): void
}>()

function handleSelect(e: any) {
  if (e === "zh") {
    emit("changeLang", zhCn)
    saveLanguage("zh")
  } else if (e === "en") {
    emit("changeLang", en)
    saveLanguage("en")
  }
  console.log(e)
}

// Mock接口：保存当前语言包
function saveLanguage(language: any) {
  saveLanguageApi(language).then((res) => {
    const { success } = res
    if (success) {
      console.log("保存当前语言包成功")
    }
  })
}

// Mock接口：保存当前语言包
function getLanguage() {
  fetchLanguageApi().then((res) => {
    console.log("res", res)
    const { success, result } = res
    const { name } = result
    if (success) {
      if (name === "zh") {
        emit("changeLang", zhCn)
      } else if (name === "en") {
        emit("changeLang", en)
      }
      console.log("获取当前语言包成功")
    }
  })
}
getLanguage()
</script>

<style lang="scss">
// @import "@/assets/scss/layout/commonHeader.scss";
.header-common {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  position: relative;
  align-items: center;
  .logo {
    width: 200px;
    height: auto;
    position: absolute;
    top: 17px;
    left: 15px;
    z-index: 10;
  }
  .el-menu {
    width: inherit;
    padding: 0 25px;
    justify-content: right;
    height: 80px;
    align-items: center;
    .el-menu-item {
      height: 80px;
      font-size: 16px;
      &:last-child {
        padding-right: 0;
      }
    }
    .el-sub-menu__title {
      font-size: 16px;
    }
  }
  .avatar {
    box-shadow: rgb(235 235 235) 0px 0px 0px 2px;
    border-radius: 50%;
  }
}
</style>
