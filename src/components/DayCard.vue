<script setup>
import IconCloud from '../icons/weather/IconCloud.vue';
import IconRain from '../icons/weather/IconRain.vue';
import IconSun from '../icons/weather/IconSun.vue';

const { weatherCode, temp, date } = defineProps({
  weatherCode: Number,
  temp: Number,
  date: Date,
  isActive: Boolean,
});
</script>

<template>
  <button
    class="day-card"
    :class="{ active: isActive }"
  >
    <IconSun v-if="weatherCode <= 1003" />
    <IconCloud
      v-if="weatherCode >= 1006 && weatherCode < 1063"
    />
    <IconRain v-if="weatherCode >= 1063" />
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

.day-card:hover {
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
