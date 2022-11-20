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
    <q-btn :ripple="false" color="purple-5" label="filtrar" no-caps icon="search" />
  </div>
  <p>{{store.filtroSistemas}}</p>
</template>
<script>
import { ref } from 'vue'
import { useCounterStore } from 'stores/dataglobal'
const store = useCounterStore()
export default ({
  setup () {
    return {
      store,
      nuevo: ref(false),
      marcas: ref([
        { label: 'Samsung', value: false, cantidad: 4 },
        { label: 'Huawei', value: false, cantidad: 4 },
        { label: 'Nokia', value: false, cantidad: 4 },
        { label: 'Iphone', value: false, cantidad: 4 },
        { label: 'Xiaomi', value: false, cantidad: 4 }
      ]),
      sistemas: ref([
        { label: 'android', value: false, cantidad: 10 },
        { label: 'windows', value: false, cantidad: 15 },
        { label: 'ios', value: false, cantidad: 20 }
      ]),
      pantallas: ref([
        { label: '6.0', value: false },
        { label: '5.5', value: false },
        { label: '5', value: false }
      ])
    }
  }
})
</script>
