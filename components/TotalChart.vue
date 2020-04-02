<template>
    <bar-chart :chartdata="chartdata" :options="options"/>
</template>

<script>
import sick from 'static/sick.json';
import dead from 'static/dead.json';
import recovered from 'static/recovered.json';
import BarChart from "./BarChart";
  export default {
      name: 'TotalChart',
      components: { BarChart },
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
          curentlySick: 0,
          chartdata: {},
          options: {
              responsive: true,
              maintainAspectRatio: false,
              legend: { //hides the legend
                  display: true,
              },
          }

      };
    },
      created() {
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
          Object.assign(this.chartdata, {
              labels: ['Trenutno stanje - Bosna i Hercegovina'],
              datasets: [
                  {
                      label: 'Ukupno zaraženih',
                      backgroundColor: '#ff416c',
                      data: [this.sickNum]
                  },
                  {
                      label: 'Preminulo',
                      backgroundColor: 'rgb(134, 67, 230)',
                      data: [this.deadNum]
                  },
                  {
                      label: 'Oporavljeno',
                      backgroundColor: 'rgb(97, 206, 129)',
                      data: [this.recoveredNum]
                  },
                  {
                      label: 'Trenutno zaraženih',
                      backgroundColor: 'rgb(40, 110, 255)',
                      data: [this.curentlySick]
                  }
              ]
          });
      },
      mounted() {
          document.getElementById('bar-chart').style.background = "#fff";
          document.getElementById('bar-chart').style.borderRadius = "5px";
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
