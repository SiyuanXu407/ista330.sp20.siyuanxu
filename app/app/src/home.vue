<template>
  <div id="app">
    <div class="lpl-10 lpr-10 lpt-10 lpb-25 lmax lp-m_l-20 lp-m_r-20" v-for="item in data">
      <available-list :data="item"/>
    </div>
  </div>
</template>

<script>
  import AvailableList from "./components/available_list";

  export default {
    name: 'App',
    components: {
      AvailableList,
    },
    data() {
      return {
        data: [
          {
            "name": "Animals",
            "list": [
              {
                "id": 1,
                "name": "Image credits",
                "img": "https://dictionary.cambridge.org/external/images/quiz/single/elepha_noun_002_12270_600x600a.jpg?version=5.0.81"
              },
              {
                "id": 2,
                "name": "Image credits",
                "img": "https://dictionary.cambridge.org/external/images/quiz/single/hippop_noun_002_17824_600x600a.jpg?version=5.0.81"
              },
              {
                "id": 3,
                "name": "Image credits",
                "img":  "https://dictionary.cambridge.org/external/images/quiz/single/beaver_noun_002_02946_600x600a.jpg?version=5.0.81"
              },
              {
                "id": 4,
                "name": "Image credits",
                "img":  "https://dictionary.cambridge.org/external/images/quiz/single/echidn_noun_002_12021_600x600.jpg?version=5.0.81",
              }
            ]
          },
          {
            "name": "Arts and crafts",
            "list": [
              {
                "name": "Image credits",
                "img": "https://dictionary.cambridge.org/external/images/quiz/single/butter_noun_001_02096_600x600a.jpg?version=5.0.81"
              },
              {
                "name": "Image credits",
                "img": "https://dictionary.cambridge.org/external/images/quiz/single/peacoc_noun_002_26896_600x600.jpg?version=5.0.81"
              },
              {
                "name": "Image credits",
                "img":  "https://dictionary.cambridge.org/external/images/quiz/single/cricke_noun_002_09178_600x600b.jpg?version=5.0.81"
              },
              {
                "name": "Image credits",
                "img":  "https://dictionary.cambridge.org/external/images/quiz/single/axolot_noun_002_02133b.jpg?version=5.0.81",
              }
            ]
          },
          {
            "name": "Animals: not mammals",
            "list": [
              {
                "name": "Image credits",
                "img": "https://dictionary.cambridge.org/external/images/quiz/single/elepha_noun_002_12270_600x600a.jpg?version=5.0.81"
              },
              {
                "name": "Image credits",
                "img": "https://dictionary.cambridge.org/external/images/quiz/single/hippop_noun_002_17824_600x600a.jpg?version=5.0.81"
              },
              {
                "name": "Image credits",
                "img":  "https://dictionary.cambridge.org/external/images/quiz/single/beaver_noun_002_02946_600x600a.jpg?version=5.0.81"
              },
              {
                "name": "Image credits",
                "img":  "https://dictionary.cambridge.org/external/images/quiz/single/echidn_noun_002_12021_600x600.jpg?version=5.0.81",
              }
            ]
          },
        ]
      }
    },
    mounted() {
        axios.get("https://frozen-brook-42408.herokuapp.com/list",).then(res => {
          this.data = res['data'];
        });
    }
  }
</script>

<style scoped>

</style>
