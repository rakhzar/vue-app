<script setup>
import { nextTick, reactive, ref } from 'vue';
import CitySelect from './components/CitySelect.vue';
import Stat from './components/Stat.vue';

let saveCity = ref('Moscow');
let data = reactive({
	label: 'Влажность',
	stat: '90%',
});

let isEdited = ref(false);

async function getCity(city) {
	saveCity.value = city;
	await nextTick();
	data.stat = '20%';
}
</script>

<template>
	<main class="main">
		<div id="city">{{ saveCity }}</div>
		<Stat v-bind="data" />
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
