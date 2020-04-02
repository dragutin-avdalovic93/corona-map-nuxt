<template>
  <div class="map-cont">
    <div id="map-r" class="map-r"></div>
    <p class="info-white">**Informacije o respiratorima su preuzete sa izvora: https://bnn.ba/vijesti/u-bih-postoji-samo-191-respirator-hrvatska-ih-ima-800-srbija-1000<br/> Oslobađamo se odgovornosti od tačnosti informacija i tajnosti informacija, jer one zavise od izvora podataka.**</p>
  </div>
</template>

<script>
  import L from 'leaflet';
  export default {
name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      markers : [
        {
          "name": "Sarajevo",
          "total": 63,
          "in_use": 0,
          "not_in_use": 0,
          "unknown": 63,
          "lat": 43.856430,
          "lng": 18.413029
        },
        {
          "name": "Zenica",
          "total": 13,
          "in_use": 0,
          "not_in_use": 0,
          "unknown": 13,
          "lat": 44.20169,
          "lng": 17.90397
        },
        {
          "name": "Mostar",
          "total": 13,
          "in_use": 0,
          "not_in_use": 0,
          "unknown": 13,
          "lat": 43.343033,
          "lng": 17.807894
        },
        {
          "name": "Brčko",
          "total": 3,
          "in_use": 0,
          "not_in_use": 0,
          "unknown": 3,
          "lat": 44.87278,
          "lng": 18.80833
        },
        {
          "name": "Banja Luka",
          "total": 50,
          "in_use": 0,
          "not_in_use": 0,
          "unknown": 50,
          "lat": 44.772182,
          "lng": 17.191000
        }
      ]
    }
  },
  mounted() {
    var map = L.map( 'map-r', {
      center: [44.203438, 17.907743],
      minZoom: 2,
      zoom: 7
    });
    L.tileLayer( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: ['a','b','c']
    }).addTo( map );
    for ( var i=0; i < this.markers.length; ++i )
    {
      var icon = L.divIcon({
        className: 'map-r-marker',
        iconSize: null,
        html: "<div class='marker-pin-res'><span>" + this.markers[i].total + "</span></div>"
      });
      L.marker( [this.markers[i].lat, this.markers[i].lng], {icon: icon})
              .bindPopup( '<div class="corona-pop-up">' + '<p class="head"><b>' + this.markers[i].name + '</b></p>' + '<p>' + '<span class="total-num">' + this.markers[i].total + '</span>' + ' <span class="total">Ukupno(okvirno) respiratora</span>' + '</p>' + '</div>', {
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
    #map-r {
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
a {
  color: #42b983;
}
#map-r {
  height: 550px;
  max-height: 550px;
  max-width: 100vw;
  margin: auto;
  border: 5px solid #AAA;
  border-radius: 5px;
}
.map-cont {
  margin-top: 20px;
}
.marker-pin-res {
  width: 30px;
  height: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid green;
  background: #42b983;
  opacity: 0.7;
  position: absolute;
  left: 50%;
  top: 50%;
  box-sizing: unset;
}
.marker-pin-res span {
  justify-content: center;
  align-items: center;
  display: flex;
  color: #FFF;
  font-weight: 900;
  position: absolute;
  width: 10px;
  height: 10px;
  left: 10px;
  top: 10px;
  right: 0;
  z-index: 100;
  font-size: 12px;
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
  .info-white {
    font-size: 10px;
    color: white;
    text-align: left;
  }
</style>
