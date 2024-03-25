<template>
  <div>
    <h1>Информационный сервис о реках</h1>
    <p>Введите название реки:</p>
    <input type="text" v-model="riverName" />
    <button @click="searchRiver">Найти</button>
    <router-view></router-view>
  </div>
</template>

<script>
import {useRouter} from "vue-router";
export default {
  name: "Api",
  data() {
    return {
      riverName: "",
    };
  },
  methods: {
    searchRiver() {
      const router = useRouter();
      router.push({ name: "river-list", params: { name: this.riverName } });
    },
  },
};
</script>
