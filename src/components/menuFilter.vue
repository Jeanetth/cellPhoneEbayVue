<template>
  <div>
    <q-toggle v-model="value" label="Nuevo"/>
  </div>
  <div>
    <fieldset>
    <legend> Marca </legend>
      <q-list>
        <q-item v-for="( marca, key) in marcas" :key="'sis'+ key" clickable v-ripple>
          <q-item-section>
            <q-checkbox v-model="marca.value" >{{marca.label}}
              <q-badge color="orange" >{{marca.cantidad}}</q-badge>
            </q-checkbox>
          </q-item-section>
        </q-item>
      </q-list>
    </fieldset>
  </div>
</template>
<script>
import { ref } from 'vue'

export default ({
  setup () {
    return {
      value: ref(false),
      group: ref([]),
      check1: ref(false),
      marcas: ref([
        { label: 'Samsung', value: false, cantidad: 4 },
        { label: 'Huawei', value: false, cantidad: 4 },
        { label: 'Nokia', value: false, cantidad: 4 },
        { label: 'Iphone', value: false, cantidad: 4 },
        { label: 'Xiaomi', value: false, cantidad: 4 }
      ])
    }
  }
})
</script>
