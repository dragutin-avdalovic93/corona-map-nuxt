<template>
  <div class="chart">
    <TotalChart/>
    <br/>
    <InfectedChart/>
    <br/>
    <DeathChart/>
    <br/>
    <RecoveredChart/>
    <br/>
    <CurrentlySickChart/>
    <br/>
  </div>
</template>

<script>
import TotalChart from "./TotalChart";
import InfectedChart from "./InfectedChart";
import DeathChart from "./DeathChart";
import RecoveredChart from "./RecoveredChart";
import CurrentlySickChart from "./CurrentlySick";
export default {
  name: 'HelloWorld',
  components: {CurrentlySickChart, RecoveredChart, DeathChart, InfectedChart, TotalChart},
  props: {
    msg: String
  },
  mounted() {
    var elements = document.getElementsByClassName("chartjs-render-monitor");
    for(var i=0; i<elements.length; i++) {
      var element = elements[i];
      element.style.background = "#fff";
      element.style.borderRadius = "5px";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  .chart {
    width: 100%;
    margin: auto;
    padding-top: 40px;
    padding-bottom: 5vh;
  }
</style>
