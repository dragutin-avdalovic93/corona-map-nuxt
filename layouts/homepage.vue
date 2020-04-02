<template>
  <div>
    <MenuTopCorona/>
    <nuxt />
    <Footer/>
  </div>
</template>
<script>
  import MenuTopCorona from "../components/MenuTopCorona";
  import Footer from "../components/Footer";
  export default {
    layout: 'homepage',
    components: { MenuTopCorona, Footer}
  }
</script>


<style>

</style>
