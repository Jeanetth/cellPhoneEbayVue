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
                    <q-input standout v-model.number="desde" type="number" min="0" prefix="Precio">
                      <template v-slot:append>
                        <q-icon name="paid" />
                      </template>
                    </q-input>
                  </div>
                  <div class="col-5 q-mr-sm ">
                    <q-input standout v-model.number="hasta" type="number" min="0" prefix="Hasta">
                      <template v-slot:append>
                        <q-icon name="paid" />
                      </template>
                    </q-input>
                  </div>
                  <div class="col q-ma-sm">
                    <q-btn round color="purple" icon="search" @click="filtrarPrecio" class="absolute " />
                    <q-btn round color="purple" icon="close" class="absolute" v-show="hayFiltro"
                      @click="cargarDatosOriginales" />
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
                  <div class="col q-ma-sm">
                    <q-btn-toggle v-model="ordenarPor" spread icon="north" no-caps toggle-color="purple" color="white"
                      text-color="black" :options="opcionesOrdenar" @click="Ordenar" />
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <!--Row de Cards-->
          <div class="row">
            <q-card class="col-3 q-pa-sm" v-for="(item, key) in articulos" :key="key">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">
              <q-card-section>
                <div class="text-h6">${{ item.precio }}</div>
                <div class="text-subtitle2">{{ item.titulo }}</div>
              </q-card-section>
              <q-card-actions>
                <q-btn flat :to="'/articulo/' + item.id" color="purple">Ver detalles</q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <div class="row flex-center">
            <div class="col-lg-5 col-md-8 q-my-lg">
              <paginationComp />
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
                <q-select v-model="ordenarPor" :options="opcionesOrdenar" @update:model-value="cambioSelectOrdenar" />
              </div>
            </div>
          </fieldset>
        </div>
        <div class="col">
          <div class="q-mx-xl q-my-lg">
            <q-btn color="purple-5" icon="filter_alt">
              <q-menu>
                <menuFilter />
              </q-menu>
            </q-btn>
          </div>
        </div>
      </div>
      <div class="row ">
        <q-card class="col-6 q-pa-sm" v-for="(item, key) in articulos" :key="key">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
          <q-card-section>
            <div class="text-h6">${{ item.precio }}</div>
            <div class="text-subtitle2">{{ item.titulo }}</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="row flex-center q-my-lg">
        <paginationComp />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import MenuFilter from 'src/components/menuFilter.vue'
import paginationComp from 'src/components/paginationComp.vue'
import { useCounterStore } from 'src/stores/dataglobal'
const store = useCounterStore()
const hayFiltrosMenu = computed(() => {
  return store.filtroSistemas.length
})
watch(hayFiltrosMenu, (nuevo, viejo) => {
  console.log('observador')
  console.log(nuevo)
  console.log(store.filtroSistemas)
  filtrarPorMenu()
})
const ordenarPor = ref('')
const opcionesOrdenar = ref([
  { label: 'PRECIO', value: 'PRECIO' },
  { label: 'FECHA', value: 'FECHA' }])
const desde = ref(0)
const hasta = ref(0)
const articulosOriginal = [
  { id: 'marian', sistema: 'Android', precio: 20.1, titulo: 'Iphone 6 pantalla de 8 pulgadas, 64Gb internos, 2Gb de Ram, Sólo Banda Tigo, Nuevo', vendedor: 'Juan Perez', fecha: '20-07-22', telefono: '1321312-112' },
  { id: 'adsdadsaerq', sistema: 'Ios', precio: 14.5, titulo: 'Iphone 6 pantalla de 8 pulgadas, 64Gb internos, 2Gb de Ram, Sólo Banda Tigo, Nuevo', vendedor: 'Juan Perez', fecha: '20-11-22', telefono: '1321312-112' },
  { id: 'adsdadqwerw', sistema: 'Android', precio: 234.2, titulo: 'Iphone 6 pantalla de 8 pulgadas, 64Gb internos, 2Gb de Ram, Sólo Banda Tigo, Nuevo', vendedor: 'Juan Perez', fecha: '20-11-22', telefono: '1321312-112' },
  { id: 'adsdaqwreqa', sistema: 'Ios', precio: 50.4, titulo: 'Iphone 6 pantalla de 8 pulgadas, 64Gb internos, 2Gb de Ram, Sólo Banda Tigo, Nuevo', vendedor: 'Juan Perez', fecha: '20-09-23', telefono: '1321312-112' },
  { id: 'adsdaqwerwe', sistema: 'Windows', precio: 213.3, titulo: 'Iphone 6 pantalla de 8 pulgadas, 64Gb internos, 2Gb de Ram, Sólo Banda Tigo, Nuevo', vendedor: 'Juan Perez', fecha: '20-11-22', telefono: '1321312-112' },
  { id: 'adsdaqwerwe', sistema: 'Android', precio: 6321.2, titulo: 'Iphone 6 pantalla de 8 pulgadas, 64Gb internos, 2Gb de Ram, Sólo Banda Tigo, Nuevo', vendedor: 'Juan Perez', fecha: '20-11-22', telefono: '1321312-112' },
  { id: 'adsdadqwerw', sistema: 'Ios', precio: 123.4, titulo: 'Iphone 6 pantalla de 8 pulgadas, 64Gb internos, 2Gb de Ram, Sólo Banda Tigo, Nuevo', vendedor: 'Juan Perez', fecha: '20-18-22', telefono: '1321312-112' }
]
const hayFiltro = ref(false)
const articulos = ref([])
// METODOS
function filtrarPrecio () {
  if (desde.value > 0 && hasta.value > 0) {
    hayFiltro.value = true
    articulos.value = articulos.value.filter((item) => {
      if (item.precio >= desde.value && item.precio <= hasta.value) {
        return true
      } else {
        return false
      }
    })
  }
}
function filtrarPorMenu () {
  hayFiltro.value = true
  articulos.value = articulos.value.filter((item) => {
    if (store.filtroSistemas.includes(item.sistema)) {
      return true
    } else {
      return false
    }
  })
}
function cargarDatosOriginales () {
  articulos.value = []
  store.filtroSistemas = []
  articulosOriginal.forEach(item => {
    articulos.value.push(item)
  })
  hayFiltro.value = false
}
function cambioSelectOrdenar (value) {
  ordenarPor.value = value.value
  Ordenar()
}
function Ordenar () {
  if (ordenarPor.value === 'PRECIO') {
    articulos.value.sort((a, b) => a.precio - b.precio)
  }
  if (ordenarPor.value === 'FECHA') {
    articulos.value.sort((a, b) => {
      if (a.fecha < b.fecha) {
        return -1
      }
      if (a.fecha > b.fecha) {
        return 1
      }
      return 0
    })
  }
}
// CICLO DE VIDA
onMounted(() => {
  cargarDatosOriginales()
})

</script>
