<template>
  首页
  <button @click="() => router.push({ path: '/mine', query: { id: 1 } })">跳转到个人中心</button>
  <el-button>Default</el-button>
  <el-date-picker v-model="value1" type="date" placeholder="Pick a day"></el-date-picker>
  {{ t("message.home") }}
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router"
import { h, getCurrentInstance } from "vue"
import { fetchRoomList, fetchElephant } from "../../api"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const router = useRouter()
const route = useRoute()

console.log(route.params)
const { proxy }: any = getCurrentInstance()
proxy.$message({
  message: h("p", null, [h("span", null, "Message can be "), h("i", { style: "color: teal" }, "VNode")]),
})
const getRoomList = () => {
  fetchRoomList()
}
getRoomList()
const value1 = ""

const fetchElephantData = async () => {
  const res = await fetchElephant()
  console.log(res)
}
fetchElephantData()
</script>

<style lang="scss">
//@import "@/assets/scss/home/index.scss";
button {
  color: $red;
}

.text {
  @include line-text-overflow;
  width: 50px;
}
</style>
