<template>
  <div id="content-wrapper-vertical">
    <div>
      <AppSearch />
    </div>

    <div class="c">
      <AppAbout />
    </div>
  </div>
	<div id="river-svg-logo">
		<img src="" alt="" />
	</div>
	<section>
		<router-view />
	</section>
</template>

<script setup lang="ts">
import AppSearch from '@/core/components/home/AppSearch.vue'
import AppAbout from '@/core/components/home/AppAbout.vue'
</script>

<style scoped>
.app-container {
  position: relative; /* Обеспечивает контекст позиционирования для дочерних элементов */
}

.app-about {
  position: fixed;
  bottom: 500px; /* отступ от нижнего края */
  right: 20px; /* отступ от правого края */
}

.c {
  flex: 1; /* Делает контейнеры растягивающимися на всю доступную высоту */
  padding: 20px;
  position: absolute;
  right: 10px;
  bottom: 10px;
}
</style>
