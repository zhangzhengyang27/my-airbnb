<template>
  <el-date-picker v-model="value1" type="date" placeholder="Pick a day"></el-date-picker>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router"
import { h, getCurrentInstance } from "vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const router = useRouter()
const route = useRoute()

console.log(route.params)
const { proxy }: any = getCurrentInstance()
proxy.$message({
  message: h("p", null, [h("span", null, "Message can be "), h("i", { style: "color: teal" }, "VNode")]),
})

const value1 = ""
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
