<template>
	<div id="content-wrapper">
	  <div id="scheme-and-legend">
		<AppHeader />
		<AppLinearScheme :riverGeoData="riverGeoData" />
		<AppLinearSchemeLegend />
	  </div>
	  <section>
		<router-view />
	  </section>
	</div>
  </template>
  
  <script setup lang="ts">
  import AppLinearScheme from '@/core/components/scheme/LinearScheme.vue'
  import AppHeader from '@/core/components/scheme/LinearSchemeHeader.vue'
  import { useRiverStore } from '../../store/riverStore'
  
  const riverStore = useRiverStore()
  const riverGeoData = riverStore.riverGeoData
  </script>
  
  <style scoped>
  #content-wrapper {
	display: flex;
  }
  
  #scheme-and-legend {
	right: 90px;
	top: 150px;
	position: absolute;
  }
  </style>
  