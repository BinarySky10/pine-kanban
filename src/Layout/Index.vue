<template>
  <!-- 顶部信息框 -->
  <div class="header-container">
    <div class="logo">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div class="search">搜索</div>
    <div class="setting">设置</div>
  </div>
  <!-- 主要内容 -->
  <div class="context-container">
    <router-view />
  </div>
</template>

<script lang="ts">
// import { reactive, onMounted, watch, computed } from "vue";
// export default {
//   props: {
//     msg: String,
//   },
//   setup(props, ctx) {
//     //data
//     const state = reactive({ count: 0 });
//     // methods
//     const typeHello = () => {
//       console.log("hello mounted");
//     };
//     // computed
//     const countAddOne = computed(() => {
//       return state.count + 1;
//     });
//     watch(
//       () => state.count,
//       (newValue, oldValue) => {
//         console.log(newValue);
//       }
//     );
//     onMounted(typeHello);
//     return {
//       state,
//       countAddOne
//     };
//   },
//   methods: {
//     handleClick() {
//       this.state.count++;
//     },
//   },
// };
</script>

<style scoped lang="scss">
.header-container {
  position: fixed;
  top:0;
  
  height: 44px;
  width: 100%;
  padding: 0 24px;
  display: flex;
  align-content: center;
  flex-wrap: wrap;

  background: rgba(55, 248, 7, 0.432);

  .logo {
    height: 20px;
    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
}
.context-container {
}
</style>