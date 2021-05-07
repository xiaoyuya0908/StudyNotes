# test02

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### json-data启动

#### 安装
```
npm install -g json-server
```
#### 启动
```
进入到json-data目录下 npm run json:server （如端口被占用，运行：json-server --watch db.json --port 3004）
```
### 请求接口参考
#### 用户登录
```
this.$axios.get("/api/users?name=11&pwd=11)
```
#### 用户管理
```
 this.$axios.get("/api/users")
```
#### 删除用户
```
this.$axios.delete("/api/users/" +user.id)
```
#### 商品管理
```
this.$axios.get("/api/goods")
```


