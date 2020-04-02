<template>
    <div class="recovered">
        <line-chart :chartdata="chartdata" :options="options"/>
    </div>
</template>

<script>
    import recovered from 'static/recovered.json';
    import LineChart from "./LineChart";
    import moment from 'moment';

    export default {
      name: 'RecoveredChart',
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
          recoveredArr: [],
          recovered:[],
          recoveredObj:{},
          recoveredDates: [],
          recoveredCases: []
      };
    },
      created() {
          Object.assign(this.recoveredArr, recovered);
          Object.assign(this.recovered, this.recoveredArr.results[0].series[0].values);
          this.recovered.forEach((recovered) => {
              this.recoveredDates.push(recovered["0"]);
              this.recoveredCases.push(recovered["1"]);
          });
          for(var i = 0; i < this.recoveredCases.length; i++) {
              if(this.recoveredCases[i] === null)  {
                  this.recoveredCases[i] = this.recoveredCases[i-1];
              }
          }
          for(var j = 0; j < this.recoveredDates.length; j++) {
              this.recoveredDates[j] =  moment(this.recoveredDates[j]).format("DD/MM");
          }
          Object.assign(this.chartdata, {
              labels: this.recoveredDates,
              datasets: [
                  {
                      label: 'Oporavljeno',
                      backgroundColor: 'rgb(97, 206, 129)',
                      data: this.recoveredCases
                  },
              ]
          });
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
