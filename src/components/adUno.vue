<template>
  <fieldset>
    <legend>&nbsp;</legend>
    <spam>Estado:</spam>
    <q-radio v-model="estado" val="Nuevo" label="Nuevo" />
    <q-radio v-model="estado" val="Usado" label="Usado" />
    <br>
    <q-input class="q-mt-lg" outlined v-model="marca" :dense="dense">
      <template v-slot:prepend>
        <spam>Marca:</spam>
      </template>
    </q-input>
    <q-input class="q-my-lg" outlined v-model="modelo" :dense="dense">
      <template v-slot:prepend>
        <spam>Modelo:</spam>
      </template>
    </q-input>
    <q-input outlined v-model="pantalla" :dense="dense">
      <template v-slot:prepend>
        <spam>Pantalla:</spam>
      </template>
    </q-input>
    <q-select v-model="sistema" class="q-my-lg" :options="optionsMobile" label="Sistema" />
    <q-input outlined v-model="rom" :dense="dense">
      <template v-slot:prepend>
        <spam>Rom:</spam>
      </template>
    </q-input>
    <q-input outlined v-model="ram" class="q-my-lg" :dense="dense">
      <template v-slot:prepend>
        <spam>Ram:</spam>
      </template>
    </q-input>
  </fieldset>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'nuevoAnuncio',
  setup () {
    return {
      marca: ref(null),
      modelo: ref(null),
      pantalla: ref(null),
      rom: ref(null),
      ram: ref(null),
      estado: ref(null),
      sistema: ref(null),
      optionsMobile: [
        'Android', 'Ios', 'Windows'
      ]
    }
  }
})
</script>
