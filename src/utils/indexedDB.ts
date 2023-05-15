/* eslint-disable @typescript-eslint/quotes */
export default class DB {
  private readonly dbName: string
  private db: any

  constructor(dbName: string) {
    this.dbName = dbName
  }

  // 打开数据库
  public async openStore(storeName: string, keyPath: string, indexs?: string[]) {
    const request = window.indexedDB.open(storeName, 2)
    return await new Promise((resolve, reject) => {
      request.onsuccess = (event: any) => {
        console.log("数据库打开成功")
        this.db = event.target.result
        console.log(event)
        resolve(true)
      }

      request.onerror = (event: any) => {
        console.log("数据库打开失败")
        console.log(event)
        reject(event)
      }

      request.onupgradeneeded = (event) => {
        console.log("数据库升级成功")
        const { result }: any = event.target
        const store = result.createObjectStore(storeName, {
          autoIncrement: true,
          keyPath,
        })
        if (indexs != null && indexs.length > 0) {
          // eslint-disable-next-line array-callback-return
          indexs.map((v: string) => {
            store.createIndex(v, v, { unique: false })
          })
        }
        store.transaction.oncomplete = (event: any) => {
          console.log(event)
          console.log("创建对象仓库成功")
        }
      }
    })
  }

  // 新增/修改数据库数据
  async updateItem(storeName: string, data: any) {
    console.log(this.db)
    const store = this.db.getStore([storeName], "readwrite").objectStore(storeName)
    const request = store.put({
      ...data,
      updateTime: new Date().getTime(),
    })
    return await new Promise((resolve, reject) => {
      request.onsuccess = (event: any) => {
        console.log("数据更新成功")
        console.log(event)
        resolve(true)
      }
      request.onerror = (event: any) => {
        console.log("数据写入失败")
        console.log(event)
        reject(event)
      }
    })
  }

  // 删除数据库数据
  async deleteItem(storeName: string, key: number | string) {
    const store = this.db.transaction([storeName], "readwrite").objectStore(storeName)
    const request = store.delete(key)
    return await new Promise((resolve, reject) => {
      request.onsuccess = (event: any) => {
        console.log("数据删除成功")
        console.log(event)
        resolve(event)
      }
      request.onerror = (event: any) => {
        console.log("数据删除失败")
        console.log(event)
        reject(event)
      }
    })
  }

  // 查询所有数据
  async getList(storeName: string) {
    const store = this.db.transaction([storeName], "readwrite").objectStore(storeName)
    const request = store.getAll()
    return await new Promise((resolve, reject) => {
      request.onsuccess = (event: any) => {
        console.log("数据查询成功")
        console.log(event)
        resolve(event.target.result)
      }
      request.onerror = (event: any) => {
        console.log("数据查询失败")
        console.log(event)
        reject(event)
      }
    })
  }

  // 查询单条数据
  async getItem(storeName: string, key: number | string) {
    const store = this.db.transaction([storeName], "readwrite").objectStore(storeName)
    const request = store.get(key)
    return await new Promise((resolve, reject) => {
      request.onsuccess = (event: any) => {
        console.log("数据查询成功")
        console.log(event)
        resolve(event.target.result)
      }
      request.onerror = (event: any) => {
        console.log("数据查询失败")
        console.log(event)
        reject(event)
      }
    })
  }
}
