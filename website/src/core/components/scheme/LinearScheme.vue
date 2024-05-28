<template>
    <div id="scrollable-container">
      <svg ref="linearSchemeSvg"></svg>
    </div>
  </template>
  
  <script setup lang="ts">
  import * as d3 from 'd3'
  import { onMounted, ref, watch } from 'vue'
  
  interface Inflow {
    source_river: string;
    inflow: string;
    distance_from_mouth_km: number;
    side: string;
  }
  
  interface RiverData {
    inflows_count: number;
    length_km: number;
    distances_to_inflows: Inflow[];
  }
  
  let linearSchemeSvg = ref<SVGSVGElement | null>(null)
  const props = defineProps<{ riverGeoData: RiverData[] }>()
  
  const displayLinearScheme = (data: RiverData[]) => {
    const riverLength = data[0].length_km;
    const inflows = data[0].distances_to_inflows;
    const treeWidth = 700;
    const treeHeight = 2000;
    const inflowLength = 80;
    const verticalLineWidth = 17;
    const circleRadius = 20;
  
    const svg = d3.select(linearSchemeSvg.value)
    svg.selectAll("*").remove(); // очистка перед рендерингом
  
    svg.attr('width', treeWidth)
      .attr('height', treeHeight)
  
    // Отрисовка вертикальной линии (река)
    svg.append('rect')
      .attr('x', treeWidth / 2 - verticalLineWidth / 2)
      .attr('y', 0)
      .attr('width', verticalLineWidth)
      .attr('height', treeHeight)
      .attr('fill', 'lightblue')
  
    // Отметка на верхнем краю
    svg.append('text')
      .attr('x', treeWidth / 2 + 15)
      .attr('y', 15)
      .text('0 км')
      .attr('fill', 'black')
  
    // Отметка на нижнем краю
    svg.append('text')
      .attr('x', treeWidth / 2 + 15)
      .attr('y', treeHeight - 5)
      .text(`${riverLength.toFixed(2)} км`)
      .attr('fill', 'black')
  
    // Отрисовка притоков
    inflows.forEach((inflow: Inflow, index: number) => {
      const inflowY = index * 30 + 30;
  
      svg.append('rect')
        .attr('x', inflow.side === 'right' ? treeWidth / 2 : treeWidth / 2 - inflowLength)
        .attr('y', inflowY)
        .attr('width', inflowLength)
        .attr('height', 5)
        .attr('fill', inflow.side === 'right' ? 'blue' : 'green')
  
      svg.append('text')
        .attr('x', inflow.side === 'right' ? treeWidth / 2 + inflowLength + 5 : treeWidth / 2 - inflowLength - 5)
        .attr('y', inflowY + 5)
        .attr('text-anchor', inflow.side === 'right' ? 'start' : 'end')
        .text(`${inflow.inflow} (${inflow.distance_from_mouth_km.toFixed(2)} км)`)
        .attr('fill', 'black')
    })
  
    // Расстояние между притоками
    inflows.forEach((inflow: Inflow, index: number) => {
      if (index > 0) {
        const distanceY = index * 30 + 15;
        const distance = (inflows[index].distance_from_mouth_km - inflows[index - 1].distance_from_mouth_km).toFixed(2);
        
        svg.append('text')
          .attr('x', treeWidth / 2 + 15)
          .attr('y', distanceY)
          .text(`${distance} км`)
          .attr('fill', 'black')
      }
    })
  }
  
  onMounted(() => {
    if (props.riverGeoData) {
      displayLinearScheme(props.riverGeoData)
    }
  })
  
  watch(() => props.riverGeoData, (newData) => {
    if (newData) {
      displayLinearScheme(newData)
    }
  })
  </script>
  
  <style scoped>
  #scrollable-container {
    overflow-x: auto;
    width: 100%;
  }
  </style>
  