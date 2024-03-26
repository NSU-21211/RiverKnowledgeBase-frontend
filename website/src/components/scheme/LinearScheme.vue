<template>
	<div>
		<div id="scrollable-container">
			<svg ref="linearSchemeSvg"></svg>
		</div>
	</div>
</template>

<script setup lang="ts">
import * as d3 from 'd3'
import { onMounted, ref } from 'vue'

let linearSchemeSvg = ref<SVGSVGElement | null>(null)

const displayLinearScheme = () => {
	// FIXME: add dynamic data
	const data = {
		name: 'Река',
		children: [
			{ name: 'Алей \n  10 km' },
			{ name: 'Иня \n  20 km' },
			{ name: 'Песчаная \n  30 km' },
			{ name: '' }
		]
	}

	const treeWidth = 700
	const treeHeight = 1800

	const treeLayout = d3.tree().size([treeWidth, treeHeight])
	let root: d3.HierarchyNode<any> = d3.hierarchy(data)
	treeLayout(root)

	const coordinates = [
		{ x: 100, y: 100 },
		{ x: 600, y: 300 },
		{ x: 100, y: 500 },
		{ x: 350, y: 800 }
	]

	let svg = d3.select(linearSchemeSvg.value)
	let internal = d3.select<SVGSVGElement, unknown>('#legend')

	const links = svg
		.selectAll('.link')
		.data(root.descendants().slice(1))
		.enter()
		.append('path')
		.attr('class', 'link')
		.attr('d', function (d, i) {
			if (d.parent) {
				return `M${coordinates[i].x},${coordinates[i].y}H${d.parent.x}V${d.parent.y}`
			} else {
				return ''
			}
		})

	const linkLabels = svg
		.selectAll<SVGTextElement, d3.HierarchyPointNode<any>>('.link-label')
		.data(root.descendants().slice(1))
		.enter()
		.append('text')
		.attr('class', 'link-label')
		.attr('x', function (d, i) {
			if (d.parent && d.parent.x !== undefined) {
				return ((coordinates[i].x + (d.parent ? d.parent.x : 0)) / 2).toString()
			} else {
				return (coordinates[i].x / 2).toString()
			}
		})
		.attr('y', function (d, i) {
			return (coordinates[i].y - 30).toString()
		})
		.html(function (d, i) {
			if (d.data.name) {
				return d.data.name
					.split('\n')
					.map((name: string, index: number) => {
						if (d.parent && d.parent.x !== undefined) {
							return `<tspan x="${((coordinates[i].x + (d.parent ? d.parent.x : 0)) / 2).toString()}" dy="${(index * 15).toString()}">${name}</tspan>`
						} else {
							return ''
						}
					})
					.join('')
			} else {
				return ''
			}
		})

	svg.append('circle').attr('cx', 350).attr('cy', 400).attr('r', 20).attr('fill', 'red')

	svg.append('circle').attr('cx', 350).attr('cy', 700).attr('r', 15).attr('fill', 'red')

	svg.append('text').attr('x', 380).attr('y', 705).text('Колывань').attr('fill', 'black')

	svg.append('text').attr('x', 375).attr('y', 405).text('Новосибирск').attr('fill', 'black')

	svg.append('text').attr('x', 370).attr('y', 200).text('10km').attr('fill', 'black')

	svg.append('path')
		.attr('d', 'M 330,620 A 20,20 0 0,1 370,620')
		.attr('fill', 'none')
		.attr('stroke', 'black')
		.attr('stroke-width', 10)

	internal.append('circle').attr('cx', 10).attr('cy', 10).attr('r', 15).attr('fill', 'red')

	if (linearSchemeSvg.value) {
		linearSchemeSvg.value.setAttribute('width', treeWidth.toString())
		linearSchemeSvg.value.setAttribute('height', treeHeight.toString())
	}
}

onMounted(() => {
	displayLinearScheme()
})
</script>

<style scoped></style>
