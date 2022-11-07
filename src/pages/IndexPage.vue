<template>
  <q-page>
    <!--Solo para Pc-->
    <div class="gt-sm ">
      <div class="row">
        <!--Area de filtro-->
        <div class="col-2.5">
          <q-scroll-area style="height: 500px; width: 200px;">
            <MenuFilter />
          </q-scroll-area>
        </div>
        <!--Areas cards y inputs y botones-->
        <div class="col">
          <!--Inputs y los dos botones, precio hasta-->
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
                  <div class="col-3 q-ma-sm">
                    <q-btn-toggle v-model="ordenarPor" spread icon="north" no-caps toggle-color="purple" color="white"
                      text-color="black" :options="[
                        { label: 'Precio', value: 'precio' }
                      ]" />
                  </div>
                  <div class="col-3 q-ma-sm">
                    <q-btn-toggle v-model="ordenarPor" spread no-caps toggle-color="purple" color="white"
                      text-color="black" :options="[
                        { label: 'Fecha', value: 'fecha' }
                      ]" />
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <!--Row de Cards-->
          <div class="row">
            <div class="col bg-primary">1</div>
            <div class="col bg-secondary">2</div>
            <div class="col bg-negative">3</div>
            <div class="col bg-positive">4</div>
          </div>
        </div>
      </div>
    </div>
    <div class="lt-md">
      <!--Solo para moviles-->
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import MenuFilter from 'src/components/menuFilter.vue'

export default defineComponent({
  name: 'IndexPage',
  components: { MenuFilter },
  setup () {
    return {
      ordenarPor: ref(''),
      precio: ref(''),
      hasta: ref('')
    }
  }
})
</script>
