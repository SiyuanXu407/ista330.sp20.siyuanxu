<template>
  <div class="bpb" style="width: 100%; height: 100%;">
    <div v-if="!complate" style="padding: 50px 20px;  ">
      <span style="margin-left: 20px; ">Your score: <span
        style="font-weight: 500;">{{score}} / {{data.length}}</span></span>
      <span style="font-weight: 500;float: right; margin-right: 20px; ">
        <span style=" ">{{current}} / {{data.length}}</span>
        <span style="text-decoration: underline;  cursor: pointer;  margin-right: 30px;  " @click="clickev2"
              v-if="current !== 1"><i class="el-icon-arrow-left"> </i>Go Back</span>
        <span style="text-decoration: underline;  cursor: pointer;   " @click="clickev" v-if="current !== data.length">Next<i
          class="el-icon-arrow-right"></i></span>
      </span>

      <div>
        <div style="position: relative; margin-top: 50px;     position: relative;top: 20px;text-align: center;   ">
          <div style="display: inline-block; ">
            <img :src="data[current - 1]['img']"/>
            <div style="    color: #626a8a; font-size: 12px;margin-top: 10px; "> {{data[current - 1]['desc']}}</div>
          </div>
          <div style="position: relative; display: inline-block; top: 0; margin-left: 50px; ">
            <div style="margin-bottom: 25px; font-size: 19px; ">{{data[current - 1]['question']}}</div>
            <div style="margin-top: 20px; text-align: left">
              <div v-if="data[current - 1]['check'] === 10">
                <div v-for="(item, index) in data[current - 1]['answer']">
                  <span @click="clickEvent2(item, data[current - 1]['current'], index)" class="boa">{{item}}</span>
                </div>
              </div>
              <div v-else-if="data[current - 1]['check'] === 11">
                <div v-for="item in data[current - 1]['answer']">
                  <span v-if="item === data[current - 1]['current']" class="boa2"><i
                    style="font-size: 20px;font-weight: 900; color: #3fbf48; margin-right: 10px; "
                    class="el-icon-check"></i>{{item}}</span>
                  <span v-else class="boa2">{{item}}</span>
                </div>
              </div>
              <div v-else>
                <div v-for="(item, index) in data[current - 1]['answer']">
                  <span v-if="item === data[current - 1]['current']" class="boa2"><i
                    style="font-size: 20px;font-weight: 900; color: #3fbf48; margin-right: 10px; "
                    class="el-icon-check"></i>{{item}}</span>
                  <span v-else-if="index === data[current - 1]['check']" class="boa2"><i
                    style="font-size: 20px;font-weight: 900; color: #e84427;  margin-right: 10px; "
                    class="el-icon-close"></i>{{item}}</span>
                  <span v-else class="boa2">{{item}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="padding: 50px 20px; text-align: center; " v-else>
      <div>You scroe: {{score}} / {{data.length}}</div>
      <div @click="back" style="text-decoration: underline; cursor: pointer;  margin-top: 20px; font-size: 20px;">home
        page
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: 0,
        current: 1,
        score: 0,
        complate: false,
        data: [
          {
            "img": "https://dictionary.cambridge.org/images/thumb/hippop_noun_002_17824.jpg?version=5.0.81",
            "question": "Which word matches the image?",
            "answer": [
              "hippopotamus", "kitten", "whale"
            ],
            check: 10,
            "current": "hippopotamus",
            "desc": "rusm/iStock/Getty Images Plus/GettyImages"
          },
          {
            "img": "https://dictionary.cambridge.org/images/thumb/horse_noun_002_18169.jpg?version=5.0.81",
            "question": "Which word matches the image?",
            "answer": [
              "mouse", "horse", "elephant"
            ],
            check: 10,
            "current": "horse",
            "desc": "rusm/iStock/Getty Images Plus/GettyImages"
          },
          {
            "img": "https://dictionary.cambridge.org/images/thumb/rabbit_noun_001_13276.jpg?version=5.0.81",
            "question": "Which word matches the image?",
            check: 10,
            "answer": [
              "rabbit", "rat", "cat"
            ],
            "current": "rabbit",
            "desc": "rusm/iStock/Getty Images Plus/GettyImages"
          },
          {
            "img": "https://dictionary.cambridge.org/images/thumb/sheep_noun_002_33294.jpg?version=5.0.81",
            "question": "Which word matches the image?",
            "answer": [
              "sheep", "cat", "horse"
            ],
            check: 10,
            "current": "sheep",
            "desc": "rusm/iStock/Getty Images Plus/GettyImages"
          },
          {
            "img": "https://dictionary.cambridge.org/images/thumb/lion_noun_002_21358.jpg?version=5.0.81",
            "question": "Which word matches the image?",
            "answer": [
              "elephant", "lion", "mouse"
            ],
            check: 10,
            "current": "lion",
            "desc": "rusm/iStock/Getty Images Plus/GettyImages"
          },
          {
            "img": "https://dictionary.cambridge.org/images/thumb/cat_noun_001_02368.jpg?version=5.0.81",
            "question": "Which word matches the image?",
            "answer": [
              "cat", "rabbit", "horse"
            ],
            check: 10,
            "current": "cat",
            "desc": "rusm/iStock/Getty Images Plus/GettyImages"
          },
        ]
      }
    },
    created() {
      let {id} = this.$route.query;
      this.id = id;
      axios.get("https://frozen-brook-42408.herokuapp.com/quizzes?id=" + id,).then(res => {
        this.data = res['data'];
        for (let i = 0; i < this.data.length; i++) {
          this.data[i]['check'] = 10;
          this.data[i]['answer'] = this.data[i]['answer'].split(",");
        }
        console.log(this.data);
      });
    },
    methods: {
      clickev2() {
        this.check = 10;
        if (this.current > 1) {
          this.current = this.current - 1;
        }
      },
      clickev() {
        this.check = 10;
        if (this.data.length >= this.current + 1) {
          this.current = this.current + 1;
        }
      },
      back() {
        this.$router.push({
          path: "/"
        })
      },
      clickEvent2(item, data, index) {
        if (item === data) {
          this.data[this.current - 1].check = 11;
          this.score += 1;
        } else {
          this.data[this.current - 1].check = index;
        }
        this.$set(this.data, this.current - 1, this.data[this.current - 1]);
        console.log(this.data[this.current - 1], this.data.length)
        if (this.current === this.data.length) {
          setTimeout(() => {
            this.complate = true;
          }, 1000);
        }
      }
    }
  }
</script>

<style scoped>
  .bpb {
    background: #ddfaff;
  }

  img {
    vertical-align: bottom;
    max-width: 100%;
    height: auto;
  }

  .boa {
    background: #fdc702;
    padding: 7px 20px;
    margin: 2px;
    cursor: pointer;
    display: inline-block;
    border-radius: 25px;
    font-weight: 700;
    color: #1d2a57;
    /*display: inline-block;*/
  }

  .boa2 {
    background: #fff;
    padding: 7px 20px;
    margin: 2px;
    cursor: pointer;
    display: inline-block;
    border-radius: 25px;
    font-weight: 700;
    color: #1d2a57;
    /*display: inline-block;*/
  }

  .i-check:before {
    content: "\f00c";
  }

  .i {
    display: inline-block;
    font: normal normal normal 1rem/1 ico-c;
    color: #292929;
    vertical-align: middle;
    text-rendering: auto;
    webkit-font-smoothing: antialiased;
    moz-osx-font-smoothing: grayscale;
  }

  .i:before {
    speak: none;
  }
</style>
