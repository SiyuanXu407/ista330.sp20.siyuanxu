<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


</script>

<style>
  .imgc:hover {
    opacity: 0.9;
  }

  #app {
    margin: 0;
  }

  .wh {
    width: 100%;
    height: 100%;
  }

  body, html, #app {
    overflow: hidden;
    font-family: Arial,Helvetica,"Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  .lpb-25 {
    padding-bottom: 25px;
  }

  .lpr-10 {
    padding-right: 10px;
  }

  .lpl-10 {
    padding-left: 10px;
  }

  .lpt-10 {
    padding-top: 10px;
  }

  .lmb-15 {
    margin-bottom: 15px;
  }

  .tc-bl {
    font-style: italic;
    color: #626a8a;
    text-align: right;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-right: 20px;
    font-family: Arial, Helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    text-decoration: underline;
    font-size: 12px;
  }

  hr {
    margin: 30px 0;
    height: 1px;
    border: 0;
    border-top: 1px solid #e6e6eb;
  }
</style>
