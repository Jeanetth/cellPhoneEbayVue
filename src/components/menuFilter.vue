<template>
    <div>
        <q-toggle v-model="value" label="Nuevo"/>
        </div>
            <div class="q-pa-md" >
        <q-option-group :options="options" type="checkbox" v-model="group" />
        </div>
</template>
<script>
import { ref } from 'vue'

export default ({
  setup () {
    return {
      value: ref(false),
      group: ref([]),
      options: [
        { label: 'Samsung', value: 'samsung' },
        { label: 'Huawei', value: 'huawei' },
        { label: 'Nokia', value: 'nokia' },
        { label: 'Iphone', value: 'iphone' },
        { label: 'Xiaomi', value: 'xiami' }

      ]
    }
  }
})
</script>
