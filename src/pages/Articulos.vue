<template>
  <div class="gt-sm ">
  <div class="row">
    <div class="col bg-purple">
      <carruselArticulos />
    </div>
    <div class="col">
      <!--primer fila-->
      <div class="row q-ma-lg">
      <span>Iphone 6 pantalla de 8 pulgadas, 64Gb internos,
2Gb de Ram, Sólo Banda Tigo, Nuevo
</span>
<div class="row q-mx-lg"></div>
<h3>$235.00</h3>
</div>
      <div class="row">
        <div class="col-5 q-ma-lg ">
          <q-btn-toggle v-model="comprar" spread no-caps toggle-color="purple" color="white" text-color="black"
            :options="[
              { label: 'comprar', value: 'comprar' }
            ]" />
          <div class="row q-ma-lg">
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
        <div class="col text-center">
          <h4>DESCRIPCION</h4>
          <div class="row">
            <div class="col">
              <textarea rows="8" cols="50">Estado: Nuevo
Marca: Iphone
Modelo: 6 plus
Pantalla: 7 pulgadas
Sistema: Ios
Rom: 64GB
Ram: 2GB</textarea>
            </div>
            <div class="col">
              <textarea rows="8" cols="50">Telefono en muy buenas condiciones, tiene
dos cámaras, la caja esta abierta, pero con
muy poco uso, practicamente nuevo, la
compañia con la que estaba es Tigo, asi que el
chip debe ser tigo, viene con su caja original y
con todos sus accesorios. Puedo mandar más
fotos si desea por whatsapp</textarea>
            </div>
          </div>
        </div>
      </div>
      </div>
      <!--Solo para moviles-->
      <div class="lt-md">
        <div class="row">
          <div class="col">
            <carruselArticulos></carruselArticulos>
          </div>
        </div>
        <div class="row q-ma-lg">
      <span>Iphone 6 pantalla de 8 pulgadas, 64Gb internos,
2Gb de Ram, Sólo Banda Tigo, Nuevo
</span>
<div class="row q-mx-lg ">
  <div class="text-center">
<h3>$235.00</h3>
</div>
</div>
</div>
<div class="row">
  <div class="col-5  q-ma-xs text-center">
<h6>vendedor:</h6>
  </div>
  <div class="col-3  q-ma-xs text-center">
    <h6>telefono:</h6>
  </div>
  </div>
  <div class="row">
    <div class="col ">
      <textarea rows="8" cols="50">Marca: Iphone
Modelo: 6 plus
Pantalla: 7 pulgadas
Sistema: Ios
Rom: 64GB
Ram: 2GB</textarea>
    </div>
  </div>
  <div class="row">
    <div class="col ">
      <textarea rows="8" cols="50">Telefono en muy buenas condiciones, tiene
dos cámaras, la caja esta abierta, pero con
muy poco uso, practicamente nuevo, la
compañia con la que estaba es Tigo, asi que el
chip debe ser tigo, viene con su caja original y
con todos sus accesorios. Puedo mandar más
fotos si desea por whatsapp</textarea>
    </div>
  </div>
  <div class="row fixed-bottom">
        <div class="col-10 text-center q-mx-lg">
          <q-btn-group >
      <q-btn color="purple" label="Inicio" spread @click="$router.push('/')" />
      <q-btn color="purple" label="Comprar"   @click="showNotif"/>
    </q-btn-group>
        </div>
      </div>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import carruselArticulos from 'src/components/carruselArticulos.vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'ArticuloProducto',
  components: { carruselArticulos },
  setup () {
    const $q = useQuasar()
    return {
      comprar: ref(false),
      showNotif () {
        $q.notify({
          message: 'Jim pinged you.',
          icon: 'announcement'
        })
      }
    }
  }
})
</script>
