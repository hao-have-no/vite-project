<template>
  <div style="position: relative; height: 100%; width: 100%; padding-left: 0px">
    <div
      style="
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      "
      :style="{ width: cardWidth + 'px', height: cardHeight + 'px' }"
    >
      <div
        class="card"
        style="z-index: 13"
        :style="{
          width: cardWidth + 'px',
          height: cardHeight + 'px',
          left: left + 'px',
          top: top + 'px',
          'border-radius': borderRadius + 'px',
          backgroundColor: cardBgColor,
        }"
        :class="{
          animation: isAnimating,
          shadowEffect: hasShadow,
          borderEffect: hasBorder,
        }"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchcancel="touchCancel"
        @touchend="touchCancel"
      >
        <slot name="firstCard"></slot>
      </div>
      <div
        class="card"
        style="z-index: 12"
        :style="{
          width: width2 + 'px',
          height: height2 + 'px',
          left: left2 + 'px',
          top: top2 + 'px',
          'border-radius': borderRadius + 'px',
          backgroundColor: cardBgColor,
        }"
        :class="{
          animation: isAnimating,
          shadowEffect: hasShadow,
          boderEffect: hasBorder,
        }"
      >
        <slot name="secondCard"></slot>
      </div>
      <div
        class="card"
        style="z-index: 11"
        :style="{
          width: width3 + 'px',
          height: height3 + 'px',
          left: left3 + 'px',
          top: top3 + 'px',
          'border-radius': borderRadius + 'px',
          backgroundColor: cardBgColor,
        }"
        :class="{
          animation: isAnimating,
          shadowEffect: hasShadow,
          boderEffect: hasBorder,
        }"
      >
        <slot name="thirdCard"></slot>
      </div>
      <div
        class="card"
        style="z-index: 10"
        :style="{
          width: width4 + 'px',
          height: height4 + 'px',
          left: left4 + 'px',
          top: top4 + 'px',
          'border-radius': borderRadius + 'px',
          backgroundColor: cardBgColor,
          opacity: opacity4,
        }"
        :class="{
          animation: isAnimating,
          shadowEffect: hasShadow,
          boderEffect: hasBorder,
        }"
      ></div>
    </div>
  </div>
</template>

<script>
import useTouch from "../use/touch";

export default {
  props: {
    // 正常卡片宽度
    cardWidth: {
      type: Number,
      default: 260,
    },
    // 正常卡片高度
    cardHeight: {
      type: Number,
      default: 300,
    },
    // 卡片层叠的横向边距
    leftPad: {
      type: Number,
      default: 10,
    },
    // 卡片层叠的纵向边距
    topPad: {
      type: Number,
      default: 6,
    },
    // 卡片背景色
    cardBgColor: {
      type: String,
      default: "#fff",
    },
    // 卡片拖拽方向
    dragDirection: {
      type: String,
      default: "all", //all,vertical,horizontal
    },
    // 卡片的圆角弧度
    borderRadius: {
      type: Number,
      default: 10,
    },
    // 卡片触发飞卡效果的距离
    throwTriggerDistance: {
      type: Number,
      default: 100,
    },
    // 飞卡的移动距离
    throwDistance: {
      type: Number,
      default: 1000,
    },
    // 是否开启卡片描边效果
    hasBorder: {
      type: Boolean,
      default: false,
    },
    // 是否开启阴影效果
    hasShadow: {
      type: Boolean,
      default: true,
    },
  },
  emits: [
    "onDragStart",
    "onDragMove",
    "onDragStop",
    "onThrowFail",
    "onThrowStart",
    "onThrowDone",
  ],
  //compositionApi实际应用，将对应的方法全部抽象出来，通过setup引用进来
  setup(props, { emit }) {
    console.log('init card set up',props);
    const touchState = useTouch(props, {
      onDragStart: () => emit("onDragStart"),
      onDragMove: (obj) => emit("onDragMove", obj),
      onDragStop: (obj) => emit("onDragStop", obj),
      onThrowFail: () => emit("onThrowFail"),
      onThrowStart: () => emit("onThrowStart"),
      onThrowDone: () => emit("onThrowDone"),
    });
    console.log('all',touchState);
    return { ...touchState };
  },
};
</script>

<style>
.card {
  position: absolute;
  overflow: hidden;
}
.card.boderEffect {
  border: 1px solid #ccc;
}
.card.shadowEffect {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
}
.card.animation {
  transition: opacity 0.4s ease-out, left 0.4s ease-out, top 0.4s ease-out,
    width 0.4s ease-out, height 0.4s ease-out;
}
</style>
