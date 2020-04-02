<template>
  <div>
    <div id="map" class="map"></div>
  </div>
</template>

<script>

  // import axios from 'axios';
  import ba from 'static/ba.json';
  import covid from 'static/covid.json';

  export default {
name: 'CoronaMap',
  props: {
    msg: String
  },
  data: function () {
    return {
      infoSick: [],
      infoCities: [],
      covidSeries: [],
      markersFile: [],
    }
  },
  mounted: function() {
    Object.assign(this.infoSick, covid);
    Object.assign(this.infoCities, ba);
    Object.assign(this.covidSeries, this.infoSick.results[0].series);
    this.infoCities.forEach((city) => {
      var obj = { "key": city.key,"name": city.name, "lat": city.latitude, "lng": city.longitude, "death": 0, "recovered": 0, "total": 0, "currently_sick": 0};
      this.markersFile.push(obj);
    });
    this.covidSeries.forEach((seria) => {
      this.markersFile.forEach((marker) => {
        if(marker.key === seria.tags.city) {
          marker.total += seria.values["0"]["1"];
          marker.currently_sick += seria.values["0"]["1"];
        }
      });
    });

    var map = this.$L.map( 'map', {
      center: [44.203438, 17.907743],
      minZoom: 2,
      zoom: 7
    });
    this.$L.tileLayer( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: ['a','b','c']
    }).addTo( map );
    for ( var i=0; i < this.markersFile.length; ++i )
    {
      var icon = this.$L.divIcon({
        className: 'map-marker',
        iconSize: null,
        html: "<div class='marker-pin'><span>" + this.markersFile[i].total + "</span></div>"
      });
      this.$L.marker( [this.markersFile[i].lat, this.markersFile[i].lng], {icon: icon})
              .bindPopup( '<div class="corona-pop-up">' + '<p class="head"><b>' + this.markersFile[i].name + '</b></p>' + '<p>' + '<span class="total-num">' + this.markersFile[i].total + '</span>' + ' <span class="total">Ukupno zaraženih</span>' + '</p>' + '</div>', {
                maxWidth: 200
              } )
              .addTo( map );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @media (min-width: 0px) and (max-width: 728px) {
    #map {
      height: 400px !important;
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
#map {
  height: 550px;
  max-height: 550px;
  max-width: 100vw;
  margin: auto;
  border: 5px solid #AAA;
  border-radius: 5px;
}
.marker-pin {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid red;
  background: #b30000;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  box-sizing: unset;
}
.marker-pin span {
  justify-content: center;
  align-items: center;
  display: flex;
  color: #FFF;
  font-weight: 900;
  position: absolute;
  width: 10px;
  height: 10px;
  left: 5px;
  top: 5px;
  right: 0;
  z-index: 100;
  font-size: 9px;
}
.corona-pop-up p {
  margin: 0 !important;
  padding: 2px 0 !important;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 12px !important;
}
.corona-pop-up .head {
  margin: 0 !important;
  padding: 2px 0 4px 0 !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px !important;
  font-weight: bolder;
}
  .total-num {
    min-width: 25px !important;
    color: #ff416c;
    font-weight: bold;
  }
  .recovered-num {
    min-width: 25px !important;
    color: rgb(97, 206, 129);
    font-weight: bold;
  }
  .death-num {
    min-width: 25px !important;
    font-weight: bold;
    color: rgb(134, 67, 230);
  }
  .currently-num {
    min-width: 25px !important;
    color: rgb(40, 110, 255);
    font-weight: bold;
  }
</style>
