<template>
  <div class="instructions">
    <img class="img-ins" :src="require('static/corona-measures.png')" />
    <br/>
    <img class="img-ins" :src="require('static/simptomi.jpeg')" />
    <br/>
    <img class="img-ins" :src="require('static/usporedba.png')" />
    <br/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  .img-ins {
    width: 100%;
    height: 100%;
  }
.img-ins-2 {
  width: 50%;
  height: 50%;
}
  .instructions img {
    border-radius: 5px;
    margin-top: 10px;
  }
</style>
