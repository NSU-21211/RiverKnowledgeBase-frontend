<template>
  <div>
    <h2>{{ river.label }}</h2>
    <p>Длина: {{ river.length }} км</p>
    <p>Площадь водосбора: {{ river.watershedArea }} км²</p>
    <img :src="river.image" alt="Изображение реки" />
    <h3>Исток:</h3>
    <ul>
      <li v-for="origin in river.origin" :key="origin">{{ origin }}</li>
    </ul>
    <h3>Протекает через:</h3>
    <ul>
      <li v-for="administrativeTerritorial in river.administrativeTerritorial" :key="administrativeTerritorial">
        {{ administrativeTerritorial }}
      </li>
    </ul>
    <h3>Притоки:</h3>
    <ul>
      <li v-for="tributary in river.tributaries" :key="tributary">{{ tributary }}</li>
    </ul>
    <h3>Устье:</h3>
    <ul>
      <li v-for="mouth in river.mouth" :key="mouth">{{ mouth }}</li>
    </ul>
    <p>Страна: {{ river.country }}</p>
  </div>
</template>

<script>
import RiverService from "@/service/RiverService";
import {RiverDTO} from "@/components/RiverDTO";

export default {
  name: "RiverInfo",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      river: {},
    };
  },
  created() {
    this.loadRiverInfo();
  },
  methods: {
    async loadRiverInfo() {
      const { data } = await RiverService.getRiver(this.name);
      this.river = new RiverDTO(
          data.label,
          data.length,
          data.watershedArea,
          data.image,
          data.origin,
          data.administrativeTerritorial,
          data.tributaries,
          data.mouth,
          data.country
      );
    },
  },
};
</script>
