<template>
  <div class="row">
    <div class="col bg-purple">
      <carruselArticulos />
    </div>
    <div class="col bg-green">
      <div class="row">
        <!--primer fila-->
        <span>6</span>
        <div class="row">
          <div class="col-10">
            <q-btn-toggle v-model="comprar" spread no-caps toggle-color="purple" color="white" text-color="black"
              :options="[
                { label: 'comprar', value: 'comprar' }
              ]" />
            <div class="row">
              <div class="col">
                <fieldset>
                  <legend>&nbsp;</legend>
                  <div class="row">
                    <div class="col">
                      <spam>vendedor:</spam>
                    </div>
                    <div class="col">
                      <spam>telefono:</spam>
                    </div>
                  </div>
                </fieldset>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="row">
      <div class="col">56</div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import carruselArticulos from 'src/components/carruselArticulos.vue'

export default defineComponent({
  name: 'ArticuloProducto',
  components: { carruselArticulos },
  setup () {
    return {
      comprar: ref(false)
    }
  }
})
</script>
