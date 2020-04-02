<template>
  <div>
    <div class="header">
      <h1>COVID-19 UŽIVO<br/>Bosna i Hercegovina</h1>
      <img class="logo bh" :src="require('static/bh.png')" />
    </div>
    <div class="menu">
      <div class="title active" @click="goTo('infection')" ref="infection" id="infection-div">Mapa zaraze</div>
      <div class="title" @click="goTo('chart')" ref="chart"  id="chart-div">Analiza stanja</div>
      <div class="title" @click="goTo('info')" ref="info"  id="info-div">Informacije</div>
      <div class="title" @click="visitBlog()" ref="blog"  id="blog-div">Aktuelno</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuTopCorona',
  props: {
    msg: String
  },
  data: function () {
    return {
      menus: ['infection', 'info', 'chart'],
    }
  },
  methods: {
    goTo(string) {
      this.clearActive();
      console.log('str', string);
      var elmnt = null;
      if(string === 'info') {
        document.getElementById('info-div').classList.add('active');
        elmnt = document.getElementById('info');
        elmnt.scrollIntoView();
      } else if(string === 'chart') {
        document.getElementById('chart-div').classList.add('active');
        elmnt = document.getElementById('chart');
        elmnt.scrollIntoView();
      } else if(string === 'infection') {
        document.getElementById('infection-div').classList.add('active');
        elmnt = document.getElementById('infection');
        elmnt.scrollIntoView();
      }
    },
    clearActive() {
      document.getElementById('infection-div').classList.remove('active');
      document.getElementById('info-div').classList.remove('active');
      document.getElementById('chart-div').classList.remove('active');
    },
    visitBlog() {
      this.$router.push('/blog');
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media (min-width: 0px) and (max-width: 728px) {
    .header {
    }
    .title {
      margin: 10px auto !important;
      font-size: 14px !important;
      min-width: 140px !important;
      padding: 10px 15px !important;
    }
    .safe {
      display: none;
    }
    .logo {
      width: 60px !important;
      height: 60px !important;
    }
    h1 {
      font-size: 22px !important;
    }
  }
  .logo {
    margin-left: 20px;
    margin-right: 20px;
    width: 70px;
    height: 70px;
  }
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .title {
    min-width: 170px;
    font-size: 18px;
    font-weight: 700;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    border: 1px solid #efefef;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 30px;
    margin: 20px auto;
    background-color: #fff;
    color: #2a5c6d;
  }
  .title:hover {
    color: #ff416c !important;
    border: 1px solid #ff416c !important;
  }
  .title:focus {
    outline: none !important;
  }
  .active {
    color: #ff416c;
    border: 1px solid #ff416c;
  }
h1 {
  margin: 10px 0;
  color: white;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
