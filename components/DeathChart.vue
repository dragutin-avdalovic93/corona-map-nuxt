<template>
    <line-chart :chartdata="chartdata" :options="options"/>
</template>

<script>
import dead from 'static/dead.json';
import LineChart from "./LineChart";
import moment from 'moment';

  export default {
      name: 'DeathChart',
      components: { LineChart },
      data() {
      return {
          chartdata: {},
          options: {
              responsive: true,
              maintainAspectRatio: false,
              legend: {
                  display: true,
              }
          },
          deadArr: [],
          dead:[],
          deadDates: [],
          deadCases: []
      };
    },
      created() {
          Object.assign(this.deadArr, dead);
          Object.assign(this.dead, this.deadArr.results[0].series[0].values);
          this.dead.forEach((dead) => {
              this.deadDates.push(dead["0"]);
              this.deadCases.push(dead["1"]);
          });
          for(var i = 0; i < this.deadCases.length; i++) {
              if(this.deadCases[i] === null)  {
                  this.deadCases[i] = this.deadCases[i-1];
              }
          }
          for(var j = 0; j < this.deadDates.length; j++) {
              this.deadDates[j] =  moment(this.deadDates[j]).format("DD/MM");
          }
          Object.assign(this.chartdata, {
              labels: this.deadDates,
              datasets: [
                  {
                      label: 'Preminulo',
                      backgroundColor: 'rgb(134, 67, 230)',
                      data: this.deadCases
                  },
              ]
          });
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
