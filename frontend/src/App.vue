<template>
  <div class="container">
    <div class="navbar-header">
      <a class="navbar-brand" href="#"
      >River service application</a
      ><br /><br />
    </div>
    <router-view />
  </div>
  <Api/>
  <RiverList name="river"/>
</template>

<script>
import Api from "@/components/Api.vue";
import RiverList from "@/components/RiverList.vue";

export default {
  name: "app",
  components: {RiverList, Api},
}
</script>

