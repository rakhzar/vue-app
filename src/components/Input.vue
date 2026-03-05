<script setup>
const model = defineModel();
</script>

<template>
  <input
    v-model="model"
    class="input"
  />
</template>

<style scoped>
.input {
  color: var(--color-primary);
  border-radius: 8px;
  border: none;
  background: var(--color-bg-card);
  box-shadow: 1px 2px 4px 0 var(--color-bg-main);
  font-size: 18px;
  padding: 15px 20px;
  width: 260px;
  height: 53px;
}

.input::placeholder {
  color: var(--color-text-placeholder);
}
</style>
