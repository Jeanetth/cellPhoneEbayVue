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
          <div class="row" >
            <CardsComponent  class="col-3 q-pa-sm" v-for="n in numerOfPage()" :key="n"/>
          </div>
          <div class="row flex-center">
            <div class="col-lg-5 col-md-8 q-my-lg">
              <paginationComp/>
            </div>
            <div class="col-lg-2 col-2 q-mt-md">
                  <spam>Articulos por pagina:</spam>
              </div>
            <div class="col-lg-1 col-1 q-my-lg   ">
              <q-select square outlined v-model="selection" :options="options" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Solo para moviles-->
    <div class="lt-md">
      <div class="row q-ma-sm flex-center">
        <div class="col">
          <fieldset>
            <legend>&nbsp;</legend>
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
        <div class="col">
          <div class="q-mx-xl q-my-lg">
            <q-btn color="purple-5" icon="filter_alt">
              <q-menu>
                <menuFilter/>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </div>
      <div class="row ">
          <CardsComponent class="col-6 q-pa-sm" v-for="i in 4" :key="i"/>
      </div>
      <div class="row flex-center q-my-lg">
          <paginationComp/>
      </div>
    </div>
  </q-page>
 </template>

<script>
import { defineComponent, ref } from 'vue'
import MenuFilter from 'src/components/menuFilter.vue'
import CardsComponent from 'src/components/cardsComponent.vue'
import paginationComp from 'src/components/paginationComp.vue'

export default defineComponent({
  name: 'IndexPage',
  components: { MenuFilter, CardsComponent, paginationComp },
  methods: {
    paginas () {

    }
  },
  setup () {
    return {
      text: ref(2),
      ordenarPor: ref(''),
      precio: ref(''),
      hasta: ref(''),
      selection: ref(8),
      options: [
        4, 8, 16, 24
      ],
      numerOfPage () {
        return this.selection
      },
      ordenPor: ref('Precio'),
      optionsMobile: [
        'Precio', 'Fecha'
      ]
    }
  }
})
</script>
