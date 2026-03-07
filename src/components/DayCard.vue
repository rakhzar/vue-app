<script setup>
import IconCloud from '../icons/weather/IconCloud.vue';
import IconRain from '../icons/weather/IconRain.vue';
import IconSun from '../icons/weather/IconSun.vue';
import { computed } from 'vue';

const { weatherCode, temp, date, isActive } = defineProps({
  weatherCode: Number,
  temp: Number,
  date: Date,
  isActive: Boolean,
});

const iconColor = computed(() =>
  isActive ? 'black' : 'white',
);

const currentIcon = computed(() => {
  if (weatherCode <= 1003) return IconSun;
  if (weatherCode < 1063) return IconCloud;
  return IconRain;
});
</script>

<template>
  <button
    class="day-card"
    :class="{ active: isActive }"
  >
    <component
      :is="currentIcon"
      :color="iconColor"
    />
    <div class="day-card__day">
      {{
        date.toLocaleDateString('ru-RU', {
          weekday: 'short',
        })
      }}
    </div>
    <div class="day-card__temp">{{ temp }} °С</div>
  </button>
</template>

<style scoped>
.day-card {
  padding: 20px 24px;
  background-color: var(--color-bg-card);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: var(--color-primary);
  border-radius: 10px;
  box-shadow: 1px 2px 4px 0px var(--color-bg-main);
  border: none;
  cursor: pointer;
  width: 100%;
}

.active {
  background-color: var(--color-primary);
  color: var(--color-primary-inverted);
}

.day-card:not(.active):hover {
  background-color: var(--color-bg-cards);
}

.day-card__day {
  font-size: 20px;
}

.day-card__temp {
  font-size: 20px;
  font-weight: 700;
}
</style>
