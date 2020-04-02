<template>
  <div class="container">
      <el-row :gutter="10" id="infection">
        <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18"><CoronaMap msg="mapa"></CoronaMap></el-col>
        <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6"><InfoCorona msg="info-corona"></InfoCorona></el-col>
      </el-row>
      <!--    <el-row :gutter="10" class="resp"  id="respirators">-->
      <!--        <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18"><RespiratorsMap msg="mapa"></RespiratorsMap></el-col>-->
      <!--        <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6"><RespiratorsInfo msg="info-corona"></RespiratorsInfo></el-col>-->
      <!--        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"></el-col>-->
      <!--    </el-row>-->
      <el-row :gutter="10" class="resp" id="chart">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><CoronaChart></CoronaChart></el-col>
      </el-row>
      <el-row :gutter="10" class="resp" id="info">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><CoronaInformations></CoronaInformations></el-col>
      </el-row>
    </div>
</template>

<script>
// import RespiratorsInfo from "./RespiratorsInfo";
// import RespiratorsMap from "./RespiratorsMap";
import CoronaInformations from "../components/CoronaInformations";
import MenuTopCorona from "../components/MenuTopCorona";
import CoronaMap from "../components/CoronaMap";
import InfoCorona from "../components/InfoCorona";
import CoronaChart from "../components/CoronaChart";
export default {
  layout: 'homepage',
  components: {
  CoronaChart,
  CoronaMap,
  InfoCorona,
  MenuTopCorona,
  CoronaInformations,
  // RespiratorsMap,
  // RespiratorsInfo,
},
methods: {
}
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  margin-left: 10px;
  margin-right: 10px;
}
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
}

</style>
