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
          <!--:class动态类绑定
知识点：通过对象语法:class="{ active: isActive }"动态切换类名
应用场景：实现元素选中状态、加载状态等视觉反馈
扩展：也可使用数组语法:class="[isActive ? 'active' : '']"
j-->
          {{ item }}
        </li>
      </ul>
      <div class="confirm">
        <p>已选择{{ selectedCount }}个</p>
        <div class="button">确认选择</div>
      </div>
    </div>
    <div class="right">
      <div class="content">
        <img class="content-item-img" alt="" src="/src/assets/images/img1.png" />
        <div class="content-item">
          <li class="content-item-text">python</li>
          <li class="content-label">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207l-5-5-5 5V13.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7.207Z"
                />
              </svg>
              发表于2022-08-30</span
            >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bookmark-star"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z"
                />
                <path
                  d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
                />
              </svg>
              更新于2022-09-15</span
            >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-tags"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"
                />
                <path
                  d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"
                />
              </svg>
              编程学习资料</span
            >
          </li>
          <li class="content-text">
            SICP(Python版)的学习地图，一本上帝的编程书，包含了学习SICP的一张完整的进程和资料表
          </li>
        </div>
      </div>
    </div>
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
  max-height: 100vh;

  .left {
    display: flex;
    flex-direction: column;
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
    // background-color: green;
    .content {
      display: flex;
      flex-direction: row;
      background-color: #fff;
      height: 11rem;
      width: 90%;
      margin: 20px;
      padding: 20px;
      border-radius: 10px;
      transition: all 0.3s ease;
      cursor: pointer;
      &:hover {
        background-color: #f0f0f0;
      }
      .content-item {
        display: flex;
        flex-direction: column;
        width: 100%;
        //background-color: rgb(110, 146, 230);
        border-radius: 10px;
        margin-left: 20px;

        li {
          margin-bottom: 8px;
        }
        .content-label {
          display: flex;
          flex-direction: row;
          font-size: 15px;
          color: #807f7f;
        }
        .content-text {
          font-size: 1rem;
        }

        .content-item-text {
          display: flex;
          flex-direction: row;
          height: 3rem;
          width: 10rem;
          font-size: 30px;
          font-weight: 400px;
          //margin-top: 0px;
        }
      }
      .content-item-img {
        object-fit: contain;
        width: 270px;
        height: 180px;
      }
    }
  }
}
</style>
