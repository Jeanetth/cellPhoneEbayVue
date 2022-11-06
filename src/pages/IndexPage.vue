<template>
  <q-page>
    <div class="row">
      <div class="col-2.5">
        <MenuFilter />
      </div>
      <div class="col">
        <div class="row">
          <div class="col q-ma-lg ">
            <fieldset>
              <legend>&nbsp;</legend>
              <div class="row">
                <div class="col-5 q-mr-sm ">
                  <q-input standout v-model="precio" type="number" min="0" prefix="Precio">
                    <template v-slot:append>
                      <q-icon name="paid" />
                    </template>
                  </q-input>
                </div>
                <div class="col-5 q-mr-sm ">
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
              <legend>&nbsp;</legend>
              <div class="row">
                <div class="col-3 q-mt-md">
                  <spam>ordenado por</spam>
                </div>
                <div class="col-5 q-ma-sm">
                  <q-btn square color="primary" icon="north" v-model="ordenPrecio" label="precio"/>
                </div>
                <div class="col-1 q-ma-sm">
                  <q-btn square color="primary"  v-model="fecha" label="fecha" />
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import MenuFilter from 'src/components/menuFilter.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  components: { MenuFilter },
  setup () {
    return {
      precio: ref(''),
      hasta: ref(''),
      ordenPrecio: ref('true'),
      fecha: ref('false')
    }
  }
})
</script>
