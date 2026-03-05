<script setup>
import { computed, ref } from 'vue';
import CitySelect from './components/CitySelect.vue';
import Stat from './components/Stat.vue';

let saveCity = ref('Moscow');
let data = ref({
	humidity: 90,
	rain: 0,
	wind: 3,
});

async function getCity(city) {
	saveCity.value = city;
	data.value.humidity = 20;
}

const dataModified = computed(() => {
	return [
		{
			label: 'Влажность',
			stat: data.value.humidity + '%',
		},
		{
			label: 'Осадки',
			stat: data.value.rain + '%',
		},
		{
			label: 'Ветер',
			stat: data.value.wind + 'м/ч',
		},
	];
});
</script>

<template>
	<main class="main">
		<div id="city">{{ saveCity }}</div>
		<Stat v-for="item in dataModified" v-bind="item" :key="item.label" />
		<CitySelect @select-city="getCity" />
	</main>
</template>

<style scoped>
.main {
	background: var(--color-bg-main);
	padding: 60px 50px;
	border-radius: 25px;
}
</style>
