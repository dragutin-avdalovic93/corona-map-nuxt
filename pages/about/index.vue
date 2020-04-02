<template>
  <div class="about">
    <h2>About us</h2>
    <div><p><b>English</b></p><p>We're the guys behind koronavirusbih.com — brothers Aleksandar and Dragutin Avdalovic, mathematician with excellent data science knowledge and experienced web developer. Back in March, when the corona virus was raging in Europe countries, especially in Italy and Spain, we felt really worried. So we decided we'd try and do something to help. We were many days in home isolation so we decided to build the app that would help people in our country to track current state of covid-19 influence.</p><div><br></div><div>We figured out that only the news portals are reporting the corona outbreak in our country, but there is no way to track spread in real time, so we built a responsive web app to track the spread in real time on map, and get some general informations about corona in the app.We launched it, and we hope the journalists will track our story, and the whole country will start using this app.</div><div><br></div><div><br></div><div><u><b>Thank you for support, stay in, stay safe.</b></u></div><div><b><br></b></div><div><h2>O nama</h2><b>Bosanski/Srpski/Hrvatski</b></div><div><br></div><div><div>Mi smo momci koji stoje iza koronavirusbih.com - braća Aleksandar i Dragutin Avdalović, matematičar sa izvrsnim poznavanjem obrade podataka i iskusni web programer. Još u martu, kada je koronavirus bjesnio u evropskim zemljama, posebno u Italiji i Španiji, osjećali smo se zaista zabrinuto. Pa smo odlučili da pokušamo učiniti nešto kako bismo pomogli. Bili smo mnogo dana u kućnoj izolaciji, pa smo odlučili da napravimo aplikaciju koja će pomoći ljudima u našoj zemlji da prate trenutno stanje utjecaja covid-19 virusa.</div><div><br></div><div>Smatrali smo da samo news portali i televizijske kuće obavještavaju o širenju korone u našoj zemlji, ali ne postoji način da pratimo širenje u stvarnom vremenu, pa smo izgradili responzivnu web aplikaciju za praćenje informacija u stvarnom vremenu na karti i praćenje nekih opštih informacija o virusu u aplikaciji. Objavili smo web aplikaciju i nadamo se da će novinari pratiti našu priču, i da će cijela država početi koristiti aplikaciju.</div><div><br></div><div><br></div><div><b><u>Hvala vam na podršci, ostanite kući, ostanite sigurni.</u></b></div><div><br></div><div><br></div></div><p></p></div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  layout: 'blog',
  props: {
    msg: String
  },
  components: {
  }
}
</script>

<style scoped>
  .about {
    width: 95%;
    margin: auto;
    text-align: justify;
  }
  div,p,h2{
    color: white;
  }
  a {
    color: deepskyblue;
  }
</style>
