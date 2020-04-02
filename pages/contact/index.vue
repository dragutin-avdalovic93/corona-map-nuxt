<template>
  <div class="contact">
    <h3>Kontaktirajte nas</h3>
    <div class="container-contact">
      <form  action="https://formspree.io/xlelyapz" method="POST">
        <label for="fname">Ime</label>
        <input required type="text" id="fname" name="firstname" placeholder="Vaše ime">

        <label for="lname">Prezime</label>
        <input required type="text" id="lname" name="lastname" placeholder="Vaše prezime">


        <label for="subject">Poruka</label>
        <textarea required id="subject" name="subject" placeholder="Napišite poruku..." style="height:200px"></textarea>

        <input type="submit" value="Pošalji">
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'blog',
    props: {
      msg: String
    },
    components: {
    }
  }
</script>

<style scoped>
  h3 {
    margin-bottom: 20px;
    color: white;
    line-height: 1.2;
    font-size: 26px;
  }
  p {
    line-height: 1.2;
  }
  .contact {
    width: 95%;
    margin: auto;
    text-align: center;
    padding-bottom: 40px;
  }
  input[type=text], select, textarea {
    font-size: 14px;
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  }

  input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 40px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  input[type=submit]:hover {
    background-color: #45a049;
  }
  label {
    text-align: left;
    color: #2a5c6d;
    width: 100%;
    font-weight: 400;
    display: flex;
  }
  .container-contact {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    width: 80%;
    max-width: 800px;
  }
  .contact {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>
