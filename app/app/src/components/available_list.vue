<template>
  <div>
    <hr/>
    <div class="lmb-15">{{data['name']}}</div>
    <div style="display: inline-block; width: 25%;" v-for="item in data['list']">
      <div ref="imgRef"
           style="    position: relative; top: 20px;display: inline-block; position: relative; margin-top: 10px; margin-right: 20px;  ">
        <img @click="clickEvent(item)" style="width: 100%;  " class="imgc" :src="item['img']"/>
        <div class="wd"></div>
      </div>
      <div class="tc-bl">{{item['name']}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["data"],
    data() {
      return {}
    },
    mounted() {

    },
    methods: {
      clickEvent(item) {
        this.$router.push({
          path: "/select",
          query: {
            id: item['id']
          }
        });
      }
    }
  }
</script>

<style scoped>
  .wd {
    height: 100%;
    width: 100%;
    top: 3px;
    left: 6px;
    z-index: -1;
    position: absolute;
    background: #fec400;
  }


</style>
