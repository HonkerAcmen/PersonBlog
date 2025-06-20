<template>
  <Header />
  <div class="content">
    <div class="content-element">
      <img class="content-element-image" src="@/assets/images/avatar.jpg" alt="" />
      <div class="content-element-item">
        <h2 class="content-element-item-name">羊肉串的个人博客</h2>
        <div class="content-element-item-desc colorful-text">恰似一江春水向东流</div>
        <div class="profile-label">
          <li class="profile-label-item">java</li>
          <li class="profile-label-item">python</li>
          <li class="profile-label-item">极客</li>
        </div>
        <div class="btns">
          <div class="btn">b站</div>
          <div class="btn">GitHub</div>
          <div class="btn">抖音</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
</script>
<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 90vh;
  .content-element {
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 60%;
    background-color: #fff;
    border-radius: 30px;

    .content-element-image {
      display: flex;
      width: 60%;
      border-radius: 30px;
      transform: scale(0.9);
      transition: all 0.3s ease;
      &:hover {
        transform: scale(1.1);
      }
    }
    .content-element-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      .content-element-item-name {
        display: flex;
        justify-content: center;
        margin: 0;
        padding-top: 10px;
        font-size: 28px;
      }

      .content-element-item-desc {
        font-size: 14px;
        padding: 9px 5px;
        color: #40b1ea7c;
      }

      .profile-label {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        .profile-label-item {
          display: flex;
          justify-content: center;
          padding: 7px 14px;
          margin-left: 10px;
          margin-bottom: 20px;
          max-height: 24px;
          border-radius: 10px;
          overflow: hidden;
          background-color: #a13ee2;
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
          &:hover {
            background-color: #be84e5;
            transform: scale(1.15);
          }
        }
      }

      .colorful-text {
        background: linear-gradient(
          45deg,
          #ff0000,
          #ff7f00,
          #959503,
          #00ff00,
          #0000ff,
          #4b0082,
          #ee82ee
        );
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
      }
      .btns {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 4px 6px;
          width: 5rem;
          height: 2rem;
          margin-left: 5px;
          margin-bottom: 10px;
          background-color: #a7a8a9;
          color: #fff;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0px 1px 10px #a7a8a9;
          &:hover {
            transform: scale(1.15);
          }
          &:nth-child(1) {
            background-color: #f696e9;
            &:hover {
              background-color: #f6d2f1;
              color: #131313;
            }
          }
          &:nth-child(2) {
            background-color: #505050;
            &:hover {
              background-color: #bcbbbb;
              color: #131313;
            }
          }
          &:nth-child(3) {
            background-color: #e85257;
            &:hover {
              background-color: #ef9fa2;
              color: #131313;
            }
          }
        }
      }
    }
  }
}
</style>
