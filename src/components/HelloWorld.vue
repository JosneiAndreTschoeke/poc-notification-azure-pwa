<script setup lang="ts">
import { ref, onMounted } from 'vue'
defineProps<{
  msg: string
}>()
const urlForm = ref()

const setUrl = () => {
  console.log("Atualizando URL", urlForm.value)
  localStorage.setItem('urlApi', urlForm.value)
}

onMounted(() => {
  urlForm.value = localStorage.getItem('urlApi')
});

</script>

<template>
  <div class="row">
    <label>Insira a URL e PORTA da API:</label>
  </div>
  <div class="row">
    <small> Ex: https://localhost:7127</small>
  </div>
  <div>
    <input type="text" v-model="urlForm">
    <button @click="setUrl">OK</button>

  </div>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
