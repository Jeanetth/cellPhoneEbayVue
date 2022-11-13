<template>
  <div class="row flex-center">
    <div class="col-11">
      <input id="fileUpload" type="file" accept="image/*" hidden multiple />
      <carruselArticulos @click="chooseFiles()" />
    </div>
  </div>
  <div class="row flex-center">
    <div class="col-11">
      <fieldset>
        <legend>Titulo: </legend>
        <q-input outlined v-model="tituloMobile" :dense="dense" />
      </fieldset>
    </div>
  </div>
  <div class="row flex-center">
    <div class="col-8">
      <q-input class="q-my-lg" type="number" outlined v-model="modelo" :dense="dense">
        <template v-slot:prepend>
          <spam>Precio: $</spam>
        </template>
      </q-input>
    </div>
  </div>
  <div class="row q-mt-sm flex-center">
    <div class="col text-center">
      <spam>Vendedor: Juan Perez</spam>
    </div>
    <div class="col text-center">
      <spam>Teléfono: 7374-2312 </spam>
    </div>
  </div>
  <div class="row flex-center">
    <div class="col-11">
      <adUno />
    </div>
  </div>
  <div class="row flex-center q-mt-lg">
    <div class="col-11">
      <fieldset>
        <q-input outlined v-model="descripcionMobile" :dense="dense" />
      </fieldset>
    </div>
  </div>
  <div class="row flex-center q-mt-lg">
    <div class="col-5">
      <q-btn color="grey-4" text-color="purple" glossy unelevated label="Cancelar" size="15px" href="/" />
    </div>
    <div class="col-5">
      <q-btn color="grey-4" @click="showNotif('center')" text-color="purple" glossy unelevated icon="save" label="Crear"
        size="15px" href='/' />
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import carruselArticulos from './carruselArticulos.vue'
import adUno from './adUno.vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  components: { carruselArticulos, adUno },
  setup () {
    const $q = useQuasar()

    return {
      showNotif (position) {
        $q.notify({
          message: 'Comprado con exito',
          type: 'positive',
          position
        })
      }
    }
  }
})
</script>
