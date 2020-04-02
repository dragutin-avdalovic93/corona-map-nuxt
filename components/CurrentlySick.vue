<template>
    <line-chart :chartdata="chartdata" :options="options"/>
</template>

<script>
    import sick from 'static/sick.json';
    import dead from 'static/dead.json';
    import recovered from 'static/recovered.json';
    import moment from 'moment';
    import LineChart from "./LineChart";
  export default {
      name: 'CurrentlySickChart',
      components: { LineChart },
      data() {
      return {
          chartdata: {},
          options: {
              responsive: true,
              maintainAspectRatio: false,
              legend: {
                  display: true,
              },
          },
          sickArr: [],
          sick:[],
          deadArr: [],
          dead:[],
          recoveredArr: [],
          recovered:[],
          sickDates:[],
          sickCases:[],
          deadDates:[],
          deadCases:[],
          recoveredDates:[],
          recoveredCases:[],
          currSickDates:[],
          currSickCases:[]
      };
    },
      created() {
          Object.assign(this.sickArr, sick);
          Object.assign(this.sick, this.sickArr.results[0].series[0].values);
          Object.assign(this.deadArr, dead);
          Object.assign(this.dead, this.deadArr.results[0].series[0].values);
          Object.assign(this.recoveredArr, recovered);
          Object.assign(this.recovered, this.recoveredArr.results[0].series[0].values);
          this.sick.forEach((sick) => {
              this.sickDates.push(sick["0"]);
              this.sickCases.push(sick["1"]);
          });
          for(var t = 0; t < this.sickCases.length; t++) {
              if(this.sickCases[t] === null)  {
                  this.sickCases[t] = this.sickCases[t-1];
              }
          }
          for(var i = 0; i < this.sickDates.length; i++) {
              this.sickDates[i] =  moment(this.sickDates[i]).format("DD/MM");
          }
          this.recovered.forEach((recovered) => {
              this.recoveredDates.push(recovered["0"]);
              this.recoveredCases.push(recovered["1"]);
          });
          for(var j = 0; j < this.recoveredCases.length; j++) {
              if(this.recoveredCases[j] === null)  {
                  this.recoveredCases[j] = this.recoveredCases[j-1];
              }
          }
          this.dead.forEach((dead) => {
              this.deadDates.push(dead["0"]);
              this.deadCases.push(dead["1"]);
          });
          for(var k = 0; k < this.deadCases.length; k++) {
              if(this.deadCases[k] === null)  {
                  this.deadCases[k] = this.deadCases[k-1];
              }
          }
          for(var m = 0; m < this.deadCases.length; m++) {
              this.currSickCases[m] = this.sickCases[m] - this.recoveredCases[m] - this.deadCases[m];
          }
          Object.assign(this.chartdata, {
              labels: this.sickDates,
              datasets: [
                  {
                      label: 'Trenutno zaraženih',
                      backgroundColor: 'rgb(40, 110, 255)',
                      data: this.currSickCases
                  },
              ]
          });

      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
