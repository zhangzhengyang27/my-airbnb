// https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/api/room/room/getRoomList?pageNo=1&pageSize=3
import { http } from "../utils/http"
import IndexedDB from "../utils/indexedDB"
const airbnbDB = new IndexedDB("airbnb")

export async function fetchRoomList() {
  return await http.httpRequestGet(
    "https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/api/room/room/getRoomList?pageNo=1&pageSize=3",
    {}
  )
}

// mock 接口
export async function fetchElephant() {
  await airbnbDB.openStore("elephant", "id", ["nose", "ear"])
  const result = await airbnbDB.getList("elephant").then((res: any) => {
    return { code: "000000", message: "操作成功", result: res, success: true }
  })
  return result
}
