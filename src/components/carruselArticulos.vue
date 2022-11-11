<template>
    <div class="q-pa-lg">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >
    <q-carousel-slide v-for="n in 4" :key="n" :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
    </q-carousel>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1)
    }
  }
}
</script>
