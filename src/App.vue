<script setup>
import { computed, ref } from 'vue';
import CitySelect from './components/CitySelect.vue';
import Stat from './components/Stat.vue';
import Error from './components/Error.vue';

const API_ENDPOINT = 'https://api.weatherapi.com/v1';
const errorMap = new Map([
  [1006, 'Указанный город не найден'],
]);
const errorDisplay = computed(() => {
  return errorMap.get(error.value?.error?.code);
});

let data = ref();
let error = ref();

const dataModified = computed(() => {
  if (!data.value) {
    return [];
  }
  return [
    {
      label: 'Влажность',
      stat: data.value.current.humidity + ' %',
    },
    {
      label: 'Облачность',
      stat: data.value.current.cloud + ' %',
    },
    {
      label: 'Ветер',
      stat: data.value.current.wind_kph + ' км/ч',
    },
  ];
});

/**
 * @param {any} city
 */
async function getCity(city) {
  const params = new URLSearchParams({
    q: city,
    lang: 'ru',
    key: 'a939a176356242e99ef185725260503',
    days: '3',
  });
  const res = await fetch(
    `${API_ENDPOINT}/forecast.json?${params.toString()}`,
  );
  if (res.status != 200) {
    error.value = await res.json();
    data.value = null;
    return;
  }
  error.value = null;
  data.value = await res.json();
}
</script>

<template>
  <main class="main">
    <Error
      v-if="error"
      :error="errorDisplay"
    />
    <div id="city"></div>
    <Stat
      v-for="item in dataModified"
      v-bind="item"
      :key="item.label"
    />
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
