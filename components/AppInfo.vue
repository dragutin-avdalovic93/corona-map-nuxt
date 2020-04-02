<template>
    <div class="app-info">
        <div class="inner">
        <h3>Važne napomene</h3>
        <p><b>Stranica je informativnog karaktera i koristi se za prikaz trenutnog stanja o korona virus influenzi u BiH.</b>
        Sve informacije korištene na stranici su preuzete sa zvaničnih web lokacija Federalnog Ministarstva Zdravstva,
        Ministarstva zdravlja i socijalne zaštite Republike Srpske,World Health Organization, news portala kao što Klix.ba,
        ba.n1info.com i ostalih news portala ii zvaničnih sajtova televizijskih operatera u BiH.
        Podaci prikazani na mapama su preuzeti sa stranica coronavirus.app, coronavirus.atlantbh.com,
        te ostalih relevantnih stranica. Ova web lokacija je informativnog karaktera i ne koristi se u druge svrhe, a tačnost
        informacija je zavisna od ostalih stranica sa kojih se informacije preuzimaju. Izvor informacija su Javni Izvori Informacija.</p>
            </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    methods: {
    },
    mounted() {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .app-info {
      color: #eee;
      font-size: 12px;
      text-align: justify;
      margin: 10px 0;
      font-weight: 500;
      background: #2b6071;
    }
    .inner {
        padding: 5px;
    }
    h3 {
        margin: 10px 0 !important;
        font-size: 14px !important;
    }
</style>
