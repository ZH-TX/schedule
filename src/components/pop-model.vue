<template>
    <div>
        <div class="pop-card" >
          <div class="pop-content">
               <div class="pop-left">
                    星期: <input class="input-style" v-model.number="option.day" type="number" min="1" max="7"  placeholder="星期"/>
                    开始时间: <input class="input-style" v-model.number="option.start" type="number" min="1" max="9" placeholder="时间为数字,例:1,代表9:00" />
                    结束时间: <input class="input-style" v-model.number="option.len" type="number" min="1" max="9" placeholder="时间跨度,例:1, 代表为10:00" />
                    项目: <input class="input-style" v-model="option.name" type="text" placeholder="编辑名字" />
                   
                   </div>
                <div class="pop-right">
                   描述: <textarea rows="5" class="input-style" v-model.trim="option.dec" type="text" placeholder="编辑描述" />
                  

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

<script>
    export default {
        props:{
            option:{
                type:Object,
                default(){
                    return{

                    }
                }
            }
        },
        filters:{

        },
        computed:{},
        watch:{
            //需要将option.time进行解析,还原成原数据格式start, len
            //实现一种转译的功能, 有数据,直接展示, 没有的时候输入的数据转成start,len
            // 'option.time':function(){
            //     console.log('hh');
                
            //    if(this.option.time){return;}
            //    else{
            //         let startTime=this.option.time.split('-')[0] //9:30
            //         console.log(startTime);
                    
            //         let endTime=this.option.time.split('-')[1]  //12:00
            //         let rem=(m)=>{return m=='00'?0:m/60}
            //         let reh=(h)=>{return h-9+1}
            //         this.option.start=reh(startTime.split(':')[0])+rem(startTime.split(':')[1])
            //         this.option.len=1+reh(endTime.split(':')[0])+rem(endTime.split(':')[1])-this.option.start
            //         console.log(this.option.start,this.option.len);
                    
            //    }
                
            // }

        },
        methods:{
            // changeDate(){
            //     this.$emit('update:option',xxx)
            // },
            changeActive() {
                this.$emit('change');
            },
            modify() {
                this.$emit('modify',this.option);
            },
            del(){
                this.$emit('del');
            }
        }
    }
</script>

<style lang="scss" scoped>
.pop-card{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgb(0, 0, 0,.7);
    display: flex;
    justify-content: center;
    align-items: center;
}
.pop-content{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 400px;
    background: #fff;
}
.input-style{
    border: none;
    background: inherit;
    width: 100%;
}
.pop-left{
    height:100%;
    width: 30%;
    color: #fff;
    background:#537B8C;
    text-align: left;
    padding: 0 5px;
    input{
        padding: 10px 3px;
    }
}

.pop-right{
    position: relative;
    height: 100%;
    flex: 1;
}
.btn{
    position: absolute;
    left: 40%;
    bottom: 10px;
    input{
        
        padding:5px 10px;
    }
}

</style>