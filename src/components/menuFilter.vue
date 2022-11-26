<template>
  <div class="q-my-lg">
    <q-toggle v-model="nuevo" label="Nuevo" />
  </div>
  <!--marca-->
  <div>
    <fieldset>
      <legend>&nbsp;Marca&nbsp;</legend>
      <q-list>
        <q-item v-for="( marca, key) in marcas" :key="'sis' + key" clickable v-ripple>
          <q-item-section>
            <q-checkbox v-model="marca.value">{{ marca.label }}
              <q-badge color="orange">{{ marca.cantidad }}</q-badge>
            </q-checkbox>
          </q-item-section>
        </q-item>
      </q-list>
    </fieldset>
  </div>
  <!--sistema-->
  <div>
    <fieldset>
      <legend>&nbsp;Sistema&nbsp;</legend>
      <q-list>
        <q-item v-for="(sistema, key) in sistemas" :key="'sis' + key" clickable v-ripple>
          <q-item-section>
            <q-checkbox v-model="sistema.value">{{ sistema.label }}
              <q-badge color="orange">{{ sistema.cantidad }}</q-badge>
            </q-checkbox>
          </q-item-section>
        </q-item>
      </q-list>
    </fieldset>
  </div>
  <!--pantalla-->
  <div>
    <fieldset>
      <legend>&nbsp;Pantalla&nbsp;</legend>
      <q-list>
        <q-item v-for="(pantalla, key) in pantallas" :key="'sis' + key" clickable v-ripple>
          <q-item-section>
            <q-checkbox v-model="pantalla.value">{{ pantalla.label }}
            </q-checkbox>
          </q-item-section>
        </q-item>
      </q-list>
    </fieldset>
    <div class="q-ma-lg"></div>
    <q-btn @click="filtrar" :ripple="false" color="purple-5" label="filtrar" no-caps icon="search" />
    <!--<q-btn @click="cargarDatos" label="probar" />-->
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useCounterStore } from 'stores/dataglobal'
import { db } from '../boot/database'
import { collection, getDocs } from 'firebase/firestore'
const nuevo = ref(false)
const store = useCounterStore()
const marcas = ref([])
const sistemas = ref([])
const pantallas = ref([])

const cargaData = async function () {
  const marca = await getDocs(collection(db, 'marca'))
  marca.forEach((doc) => {
    marcas.value.push({ value: false, label: doc.data().nombre, cantidad: doc.data().badge })
  })

  const sistema = await getDocs(collection(db, 'sistemas'))
  sistema.forEach((doc) => {
    sistemas.value.push({ value: false, label: doc.data().nombre, cantidad: doc.data().badge })
  })

  const pantalla = await getDocs(collection(db, 'pantallas'))
  pantalla.forEach((doc) => {
    pantallas.value.push({ value: false, label: doc.data().nombre, cantidad: 25 })
  })
}
const filtrar = function () {
  // nuevo
  store.filtroNuevo = nuevo.value
  // marca
  const valmarcas = []
  marcas.value.forEach((item) => {
    if (item.value) {
      valmarcas.push(item.label.toLowerCase())
      item.value = false
    }
  })
  store.filtromarcas = valmarcas
  // sistema
  const valSistemas = []
  sistemas.value.forEach((item) => {
    if (item.value) {
      valSistemas.push(item.label.toLowerCase())
      item.value = false
    }
  })
  store.filtroSistemas = valSistemas
  // pantallas
  const valpantallas = []
  pantallas.value.forEach((item) => {
    if (item.value) {
      valpantallas.push(item.label.toLowerCase())
      item.value = false
    }
  })
  store.filtropantallas = valpantallas
}
onMounted(() => {
  cargaData()
})

</script>
