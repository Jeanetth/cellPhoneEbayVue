<template>
  <div class="row">
    <div class="col-12 ">
      <spam>Titulo breve del anuncio</spam>
    </div>
  </div>
  <div class="row">
    <div class="col-9 ">
      <q-input v-model="titulo" />
    </div>
  </div>
  <div class="row ">
    <div class="col-11 ">
      <q-input class="q-mt-lg" outlined v-model="vendedor" :dense="dense">
        <template v-slot:prepend>
          <spam>Vendedor:</spam>
        </template>
      </q-input>
    </div>
  </div>
  <div class="row ">
    <div class="col-11 ">
      <q-input class="q-mt-lg" outlined v-model="telefono" :dense="dense" type="number">
        <template v-slot:prepend>
          <spam>Telefono:</spam>
        </template>
      </q-input>
    </div>
  </div>
  <div class="row">
    <h6>Descripcion:</h6>
  </div>
  <div class="row">
    <div class="col-11">
      <q-input v-model="text" filled autogrow />
    </div>
  </div>
  <div class="row flex-center">
    <div class="col- q-my-xl">
      <fieldset>
        <legend>PRECIO</legend>
        <q-input class="q-mt-lg" outlined v-model="telefono" :dense="dense" type="number">
          <template v-slot:prepend>
            <spam>$</spam>
          </template>
        </q-input>
      </fieldset>
    </div>
  </div>
  <div class="row flex-center q-my-xl q-mx-lg ">
    <div class="col-md-6 col-5  ">
      <q-btn color="grey-4" text-color="purple" glossy unelevated icon="close" label="Cancelar" size="25px" href="/" />
    </div>
    <div class="col-md-6 col-5">
      <q-btn color="grey-4" @click="showNotif('center')" text-color="purple" glossy unelevated icon="save" label="Crear"
        size="25px" href='/' />
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
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
