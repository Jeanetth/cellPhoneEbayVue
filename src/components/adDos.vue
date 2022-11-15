<template>
  <fieldset>
    <legend>Imágenes</legend>
    <div class="row">
      <div class="col-3 text-center">
        <input id="fileUpload" type="file" accept="image/*" hidden multiple/>
        <q-btn round size="25px" color="purple" icon="add" class="q-my-lg" @click="chooseFiles()" />
        <br>
        <q-btn round size="25px" color="negative" icon="remove" class="q-my-lg" />
      </div>
      <div class="col-5">
        <q-table :rows="rows" :columns="columns" row-key="name"  card-class="bg-purple-5 text-black" hide-pagination />
      </div>
      <div class="col-4">
        <q-img class="q-mx-sm" :src="url" spinner-color="white" :ratio="1"
          @click="refresh" />
      </div>
    </div>
  </fieldset>
</template>
<script>
import { defineComponent, ref } from 'vue'

const columns = [
  { name: 'N', align: 'center', label: 'N', field: 'N', sortable: true },
  { name: 'Tamaño', align: 'center', label: 'Tamaño', field: 'Tamaño', sortable: true },
  { name: 'Tipo', align: 'center', label: 'Tipo', field: 'Tipo', sortable: true }
]

const rows = [
  {
    N: 1,
    Tamaño: '145kb',
    Tipo: 'jpg'
  },
  {
    N: 2,
    Tamaño: '145kb',
    Tipo: 'jpg'
  },
  {
    N: 3,
    Tamaño: '145kb',
    Tipo: 'jpg'
  },
  {
    N: 4,
    Tamaño: '145kb',
    Tipo: 'jpg'
  }
]
export default defineComponent({
  methods: {
    chooseFiles: function () {
      document.getElementById('fileUpload').click()
    }
  },
  setup () {
    const url = ref('https://placeimg.com/500/300/nature')

    return {
      columns,
      rows,
      url,
      refresh () {
        url.value = 'https://placeimg.com/500/300/nature?t=' + Math.random()
      }
    }
  }
})

</script>
