<template>
  <div class="sidebar">
    <div class="map-sidebar-numbers">
      <div class="map-sidebar-section">
        <div class="map-sidebar-card active" data-title="infected" data-text="Ukupno zaraženih">{{this.sickNum}}</div>
        <div class="map-sidebar-card" data-title="dead" data-text="Preminulo">{{this.deadNum}}</div>
      </div>
      <div class="map-sidebar-section">
        <div class="map-sidebar-card" data-title="recovered" data-text="Oporavljeno">{{this.recoveredNum}}</div>
        <div class="map-sidebar-card" data-title="sick" data-text="Trenutno zaraženih">{{this.curentlySick}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import sick from 'static/sick.json';
  import dead from 'static/dead.json';
  import recovered from 'static/recovered.json';
  export default {
    data() {
      return {
        sickArr: [],
        deadArr: [],
        recoveredArr: [],
        sick:[],
        dead:[],
        recovered: [],
        sickObj:{},
        deadObj: {},
        recoveredObj: {},
        sickNum: 0,
        deadNum: 0,
        recoveredNum: 0,
        curentlySick: 0
      };
    },
    methods: {
    },
    mounted() {
      Object.assign(this.sickArr, sick);
      Object.assign(this.deadArr, dead);
      Object.assign(this.recoveredArr, recovered);
      Object.assign(this.sick, this.sickArr.results[0].series[0].values);
      Object.assign(this.dead, this.deadArr.results[0].series[0].values);
      Object.assign(this.recovered, this.recoveredArr.results[0].series[0].values);
      Object.assign(this.sickObj, this.sick[this.sick.length-1]);
      Object.assign(this.deadObj, this.dead[this.dead.length-1]);
      Object.assign(this.recoveredObj, this.recovered[this.recovered.length-1]);
      this.sickNum += this.sickObj["1"];
      this.deadNum += this.deadObj["1"];
      this.recoveredNum += this.recoveredObj["1"];
      this.curentlySick = this.sickNum - this.deadNum - this.recoveredNum;
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media (min-width: 0px) and (max-width: 1024px) {
    .sidebar {
      margin: 20px auto auto auto !important;
    }
    .search .el-autocomplete {
    }
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
a {
  color: #42b983;
}
.map-sidebar-numbers {
  z-index: 400;
  min-width: 300px;
  background: #f3f3f3;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
}
.map-sidebar-section {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
}
.map-sidebar-card.active[data-title="infected"]{
  color: #ff416c;
  border-color: #ff416c;
}
.map-sidebar-card[data-title="dead"]{
  color: rgb(134, 67, 230);
  border-color: rgb(134, 67, 230);
}
.map-sidebar-card[data-title="recovered"]{
  color: rgb(97, 206, 129);
  border-color: rgb(97, 206, 129);
}
.map-sidebar-card[data-title="sick"]{
  color: rgb(40, 110, 255);
  border-color: rgb(40, 110, 255);
}
.map-sidebar-card {
  font-size: 30px;
  font-weight: 700;
  flex-direction: column;
  align-items: center;
  display: flex;
  border: 1px solid #efefef;
  width: 100%;
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 5px;
  border-radius: 30px;
  background: #fff;
}
.map-sidebar-card:after {
  content: attr(data-text);
  text-transform: uppercase;
  font-size: 10px;
  white-space: nowrap;
}
.map-sidebar-card:focus {
  outline: none !important;
}
.search .el-autocomplete {
  width: 100%;
  margin-bottom: 10px;
}
</style>
