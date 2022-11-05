<template>
  <q-page>
    <div class="row">
<<<<<<< HEAD
      <div class="col-2 bg-negative">
        <MenuFilter />
      </div>
      <div class="col">
        <div class="row">
          <div class="col q-ma-lg">
            <fieldset>
              <legend> </legend>
              <div class="row">
                <div class="col-5 q-ma-sm">
                  <q-input standout v-model="precio" type="number" min="0" prefix="Precio">
                    <template v-slot:append>
                      <q-icon name="paid" />
                    </template>
                  </q-input>
                </div>
                <div class="col-5 q-ma-sm">
                  <q-input standout v-model="hasta" type="number" min="0" prefix="Hasta">
                    <template v-slot:append>
                      <q-icon name="paid" />
                    </template>
                  </q-input>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="col q-ma-lg">
            <fieldset>
              <legend> </legend>
              <div class="row">
                <div class="col-5 q-ma-sm">
                  <q-btn square color="primary" icon="north" v-model="ordenPrecio" label="precio"/>
                </div>
              </div>
              <div class="col-5 q-ma-sm">
                  <q-btn square color="primary"  v-model="fecha" label="fecha" />
                </div>
            </fieldset>
          </div>

        </div>
      </div>
=======
      <div class="col-2 bg-positive">
        <div>
          <q-toggle v-model="value" />
        </div>
        <div class="q-pa-md">
          <q-option-group :options="options" type="checkbox" v-model="group" />
        </div>
      </div>
      <div class="col bg-negative">2</div>
>>>>>>> 52fe6ef9e7985f334b77fe684d589ef528583882
    </div>
  </q-page>
</template>

<script>
<<<<<<< HEAD
import MenuFilter from 'src/components/menuFilter.vue'
=======
>>>>>>> 52fe6ef9e7985f334b77fe684d589ef528583882
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
<<<<<<< HEAD
  components: { MenuFilter },
  setup () {
    return {
      precio: ref(''),
      hasta: ref(''),
      ordenPrecio: ref('ordenPrecio'),
      fecha: ref('fecha')

=======

  setup () {
    return {
      value: ref(true),
      group: ref([]),
      options: [
        { label: 'Battery too low', value: 'bat' },
        { label: 'Friend request', value: 'friend', color: 'green' },
        { label: 'Picture uploaded', value: 'upload', color: 'red' }
      ]
>>>>>>> 52fe6ef9e7985f334b77fe684d589ef528583882
    }
  }
})
</script>
