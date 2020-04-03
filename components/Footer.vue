<template>
  <div class="footer-container">
    <AppInfo></AppInfo>
    <back-to-top bottom="15px" right="20px" visibleoffset="150">
        <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
    </back-to-top>
    <div class="trust-logo">
      <p>Podijelite na društvenim mrežama</p>
      <social-sharing url="https://koronavirusbih.com/"
                      title="Covid-19 mape i informacije uživo"
                      description="Covid-19 mape i informacije uživo."
                      quote="Covid-19 mape i informacije uživo"
                      hashtags="covid-19, korona, corona, bosnia, republika_srpska"
                      twitter-user=""
                      inline-template>
        <div class="network">
          <network network="email">
            <i class="fa fa-envelope"></i> Email
          </network>
          <network network="facebook">
            <i class="fab fa-facebook"></i> Facebook
          </network>
          <network network="linkedin">
            <i class="fab fa-linkedin"></i> LinkedIn
          </network>
          <network network="sms">
            <i class="fa fa-envelope"></i> SMS
          </network>
          <network network="twitter">
            <i class="fab fa-twitter"></i> Twitter
          </network>
          <network network="whatsapp">
            <i class="fab fa-whatsapp"></i> Whatsapp
          </network>
        </div>
      </social-sharing>
    </div>
    <a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/SQqdMb7"><img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="častite nas kafom"><span style="margin-left:15px;font-size:28px !important; font-family: Cookie, cursive !important;">Podržite nas</span></a>
    <div class="footer">
        <div class="footer-primary-navigation">
          <ul id="menu-primary-menu" class="nav-menu">
            <li class="list"><a @click="goHome">Početna</a></li>
            <li class="list"><a @click="goTo('about')">O nama</a></li>
            <li class="list"><a @click="goTo('contact')">Kontakt</a></li>
            <li class="list"><a @click="goTo('privacy')">Politika privatnosti</a></li>
          </ul>
        </div>
        <div class="copyright">
          <p>Sva prava zadržana © 2020 <span class  ="site-title">koronavirusbih.com</span></p>
        </div>
      </div>
  </div>
</template>

<script>
  import AppInfo from "./AppInfo";
  export default {
    data() {
      return {
      };
    },
    methods: {
      goTo(string) {
        this.$router.push({name: string});
      },
      goHome() {
        this.$router.push('/');
      }
    },
    components: {AppInfo},
    mounted() {
    }
  }
</script>

<style>
  @media (max-width: 576px) {
    .nav-menu {
      min-height: 80px !important;
    }
  }
  .nav-menu {
    min-height: 40px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
  .footer-container {
    background: darkslategrey;
    width: 100%;
  }
  .list a:hover {
    opacity: 0.6 !important;
    text-decoration: none !important;
    cursor: pointer !important;
  }
  .list a {
    font-size: 14px;
    color: white !important;
    cursor: pointer !important;
    padding: 5px 5px 0 5px !important;
    border-bottom: solid 1px white !important;
  }
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
  .copyright {
    color: #17a2b8;
    font-size:14px;
  }
  .cofee {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .bmc-button img
  {
    height: 34px !important;
    width: 35px !important;
    margin-bottom: 1px !important;
    box-shadow: none !important;
    border: none !important;
    vertical-align: middle !important;
  }
  .bmc-button{
    padding: 7px 10px 7px 10px !important;
    line-height: 35px !important;
    height:51px !important;
    min-width:217px !important;
    text-decoration: none !important;
    display:inline-flex !important;
    color:#ffffff !important;
    background-color: #25504c !important;
    border-radius: 5px !important;
    border: 1px solid transparent !important;
    padding: 7px 10px 7px 10px !important;
    font-size: 28px !important;
    letter-spacing:0.6px !important;
    box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;
    -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
    margin: 0 auto !important;font-family:Cookie, cursive !important;
    -webkit-box-sizing: border-box !important;
    box-sizing: border-box !important;
    -o-transition: 0.3s all linear !important;
    -webkit-transition: 0.3s all linear !important;
    -moz-transition: 0.3s all linear !important;
    -ms-transition: 0.3s all linear !important;
    transition: 0.3s all linear !important;
  }
  .bmc-button:hover, .bmc-button:active, .bmc-button:focus
  {
    -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
    text-decoration: none !important;
    box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
    opacity: 0.85 !important;color:#ffffff !important;
  }
  .network {
    width: 90%;
    margin: 0 auto 10px auto;
  }
  .btn-to-top {
    background: rgb(40, 110, 255);;
    width: 60px;
    height: 60px;
    padding: 10px 16px;
    border-radius: 50%;
    font-size: 22px;
    line-height: 22px;
    outline:none;
  }
  .trust-logo {
    margin-top: 20px;
  }
  .trust-logo span {
    color: #fff;
    padding: 5px;
    margin: 5px;
    line-height: 3;
    border-radius: 5px;
    border: solid 1px  #fff;
    cursor: pointer;
  }
  .trust-logo span:focus {
    outline: none;
  }
  .trust-logo span:hover {
    outline: none;
    opacity: 0.6;
  }
  .trust-logo p {
    color: #fff;
    font-size: 16px;
    margin: 10px;
  }
</style>
