<template>
  <div class="detail">
    <!--右侧内容区-->
    <div class="detail-text" v-html="content"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 整合所有内容
const content = ref(`
  <div class="content-text">
    <h2 >人工智能：引领未来变革的动力</h2>
    <p >随着科技的迅猛发展，人工智能（Artificial Intelligence，简称AI）已悄然融入我们的日常生活。从智能手机到自动驾驶汽车，从语音助手到个性化推荐系统，AI 正以不可阻挡的趋势影响着每一个行业和领域。</p>

    <h2>人工智能的崛起</h2>
    <p>人工智能的发展可以追溯到20世纪50年代。最初，AI 只能够进行简单的计算和逻辑推理，近年来，借助大数据、云计算和深度学习技术的进步，AI 的能力实现了质的飞跃。如今，机器可以通过学习和自我优化来完成复杂任务，如图像识别、自然语言处理以及医疗诊断等。</p>

    <h2>AI 的实际应用</h2>
    <ul>
      <li><strong>医疗健康：</strong> AI 能够通过分析海量医学数据，辅助医生进行诊断，并能够在药物研发、疾病预测等方面做出重要贡献。</li>
      <li><strong>智能制造：</strong> 在智能工厂中，AI 控制着自动化生产线，提高了生产效率与质量。</li>
      <li><strong>智慧交通：</strong> 自动驾驶汽车正在逐步走进我们的生活，AI 系统能够感知路况、规避危险、规划路线。</li>
      <li><strong>金融服务：</strong> 风险评估、智能投顾、反欺诈等金融场景中AI极大提升了服务效率和安全性。</li>
    </ul>

    <h2>面临的挑战</h2>
    <p>尽管AI 带来了诸多便利，但同时也引发了一些争议和挑战。例如，数据隐私保护、算法偏见、自动化带来的就业压力等，都是亟需解决的问题。社会各界正在积极探索能让AI健康、可持续发展的技术路径和政策规范。</p>

    <h2>未来展望</h2>
    <p>展望未来，人工智能必将在教育、能源、环保等更多领域大放异彩，成为推动人类社会进步的关键力量。我们有理由相信，随着AI 技术的不断演进，人类社会将迎来更加便捷、高效和智能的新时代。</p>
    <hr />
    <p style="text-align:right;">—— 以上内容为演示用假数据，仅供测试</p>
  </div>
`)
</script>

<style scoped lang="scss">
/*.detail {
  display: flex;
  flex: 2;
  height: calc(100vh - 3rem);
  .detail-text {
    width: 80%;
    margin-left: 30px;
    border-radius: 30px;
    background-color: #fff;
    padding: 30px;
    font-size: 1rem;
    line-height: 1.7;
    overflow: auto;
    scrollbar-width: none; Firefox 隐藏滚动条
    &:hover {
      background-color: #ece9e9;
    }
    &::-webkit-scrollbar {
      display: none; Chrome/Safari
    }
  }
  .detail-text.active {
    opacity: 1;
    transform: scale(1);
  }
}*/
.detail {
  display: flex;
  flex: 2;
  height: calc(100vh - 3rem);

  .detail-text {
    width: 80%;
    margin-left: 30px;
    border-radius: 30px;
    background-color: #fff;
    padding: 30px;
    font-size: 1rem;
    line-height: 1.7;
    overflow: auto;
    scrollbar-width: none; /* Firefox */
    position: relative; /* 为折角定位 */

    /* 右上角折角效果 */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, transparent 50%, #bb7af4 50%);
      border-radius: 0 30px 0 0;
      transition: all 0.3s ease;
      z-index: 10;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, transparent 50%, #851de0 50%);
      border-radius: 0 30px 0 0;
      transition: all 0.3s ease;
      opacity: 0;
      z-index: 20;
    }

    &:hover {
      /* 悬停时折角效果增强 */
      &::before {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, transparent 50%, #bb7af4 50%);
      }

      &::after {
        opacity: 1;
      }
    }

    &::-webkit-scrollbar {
      display: none; /* Chrome/Safari */
    }
  }

  .detail-text.active {
    opacity: 1;
    transform: scale(1);
  }
}

::v-deep .content-text h2,
::v-deep .content-text li strong {
  color: #333; /* 默认颜色 */
  transition: color 0.3s ease; /* 平滑过渡效果 */

  &:hover {
    color: #851de0; /* 悬停时的颜色，与主题色保持一致 */
  }
}
</style>
