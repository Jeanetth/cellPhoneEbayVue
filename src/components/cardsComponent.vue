<template>
  <q-card class="my-card">
      <img @click="$router.push('Articulos')" src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section >
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
          {{ lorem }}
      </q-card-section>
  </q-card>
</template>
<script setup>
import { ref } from 'vue'
const articulosOriginal = [
  { id: 'adsdadsadsa', precio: 24.55, titulo: 'Iphone 6 pantalla de 8 pulgadas, 64Gb internos, 2Gb de Ram, Sólo Banda Tigo, Nuevo', vendedor: 'Juan Perez', fecha: '20-11-22', telefono: '1321312-112' },


]
</script>
