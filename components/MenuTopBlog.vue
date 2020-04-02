<template>
  <div class="header-cont">
    <div class="header">
      <h1>COVID-19 UŽIVO<br/>Bosna i Hercegovina</h1>
      <img class="logo bh" :src="require('static/bh.png')" />
    </div>
    <div class="menu">
      <div class="title" @click="goHome()" ref="home"  id="home-div">Idi na početnu</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuTopBlog',
  props: {
    msg: String
  },
  data: function () {
    return {
      menus: ['infection', 'info', 'respirators', 'chart'],
    }
  },
  methods: {
    goHome() {
      this.$router.push('/');
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
      min-width: 100px !important;
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
  .header-cont {
    background: darkslategrey;
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
    align-items: flex-start;
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
