<script setup>
import { computed, ref } from 'vue';
import CitySelect from './components/CitySelect.vue';
import Stat from './components/Stat.vue';

let saveCity = ref('Moscow');
let data = ref({
	humidity: 90,
});

async function getCity(city) {
	saveCity.value = city;
	data.value.humidity = 20;
}

const dataModified = computed(() => {
	return {
		label: 'Влажность',
		stat: data.value.humidity + '%',
	};
});
</script>

<template>
	<main class="main">
		{{ date }}
		<div id="city">{{ saveCity }}</div>
		<Stat v-bind="dataModified" />
		<Stat label="Осадки" stat="0%" />
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
