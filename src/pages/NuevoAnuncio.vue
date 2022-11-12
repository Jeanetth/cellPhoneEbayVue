<template>
  <q-page>
    <div class="gt-sm ">
      <div class="row flex-center">
        <h3>NUEVO ANUNCIO</h3>
      </div>
      <div class="row">
        <div class="col q-ml-lg">
          <div class="row">
            <div class="col-10">
              <adUno/>
            </div>
          </div>
          <div class="row q-my-lg">
            <div class="col-11">
              <adDos/>
            </div>
          </div>
        </div>
        <div class="col bg-negative">2</div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import adUno from 'src/components/adUno.vue'
import adDos from 'src/components/adDos.vue'

export default defineComponent({
  name: 'nuevoAnuncio',
  methods: {
    chooseFiles: function () {
      document.getElementById('fileUpload').click()
    }
  },
  components: { adUno, adDos }
})
</script>
