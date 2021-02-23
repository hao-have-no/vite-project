<template>
  <div>
    <!--<demo-zhihu></demo-zhihu>-->
    <!--<demo-tantan></demo-tantan>-->
    <div class="mess">
      123
    </div>
    <div :class="$style.card">
      456
    </div>
    <mes></mes>
  </div>
</template>

<script>
// import DemoZhihu from './views/demo-zhihu.vue';
// import DemoTantan from './views/demo-tantan.vue';
import Mes from '/comps/Message.vue'

export default {
  components: {
    // DemoZhihu,
    // DemoTantan
    Mes
  },
};
</script>

<style scoped>
  .mess{
    color: red;
  }
</style>
<style module>
  .card{
    color: blue;
    font-size: 20px;
  }
</style>
