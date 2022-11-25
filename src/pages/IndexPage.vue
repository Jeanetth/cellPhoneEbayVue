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
                    <q-input standout v-model.number="desde" type="number" min="0" prefix="Desde"  :rules="[ val => val > 0 || 'Por favor solo numero positivos']">
                      <template v-slot:append>
                        <q-icon name="paid" />
                      </template>
                    </q-input>
                  </div>
                  <div class="col-5 q-mr-sm ">
                    <q-input standout v-model.number="hasta" type="number" min="0" prefix="Hasta" :rules="[ val => val > 0 || 'Por favor solo numero positivos']">
                      <template v-slot:append>
                        <q-icon name="paid" />
                      </template>
                    </q-input>
                  </div>
                  <div class="col q-ma-sm">
                    <q-btn round color="purple" icon="search" @click="filtrarPrecio" class="absolute " />
                    <q-btn round color="purple" icon="close" class="absolute" v-show="hayFiltro"
                      @click="limpiar" />
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
              <img :src="item.urlImagen">
              <q-card-section>
                <div class="text-h6">${{ item.precio }}</div>
                <div class="text-subtitle2">{{ item.titulo }}</div>
              </q-card-section>
              <q-card-actions>
                <q-btn flat :to="'/articulo/' + item.id" color="purple">Ver detalles</q-btn>
              </q-card-actions>
            </q-card>
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
            <q-btn round color="purple-5" icon="filter_alt" >
            <q-btn round color="purple" icon="close" class="absolute" v-show="hayFiltro"
                      @click="cargarDatosOriginales" />
              <q-menu>
                <menuFilter/>
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
          <q-card-actions>
                <q-btn flat :to="'/articulo/' + item.id" color="purple">Ver detalles</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <q-footer elevated>
        <q-toolbar class="glossy bg-purple-5">
          <q-toolbar-title>Gochez Santos, Mariana Jeaneth gs20027<br>Perez Reyes, Moises Timoteo</q-toolbar-title>
        </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import MenuFilter from 'src/components/menuFilter.vue'
import { useCounterStore } from 'src/stores/dataglobal'
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore'
import { db } from '../boot/database'
import { getStorage, ref as refStorage, listAll, getDownloadURL } from 'firebase/storage'
const store = useCounterStore()
const storage = getStorage()
// eslint-disable-next-line vue/return-in-computed-property
const hayFiltrosMenu = computed(() => {
  if (store.filtroSistemas.length > 0) {
    return true
  } else if (store.filtromarcas.length > 0) {
    return true
  } else if (store.filtropantallas.length) {
    return true
  }
})

// eslint-disable-next-line vue/return-in-computed-property
const hayBuscar = computed(() => {
  if (store.buscar.length > 0) {
    return true
  }
})

watch(hayBuscar, (nuevo, viejo) => {
  filtrarPorbuscar()
})

watch(hayFiltrosMenu, (nuevo, viejo) => {
  filtrarPorMenu()
})
const ordenarPor = ref('')

const contadorCargarFotos = ref(0)
const opcionesOrdenar = ref([
  { label: 'PRECIO', value: 'PRECIO' },
  { label: 'FECHA', value: 'FECHA' }])
const desde = ref(null)
const hasta = ref(null)
const articulosOriginal = ref([])
const hayFiltro = ref(false)
const articulos = ref([])
const coincidencia = ref(true)
let nokia = 0
let xiomi = 0
let huawei = 0
let samsung = 0
let iphone = 0
let ios = 0
let android = 0
let windows = 0
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
  if (store.filtroSistemas.length > 0 || store.filtromarcas.length > 0 || store.filtropantallas.length > 0) {
    articulos.value = articulos.value.filter((item) => {
      if (store.filtroSistemas.includes(item.sistema.toLowerCase()) ||
          store.filtromarcas.includes(item.marca.toLowerCase()) ||
          store.filtropantallas.includes(item.pantalla.toLowerCase())) {
        return true
      } else {
        return false
      }
    })
  }
}
function filtrarPorbuscar () {
  // console.log('entre a buscar')
  hayFiltro.value = true
  articulos.value = []
  // const event = store.buscar
  // console.log('cabal maje' + store.buscar.toLowerCase())
  articulosOriginal.value.forEach((item) => {
    if (item.titulo.toLowerCase().includes(store.buscar.toLowerCase()) || item.descripcion.toLowerCase().includes(store.buscar.toLowerCase())) {
      articulos.value.push(item)
    } else {
      coincidencia.value = false
    }
  })
}
function limpiar () {
  articulos.value = []
  articulosOriginal.value.forEach((item) => {
    articulos.value.push(item)
  })
  store.filtroSistemas = []
  store.filtropantallas = []
  store.filtromarcas = []
  store.buscar = ''
  hayFiltro.value = false
}
async function cargarDatosOriginales () {
  articulos.value = []
  store.filtroSistemas = []
  store.filtromarcas = []
  store.filtropantallas = []
  hayFiltro.value = false
  articulosOriginal.value = []
  const querySnapshot = await getDocs(collection(db, 'articulos'))
  querySnapshot.forEach((doc) => {
    const tupla = doc.data()
    tupla.id = doc.id
    articulosOriginal.value.push(tupla)
  })

  cargarImagenes()
  getBadge()
}

function cargarImagenes () {
  articulosOriginal.value.forEach((arti) => {
    const listRef = refStorage(storage, arti.id)
    listAll(listRef)
      .then((res) => {
        if (res.items.length > 0) {
          getDownloadURL(refStorage(storage, res.items[0].fullPath))
            .then((url) => {
              // `url` is the download URL for 'images/stars.jpg'
              contadorCargarFotos.value++
              arti.urlImagen = url
              estanCompletasImagenes()
            })
            .catch((error) => {
              console.log(error)
            })
        } else {
          contadorCargarFotos.value++
          estanCompletasImagenes()
        }
      }).catch((error) => {
        console.log(error)
      })
  })
}
function estanCompletasImagenes () {
  if (contadorCargarFotos.value === articulosOriginal.value.length) {
    articulosOriginal.value.forEach(item => {
      articulos.value.push(item)
    })
  }
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
async function getBadge () {
  articulosOriginal.value.forEach(async item => {
    switch (item.marca.toLowerCase()) {
      case 'nokia':
        nokia++
        break
      case 'xiomi':
        xiomi++
        break
      case 'huawei':
        huawei++
        break
      case 'samsung':
        samsung++
        break
      case 'iphone':
        iphone++
        break
      default:
        break
    }
  })
  articulosOriginal.value.forEach((item) => {
    console.log(item.sistema)
    switch (item.sistema.toLowerCase()) {
      case 'ios':
        ios++
        break
      case 'android':
        android++
        break
      case 'windows':
        windows++
        break
      default:
        break
    }
  })
  const nokiaF = doc(db, 'marca', 'YoI9z0ViTaRHHqg2EWL0')
  await updateDoc(nokiaF, {
    badge: nokia
  })
  const xiomiF = doc(db, 'marca', 'kScgSFYfd2JQ1vT1iFBv')
  await updateDoc(xiomiF, {
    badge: xiomi
  })
  const huaweiF = doc(db, 'marca', 'ogY2Rorglfymr0bOoeZn')
  await updateDoc(huaweiF, {
    badge: huawei
  })
  const samsungF = doc(db, 'marca', 'q8RW0VkpSg2MCze4HK66')
  await updateDoc(samsungF, {
    badge: samsung
  })
  const iphoneF = doc(db, 'marca', 'uSPzI5e5qoXFISnz6Jnj')
  await updateDoc(iphoneF, {
    badge: iphone
  })
  const iosF = doc(db, 'sistemas', '1nfBRhKx8vboD7xUuuZA')
  await updateDoc(iosF, {
    badge: ios
  })
  const androidF = doc(db, 'sistemas', 'G4mP7SMQVVCo5EneYCmu')
  await updateDoc(androidF, {
    badge: android
  })
  const windowsF = doc(db, 'sistemas', 'TQzPuWpeoLvmTH2g0dU0')
  await updateDoc(windowsF, {
    badge: windows
  })
}
// CICLO DE VIDA
onMounted(() => {
  cargarDatosOriginales()
})

</script>
