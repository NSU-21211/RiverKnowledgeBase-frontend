<template>
  <div>
    <button  id="about-button" @click="showAbout">О приложении</button>
  </div>
</template>

<script setup lang="ts">


import { useRouter } from 'vue-router'

const router = useRouter()


const showAbout = () => {
  router.push({ name: 'about'})
};
</script>

<style scoped>

</style>