<script setup>
import IconLocation from '../icons/iconLocation.vue';
import Button from './Button.vue';
import { ref } from 'vue';
import Input from './Input.vue';

const city = defineModel({ type: String, required: true });

let isEdited = ref(false);

function select() {
  isEdited.value = false;
}

function edit() {
  isEdited.value = true;
}
</script>

<template>
  <div class="city-select">
    <div
      v-if="isEdited"
      class="city-input"
    >
      <Input
        v-model="city"
        placeholder="Введите город"
        @keyup.enter="select()"
      />
      <Button @click="select()">Сохранить</Button>
    </div>
    <Button
      v-if="!isEdited"
      @click="edit()"
    >
      <IconLocation />
      {{ city || 'Изменить город' }}
    </Button>
  </div>
</template>

<style scoped>
.city-input {
  display: flex;
  gap: 12px;
}

.city-select {
  width: 420px;
}
</style>
