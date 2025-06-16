<template>
  <div class="head">
    <div class="title">羊肉串的个人博客</div>
    <div class="right">
      <!--@click="$router.push(/……)"这样就可以从这个顶部组件到其他分页里去了-->
      <li class="right-item" @click="$router.push('/')">
        <svg
          v-once
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

        <p>首页</p>
      </li>
      <li class="right-item" @click="$router.push('/category')">
        <svg
          v-once
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
        <p>分类</p>
      </li>
      <li class="right-item" @click="$router.push('/label')">
        <svg
          v-once
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
        <p>标签</p>
      </li>
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
.head {
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  align-items: center;
  // border-bottom: #8a8a8a solid 1px;
  box-shadow: 0px 1px 4px #d7d7d7;
  .title {
    margin-left: 20px;
    font-size: 24px;
    font-weight: 300;
    cursor: pointer;
  }
  .right {
    display: flex;
    flex-direction: row;
    margin-right: 20px;

    .right-item {
      display: flex;
      flex-direction: row;
      margin-right: 25px;
      justify-content: center;
      align-items: center;
      padding: 10px 20px;
      cursor: pointer;
      border-radius: 10px;
      transition: all 0.3s ease;
      &:hover {
        background-color: #cdcccc76;
      }
    }
  }
}

.right-item > p {
  margin: 0;
  margin-left: 10px;
}
</style>
