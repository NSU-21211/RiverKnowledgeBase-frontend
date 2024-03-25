<template>
  <div>
    <h2>Список рек</h2>
    <ul>
      <li v-for="river in rivers" :key="river.label">
        <a @click="getRiverInfo(river.label)">{{ river.label }}</a>
      </li>
    </ul>
  </div>
  <RiverInfo name="teste"/>
</template>

<script>
import { useRouter } from 'vue-router';
import RiverService from "@/service/RiverService";
export default {
  name: "RiverList",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      rivers: [],
    };
  },
  created() {
    this.loadRivers();
  },
  methods: {
    async loadRivers() {
      const { data } = await RiverService.searchRiver(this.name);
      this.rivers = data;
    },
    getRiverInfo(riverName) {
      const router = useRouter();
      router.push({ name: "river-info", params: { name: riverName } });
    },
  },
};
</script>
