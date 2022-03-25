<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
 //组件交互的代码
  //export default school分别暴露
export default {
    name:'School',//开发者工具最终呈现的名字为School
    data(){
        return {
            name:'山海关',
            address:'山海'
        }
    },
    methods:{
        showName(){
            alert(this.name);
        }
    }
};
//统一暴露
  // export { School };
  // export default School //默认暴露
</script>

<style>
    .demo {
        background-color: pink;
    }
</style>