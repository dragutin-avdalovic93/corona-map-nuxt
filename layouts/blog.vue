<template>
  <div>
    <MenuTopBlog/>
    <nuxt />
    <Footer/>
  </div>
</template>
<script>
  import MenuTopBlog from "../components/MenuTopBlog";
  import Footer from "../components/Footer";

  export default {
    layout: 'blog',
    components: { MenuTopBlog, Footer}
  }
</script>


<style>

</style>
