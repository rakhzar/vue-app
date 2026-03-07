<script setup>
import { ref, provide, watchEffect } from 'vue';
import PanelRight from './components/PanelRight.vue';
import PaneLeft from './components/PaneLeft.vue';
import { API_ENDPOINT, cityProvide } from './constants';

let data = ref();
let error = ref();
let activeIndex = ref(0);

const saved = localStorage.getItem('city');
let city = ref(saved ? saved : 'Moscow');

provide(cityProvide, city);

watchEffect(() => {
  localStorage.setItem('city', city.value);
  getCity(city.value);
});

/**
 * @param {string} city
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
    <div class="left">
      <PaneLeft
        v-if="data"
        :day-data="data.forecast.forecastday[activeIndex]"
      />
    </div>
    <div class="right">
      <PanelRight
        :data
        :error
        :active-index="activeIndex"
        @select-index="(i) => (activeIndex = Number(i))"
      />
    </div>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
}
.right {
  background: var(--color-bg-main);
  padding: 60px 50px;
  border-radius: 0 25px 25px 0;
}
.left {
  width: 500px;
  height: 680px;
  border-radius: 30px;
  background-image: url('/public/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
