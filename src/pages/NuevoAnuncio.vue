<template>
  <q-page class="bg-purple-3">
    <div class="gt-sm">
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
            <div class="col-12">
              <adDos/>
            </div>
          </div>
        </div>
        <div class="col ">
          <adTres/>
        </div>
      </div>
    </div>
    <div class="lt-md">
      <!--Solo para moviles-->
      <adMobile/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import adUno from 'src/components/adUno.vue'
import adDos from 'src/components/adDos.vue'
import adTres from 'src/components/adTres.vue'
import adMobile from 'src/components/adMobile.vue'

export default defineComponent({
  methods: {
    chooseFiles: function () {
      document.getElementById('fileUpload').click()
    }
  },
  name: 'nuevoAnuncio',
  components: { adUno, adDos, adTres, adMobile }
})
</script>
