<template>
  <div class="sidebar">
<!--    <div class="search">-->
<!--    <el-autocomplete-->
<!--            class="inline-input"-->
<!--            v-model="state2"-->
<!--            :fetch-suggestions="querySearch"-->
<!--            placeholder="Unesite grad"-->
<!--            :trigger-on-focus="false"-->
<!--            @select="handleSelect"-->
<!--    ></el-autocomplete>-->
<!--    </div>-->
    <div class="map-sidebar-numbers">
      <div class="map-sidebar-section">
        <div class="map-sidebar-card active" data-title="infected" data-text="Ukupno(Okvirno)">191</div>
<!--        <div class="map-sidebar-card" data-title="dead" data-text="Koristi se">Nepoznato</div>-->
      </div>
      <div class="map-sidebar-section">
<!--        <div class="map-sidebar-card" data-title="recovered" data-text="Ne koristi se">Nepoznato</div>-->
<!--        <div class="map-sidebar-card" data-title="sick" data-text="Nepoznato">191</div>-->
      </div>
    </div>
      <p class="info-white">**Informacije o respiratorima su preuzete sa izvora: https://bnn.ba/vijesti/u-bih-postoji-samo-191-respirator-hrvatska-ih-ima-800-srbija-1000<br/> Oslobađamo se odgovornosti od tačnosti informacija i tajnosti informacija, jer one zavise od izvora podataka.**</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        links: [],
        state1: '',
        state2: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;
        // call callback function to return suggestions
        cb(results);
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
        ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.links = this.loadAll();
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
  .sidebar {
    margin-top: 20px;
  }
  .info-white {
    font-size: 10px;
    color: white;
    text-align: left;
  }
</style>
