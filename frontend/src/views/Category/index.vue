<template>
  <Header />
  <div class="category">
    <div class="left">
      <ul class="category-list">
        <li
          v-for="(item, index) in itemData"
          :key="index"
          class="cate-item"
          :class="{ 'cate-item-hover': mapdata[index] }"
          @click="selectElement(index)"
        >
          {{ item }}
        </li>
      </ul>
      <div class="confirm">
        <p>已选择{{ selectedCount }}个</p>
        <div class="button">确认选择</div>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import { ref, computed } from 'vue'

const itemData = ['java', 'python', '程序设计', '前端', '后端', '后端']
const mapdata = ref(new Array(itemData.length).fill(false))
const selectedCount = computed(() => mapdata.value.filter((item) => item === true).length)

function selectElement(index) {
  mapdata.value[index] = !mapdata.value[index]
}
</script>

<style scoped lang="scss">
.category {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;

  .left {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 20px;
    align-items: flex-start; /* 防止子元素拉伸 */

    .category-list {
      display: flex;
      gap: 10px; //创建间距，替代传统的margin
      flex-wrap: wrap; //允许子元素在空间不足时自动换行，形成多行布局。
      border-radius: 20px;
      background-color: #fff;
      padding: 20px;
      width: 16rem;
      max-height: 25rem;
      align-items: center;
      justify-content: center;
      overflow: auto; //仅在内容超出容器时显示滚动条，保持界面整洁
      // mask-image: linear-gradient(to top, transparent 0%, red 30%, red 100%);
      scrollbar-width: none; /* Firefox */ //隐藏滚动条
      &::-webkit-scrollbar {
        display: none; /* Chrome/Safari */
      }
    }
    .confirm {
      display: flex;
      flex-direction: column;
      width: 16rem;
      height: 6rem;
      background-color: #fff;
      border-radius: 20px;
      padding: 20px;
      align-items: center;
      justify-content: center;
      margin-top: 20px;

      .button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(219, 219, 219);
        color: #363636;
        width: 7rem;
        height: 2.1rem;
        border-radius: 20px;
        transition: all 0.3s ease;

        &:hover {
          background-color: #000000;
          color: #fff;
        }
      }
    }

    .cate-item {
      padding: 6px 20px; /* 调整 padding 使椭圆更小 */
      background-color: #c3c3c3a0;
      color: #333;
      border-radius: 20px; /* 椭圆形状 */
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        background-color: #000;
        color: #fff;
      }

      &.cate-item-hover {
        background-color: #000;
        color: #fff;
      }
    }
  }

  .right {
    display: flex;
    flex: 2;
  }
}
</style>
