<template>
  <q-page>
    <div class="row">
      <div class="col-2 bg-positive">
        <div>
          <q-toggle v-model="value" />
        </div>
        <div class="q-pa-md">
          <q-option-group :options="options" type="checkbox" v-model="group" />
        </div>
      </div>
      <div class="col bg-negative">2</div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',

  setup () {
    return {
      value: ref(true),
      group: ref([]),
      options: [
        { label: 'Battery too low', value: 'bat' },
        { label: 'Friend request', value: 'friend', color: 'green' },
        { label: 'Picture uploaded', value: 'upload', color: 'red' }
      ]
    }
  }
})
</script>
