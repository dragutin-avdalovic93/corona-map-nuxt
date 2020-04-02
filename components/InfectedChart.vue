<template>
    <line-chart :chartdata="chartdata" :options="options"/>
</template>

<script>
import sick from 'static/sick.json';
import LineChart from "./LineChart";
import moment from 'moment';
  export default {
      name: 'InfectedChart',
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
          sickDates: [],
          sickCases: []
      };
    },
    created() {
        Object.assign(this.sickArr, sick);
        Object.assign(this.sick, this.sickArr.results[0].series[0].values);
        this.sick.forEach((sick) => {
            this.sickDates.push(sick["0"]);
            this.sickCases.push(sick["1"]);
        });
        for(var i = 0; i < this.sickCases.length; i++) {
            if(this.sickCases[i] === null)  {
                this.sickCases[i] = this.sickCases[i-1];
            }
        }
        for(var j = 0; j < this.sickDates.length; j++) {
            this.sickDates[j] =  moment(this.sickDates[j]).format("DD/MM");
        }
        Object.assign(this.chartdata, {
            labels: this.sickDates,
            datasets: [
                {
                    label: 'Ukupno zaraženih',
                    backgroundColor: '#ff416c',
                    data: this.sickCases
                },
            ]
        });
    },
      mounted() {

      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
