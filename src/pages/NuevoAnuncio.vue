<template>
  <q-page>
    <div class="row flex-center">
      <h3>NUEVO ANUNCIO</h3>
    </div>
    <div class="row">
      <div class="col q-ml-lg">
        <div class="row">
          <div class="col-11">
            <fieldset>
              <legend>&nbsp;</legend>
              <spam>Estado:</spam>
              <q-radio v-model="shape" val="Nuevo" label="Nuevo" />
              <q-radio v-model="shape" val="Usado" label="Usado" />
              <br>
              <q-input class="q-mt-lg" outlined v-model="text" :dense="dense">
                <template v-slot:prepend>
                  <spam>Marca:</spam>
                </template>
              </q-input>
              <q-input class="q-my-lg" outlined v-model="text" :dense="dense">
                <template v-slot:prepend>
                  <spam>Modelo:</spam>
                </template>
              </q-input>
              <q-input outlined v-model="text" :dense="dense">
                <template v-slot:prepend>
                  <spam>Pantalla:</spam>
                </template>
              </q-input>
              <div class="row">
                <div class="col">
                  <spam>Ordenar por:</spam>
                </div>
                <div class="col-5">
                  <q-select v-model="ordenPor" :options="optionsMobile"/>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <div class="col bg-negative">2</div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'nuevoAnuncio',
  setup () {
    return {
      shape: ref('line')
    }
  }
})
</script>
