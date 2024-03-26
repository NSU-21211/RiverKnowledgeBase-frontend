<script setup lang="ts"></script>

<template>
	<div id="legend">
		<svg>
			<text x="60" y="35" font-family="Arial" font-size="16px" fill="black">Город -</text>
			<circle cx="150" cy="28" r="20" fill="red" />

			<text x="60" y="85" font-family="Arial" font-size="16px" fill="black">ПГТ -</text>
			<circle cx="120" cy="78" r="15" fill="red" />

			<text x="60" y="135" font-family="Arial" font-size="16px" fill="black">Мост -</text>
			<path
				d="M 120,140 A 20,20 0 0,1 160,140"
				stroke="black"
				fill="none"
				stroke-width="10"
			/>
		</svg>
	</div>
</template>

<style scoped></style>
