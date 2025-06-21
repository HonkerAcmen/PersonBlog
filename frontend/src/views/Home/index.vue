<template>
  <!--以上为上层展示：分左右-->
  <Header />
  <div class="content">
    <!--以下为中层-->
    <div class="left">
      <!--中层部分左部-->
      <div class="card">
        <div class="card-info">
          <img
            class="avatar"
            src="@/assets/images/avatar.jpg"
            alt=""
            @click="$router.push('/profile')"
          />
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
          <div class="button">
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

    <RouterView />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Header from '@/components/Header.vue'
// 假数据

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
    box-shadow: 0px 0px 1px #949494;
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
          color: #97169e94;
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
      background-color: #98169e;
      color: #fff;
      cursor: pointer;
      transition: all 0.1s ease;

      &:hover {
        background-color: #97169ea1;
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
      box-shadow: 0px 0px 1px #949494;
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
          transform: scale(1.1) translateX(20px);
          // background: linear-gradient(373deg, transparent 50%, #d77edb82 50%);
          background-color: #f5f5f5a2;
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
  // .right {
  //   flex: 2;
  // }
  // .right-info {
  //   display: flex;
  //   flex-direction: row;
  //   margin: 0.3rem 10rem 0.8rem 1.3rem;
  //   // padding: 10px 10px;
  //   border-radius: 10px;
  //   background-color: #fff;
  //   overflow: hidden;
  //   cursor: pointer;

  //   .right-info-img {
  //     border-radius: 10px;
  //     width: 25rem;
  //     height: 13rem;
  //     margin-right: 10px;
  //     transition: all 0.3s ease;

  //     &:hover {
  //       transform: scale(1.06);
  //       border-radius: 10px;
  //     }
  //   }
  //   .right-info-item {
  //     margin: 10px 20px;
  //     .title {
  //       font-size: 1.4rem;
  //       font-weight: 400;
  //     }
  //     .desc {
  //       font-size: 1.05rem;
  //       font-weight: 200;
  //       color: #3a3a3a;
  //     }
  //     // .right-info-item-info {
  //     //   .label {
  //     //     font-size: 1000;
  //     //     flex-direction: row;
  //     //   }
  //     // }

  //     .right-info-item-label {
  //       display: flex;
  //       flex-direction: row;

  //       .label {
  //         display: flex;
  //         flex-direction: row;
  //         font-size: 13px;
  //         margin-right: 0.5rem;
  //         color: #797878ac;
  //       }
  //       p {
  //         margin: 0;
  //       }
  //     }
  //   }
  // }
}
</style>
