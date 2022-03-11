<template>
  <div class="kanban-header">看板标题 星标 详情</div>
  <div class="kanban-body">
    <div class="card-list-container">
      <div
        v-for="item in [1, 2, 3, 4, 5, 6,7]"
        :key="item"
        class="card-list"
      >
        <div class="card-list-title">
          卡片组标题
        </div>
        <div class="card-container">
          <pine-card 
          v-for="item in [1, 2, 3]"
          :key="item"
          ></pine-card>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="./index.scss" lang="sass" scoped></style>
<script src="./index.ts"></script>
