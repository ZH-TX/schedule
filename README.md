# schedule
# 一个简单的日历记事本的增删改查
- 技术栈: vue+vue-router+vuex
- 主要是对一些基本数据的处理
- 分为首页以及log记录两个页面
- 对于一些函数的使用在conmponents组件中均有一些文字注释
- 但是由于对于时间的数据格式有点问题,可能会导致无法自由调整时间

### 日历表的数据格式说明:wlist
```js
{ day: 1, start: 1.5, len: 2.5, name: "任务A-301", dec: "具体事项1" },
{ day: 1, start: 5, len: 3.5, name: "任务C-401", dec: "具体事项2" },
{ day: 2, start: 1, len: 2, name: "任务A-501", dec: "具体事项3" },
{ day: 2, start: 8, len: 2, name: "任务A-701", dec: "具体事项4" },
```
- day: 代表星期 (1-7)
- start: 代表开始的时间, 1是默认为9:00,开始
- len:  代表跨度时长,例1,表示为10:00
- name: 项目名字
- dec: 具体描述


pop-model 组件中
```js
<template>
    <div>
        <div class="pop-card">
          <div class="pop-content">
               <div class="pop-left">
                    星期: <input class="input-style" v-model="option.day" type="text"  placeholder="星期"/>
                    时间: <input class="input-style" v-model="option.time" type="text" placeholder="编辑时间" />
                    项目: <input class="input-style" v-model="option.name" type="text" placeholder="编辑名字" />
                   
                   </div>
                <div class="pop-right">
                   描述: <input class="input-style" v-model="option.dec" type="text" placeholder="编辑描述" />
                    <div class="btn">
                        <input type="button" @click="changeActive" value="取消">
                        <input type="button" @click="modify" value="保存">
                        <input type="button" @click="del" value="删除此项" />

                    </div>
                    
                </div>
          </div>
                  
        </div>
    </div>
</template>

```
>属性:props: option
>自定义事件: 取消:change, 保存: modify, 删除: del

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

### 问题
1. 由于时间比较匆忙, 对于一些表单数据还未增加范围限制
2. 增加一些交互提示,更加友好
3. 完善一些数据逻辑
