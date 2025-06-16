<template>
  <!--以上为上层展示：分左右-->
  <Header />
  <div class="content">
    <!--以下为中层-->
    <div class="left">
      <!--中层部分左部-->
      <div class="card">
        <div class="card-info">
          <img class="avatar" src="@/assets/images/avatar.jpg" alt="" />
          <div class="name">爱吃饭的羊肉串</div>
          <div class="sub-desc">这里是宅女联盟基地</div>
          <div class="detail">
            <div class="num">
              <p>文章</p>
              <span>5</span>
            </div>
            <div class="num">
              <p>标签</p>
              <span>2</span>
            </div>
            <div class="num">
              <p>分类</p>
              <span>9</span>
            </div>
          </div>
          <div class="button" @click="attention">
            <p>关注我</p>
          </div>
        </div>
      </div>
      <div class="new-text">
        <div class="text">
          <div class="title">最新文章</div>
          <div class="text-item">
            <!--89和96两个块结构除了文字内容其他都一样-->
            <img class="text-item-pic" src="@/assets/images/avatar.jpg" alt="" />
            <div class="text-item-content">
              <p class="text-item-desc">计算机程序的构造与解释</p>
              <p class="text-item-time">2023年2月8日</p>
            </div>
          </div>
          <div class="text-item">
            <img class="text-item-pic" src="@/assets/images/avatar.jpg" alt="" />
            <div class="text-item-content">
              <p class="text-item-desc">个人博客搭建教程</p>
              <p class="text-item-time">2023年2月8日</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <!--中层部分右部-->
      <li v-for="data in mokeData" :key="data.title" class="right-info">
        <img class="right-info-img" :src="data.img" alt="" />
        <div class="right-info-item">
          <!--就算是循环也要包住p,h2标签-->
          <h2 class="title">{{ data.title }}</h2>
          <!--循环获取title-->
          <div class="right-info-item-label">
            <li class="label">
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
              <p>发表于 {{ data.create_at }}</p>
            </li>
            <li class="label">
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
              <p>更新于 {{ data.update_at }}</p>
            </li>
            <li class="label">
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
              <p>{{ data.category }}</p>
            </li>
          </div>
          <p class="desc">
            <!--循环获取desc-->
            {{ data.desc }}
          </p>
        </div>
      </li>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Header from '@/components/Header.vue'
// 假数据
const mokeData = [
  {
    img: './src/assets/images/img1.png',
    title: '计算机程序的构造与解释',
    desc: 'SICP(Python版)的学习地图，一本上帝的编程书，包含了学习SICP的一张完整的进程和资料表',
    create_at: '2022-08-30',
    update_at: '2022-09-15',
    category: '编程学习资料',
  },
  {
    img: './src/assets/images/img1.png',
    title: '计算机的组成原理',
    desc: 'SICP(Python版)的学习地图，一本上帝的编程书，包含了学习SICP的一张完整的进程和资料表',
    create_at: '2022-08-30',
    update_at: '2022-09-15',
    category: '编程学习资料',
  },
  {
    img: './src/assets/images/img1.png',
    title: '编译原理',
    desc: 'SICP(Python版)的学习地图，一本上帝的编程书，包含了学习SICP的一张完整的进程和资料表',
    create_at: '2022-08-30',
    update_at: '2022-09-15',
    category: '编程学习资料',
  },
]

//方法
function attention() {
  console.log('关注成功') //关注成功后能否让页面向上移
}
</script>
<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  // align-items: center;
  height: 100vh;
  .left {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .right {
    flex: 2;
    // background-color: red;
  }
  .card {
    display: flex;
    // background-color: green;
    justify-content: end;
  }
  .card-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // margin-left: 14rem;
    width: 60%;
    height: 25rem;
    background-color: #fff;
    border-radius: 30px;
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 1rem;
      transition: all 0.3s ease; //线性的缓入缓出
      cursor: pointer;
      &:hover {
        transform: scale(1.2) rotate(360deg);
      }
    }

    .name {
      font-size: 23px;
      font-weight: 300;
      margin-bottom: 0.5rem;
    }

    .sub-desc {
      //描述
      font-size: 14px;
      font-weight: 100;
      margin-bottom: 0.5rem;
    }

    .detail {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .num {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        cursor: pointer;
        &:hover {
          color: #0e42b3;
        }
        p {
          margin: 0;
          padding: 3px 6px;
        }
      }
    }
    .button {
      width: 180px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      margin-top: 10px;
      background-color: #3261c6;
      color: #fff;
      cursor: pointer;
      transition: all 0.1s ease;

      &:hover {
        background-color: #184096a8;
      }
    }
  }
  .new-text {
    display: flex;
    // background-color: rgb(246, 248, 246);
    justify-content: end;
    margin-top: 20px;

    .text {
      display: flex;
      flex-direction: column;
      width: 60%;
      height: 17rem;
      background-color: #fff;
      border-radius: 30px;
      .title {
        margin: 20px 30px;
        font-size: 1.2rem;
        font-weight: 500;
      }

      .text-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
          transform: scale(1.1) translateX(30px);
          background-color: #b6b3b36a;
          border-radius: 10px;
        }
        margin-bottom: 10px;
        .text-item-pic {
          margin-left: 2rem;
          width: 4rem;
          height: 4rem;
          border-radius: 10px;
        }

        .text-item-content {
          margin-left: 0.5rem;
          .text-item-time {
            font-size: 13px;
            color: #7c7a7a;
          }
        }
      }
    }
  }

  .right-info {
    display: flex;
    flex-direction: row;
    margin: 0.3rem 10rem 0.8rem 1.3rem;
    // padding: 10px 10px;
    border-radius: 10px;
    background-color: #fff;
    overflow: hidden;
    cursor: pointer;

    .right-info-img {
      border-radius: 10px;
      width: 25rem;
      height: 13rem;
      margin-right: 10px;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.06);
        border-radius: 10px;
      }
    }
    .right-info-item {
      margin: 10px 20px;
      .title {
        font-size: 1.4rem;
        font-weight: 400;
      }
      .desc {
        font-size: 1.05rem;
        font-weight: 200;
        color: #3a3a3a;
      }
      // .right-info-item-info {
      //   .label {
      //     font-size: 1000;
      //     flex-direction: row;
      //   }
      // }

      .right-info-item-label {
        display: flex;
        flex-direction: row;

        .label {
          display: flex;
          flex-direction: row;
          font-size: 13px;
          margin-right: 0.5rem;
          color: #797878ac;
        }
        p {
          margin: 0;
        }
      }
    }
  }
}
</style>
