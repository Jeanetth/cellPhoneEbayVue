<template>
  <q-pagination
        v-model="current"
        :max="8"
        direction-links
        unelevated
        color="black"
        active-color="purple"
  />
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      current: ref(1)
    }
  }
}
</script>
