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
              <fieldset>
                <legend>&nbsp;</legend>
                <spam>Estado:</spam>
                <q-toggle
                  v-model="nuevo.estado"
                  color="purple"
                />
                <br>
                <q-input class="q-my-lg" outlined v-model="nuevo.marca" :dense="dense" :rules="[val => !!val || 'Campo vacio']" ref="marcaRef0">
                  <template v-slot:prepend>
                    <spam>Marca:</spam>
                  </template>
                </q-input>
                <q-input class="q-my-lg" outlined v-model="nuevo.modelo" :dense="dense" :rules="[val => !!val || 'Campo vacio']" ref="modeloRef0">
                  <template v-slot:prepend>
                    <spam>Modelo:</spam>
                  </template>
                </q-input>
                <q-input outlined v-model="nuevo.pantalla" :dense="dense" :rules="[val => !!val || 'Campo vacio']" ref="pantallaRef0">
                  <template v-slot:prepend>
                    <spam>Pantalla:</spam>
                  </template>
                </q-input>
                <q-select v-model="nuevo.sistema" class="q-my-lg" :options="optionsMobile" label="Sistema" :rules="[val => val != null || 'Seleccione una opcion']" ref="sistemaRef0"/>
                <q-input outlined v-model="nuevo.rom" :dense="dense" :rules="[val => !!val || 'Campo vacio']" ref="romRef0">
                  <template v-slot:prepend>
                    <spam>Rom:</spam>
                  </template>
                </q-input>
                <q-input outlined v-model="nuevo.ram" class="q-my-lg" :dense="dense" :rules="[val => !!val || 'Campo vacio']" ref="ramRef0">
                  <template v-slot:prepend>
                    <spam>Ram:</spam>
                  </template>
                </q-input>
              </fieldset>
            </div>
          </div>
          <div class="row q-my-lg">
            <div class="col-12">
              <fieldset>
                <legend>Imágenes</legend>
                <div class="row">
                  <div class="col-3 text-center">
                    <input id="fileUpload" type="file" accept="image/*" hidden multiple />
                    <q-btn round size="25px" color="purple" icon="add" class="q-my-lg" @click="chooseFiles()" />
                    <br>
                    <q-btn round size="25px" color="negative" icon="remove" class="q-my-lg" />
                  </div>
                  <div class="col-5">
                    <q-table :rows="rows" :columns="columns" row-key="name" card-class="bg-purple-5 text-black"
                      hide-pagination />
                  </div>
                  <div class="col-4">
                    <!--Mostrar imagen-->
                    <q-img class="q-mx-sm" :src="url" spinner-color="white" :ratio="1" @click="refresh" />
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        <div class="col ">
          <div class="row">
            <div class="col-12 ">
              <spam>Titulo breve del anuncio</spam>
            </div>
          </div>
          <div class="row">
            <div class="col-9 ">
              <q-input v-model="nuevo.titulo" :rules="[val => !!val || 'Campo vacio']" ref="tituloRef0"/>
            </div>
          </div>
          <div class="row ">
            <div class="col-11 ">
              <q-input class="q-mt-lg" outlined v-model="nuevo.vendedor" :dense="dense" :rules="[val => !!val || 'Campo vacio']" ref="vendedorRef0">
                <template v-slot:prepend>
                  <spam>Vendedor:</spam>
                </template>
              </q-input>
            </div>
          </div>
          <div class="row ">
            <div class="col-11 ">
              <q-input class="q-mt-lg" outlined v-model="nuevo.telefono" :dense="dense" :rules="[val => !!val || 'Campo vacio', val => val > 0 || 'El numero debe ser positivo']" ref="telefonoRef0">
                <template v-slot:prepend>
                  <spam>Telefono:</spam>
                </template>
              </q-input>
            </div>
          </div>
          <div class="row">
            <h6>Descripcion:</h6>
          </div>
          <div class="row">
            <div class="col-11">
              <q-input v-model="nuevo.descripcion" filled autogrow  :rules="[val => !!val || 'Campo vacio']" ref="descripcionRef0"/>
            </div>
          </div>
          <div class="row flex-center">
            <div class="col- q-my-xl">
              <fieldset>
                <legend>PRECIO</legend>
                <q-input class="q-mt-lg" outlined v-model="nuevo.precio" :dense="dense" type="number" ref="precioRef0" :rules="[val => !!val || 'Campo vacio', val => val > 0 || 'El numero debe ser positivo']">
                  <template v-slot:prepend>
                    <spam>$</spam>
                  </template>
                </q-input>
              </fieldset>
            </div>
          </div>
          <div class="row flex-center q-my-xl q-mx-lg ">
            <div class="col-md-6 col-5  ">
              <q-btn color="grey-4" text-color="purple" glossy unelevated icon="close" label="Cancelar" size="25px"
                href="/" />
            </div>
            <div class="col-md-6 col-5">
              <q-btn color="grey-4" text-color="purple" glossy unelevated icon="save" label="Crear" size="25px" @click="guardarArticulo" />
            </div>
          </div>
          <div class="row flex-center">
            <q-btn color="grey-4" text-color="purple" glossy unelevated label="limpiar" size="15px"  @click="resetear"/>
          </div>
        </div>
      </div>
    </div>
    <div class="lt-md">
      <!--Solo para moviles-->
      <div class="row flex-center">
        <div class="col-11">
          <input id="fileUpload" type="file" accept="image/*" hidden multiple />
          <q-btn round size="25px" color="purple" icon="add" class="q-my-lg" @click="chooseFiles()" />
        </div>
      </div>
      <div class="row flex-center">
        <div class="col-11">
          <fieldset>
            <legend>Titulo: </legend>
            <q-input outlined v-model="nuevo.titulo" :dense="dense" :rules="[val => !!val || 'Campo vacio']" ref="tituloRef"/>
          </fieldset>
        </div>
      </div>
      <div class="row flex-center">
        <div class="col-8">
          <q-input class="q-my-lg" type="number" outlined v-model="nuevo.precio" :dense="dense" :rules="[val => !!val || 'Campo vacio', val => val > 0 || 'El numero debe ser positivo']" ref="precioRef">
            <template v-slot:prepend>
              <spam>Precio: $</spam>
            </template>
          </q-input>
        </div>
      </div>
      <div class="row q-mt-sm flex-center">
        <div class="col-11 text-center">
          <q-input class="q-my-lg" type="text" outlined v-model="nuevo.vendedor" :dense="dense" :rules="[val => !!val || 'Campo vacio']" ref="vendedorRef">
            <template v-slot:prepend>
              <spam>Vendedor:</spam>
            </template>
          </q-input>
        </div>
      </div>
      <div class="row q-mt-sm flex-center">
        <div class="col-11 text-center">
          <q-input class="q-my-lg" type="number" outlined v-model="nuevo.telefono" :dense="dense" :rules="[val => !!val || 'Campo vacio', val => val > 0 || 'El numero debe ser positivo']" ref="telefonoRef">
            <template v-slot:prepend>
              <spam>Telefono:</spam>
            </template>
          </q-input>
        </div>
      </div>
      <div class="row flex-center">
        <div class="col-11">
          <fieldset>
            <legend>&nbsp;</legend>
            <spam>Estado:</spam>
            <q-toggle
              v-model="nuevo.estado"
              color="purple"
            />
            <br>
            <q-input class="q-mt-lg" outlined v-model="nuevo.marca" :dense="dense" :rules="[val => !!val || 'Campo vacio']" ref="marcaRef">
              <template v-slot:prepend>
                <spam>Marca:</spam>
              </template>
            </q-input>
            <q-input class="q-my-lg" outlined v-model="nuevo.modelo" :dense="dense" :rules="[val => !!val || 'Campo vacio']" ref="modeloRef">
              <template v-slot:prepend>
                <spam>Modelo:</spam>
              </template>
            </q-input>
            <q-input outlined v-model="nuevo.pantalla" :dense="dense" :rules="[val => !!val || 'Campo vacio']" ref="pantallaRef">
              <template v-slot:prepend>
                <spam>Pantalla:</spam>
              </template>
            </q-input>
            <q-select v-model="nuevo.sistema" class="q-my-lg" :options="optionsMobile" label="Sistema" :rules="[val => val != null || 'Seleccione una opcion']" ref="sistemaRef" />
            <q-input outlined v-model="nuevo.rom" :dense="dense"  :rules="[val => !!val || 'Campo vacio']" ref="romRef">
              <template v-slot:prepend>
                <spam>Rom:</spam>
              </template>
            </q-input>
            <q-input outlined v-model="nuevo.ram" class="q-my-lg" :dense="dense" :rules="[val => !!val || 'Campo vacio']" ref="ramRef">
              <template v-slot:prepend>
                <spam>Ram:</spam>
              </template>
            </q-input>
          </fieldset>
        </div>
      </div>
      <div class="row flex-center q-mt-lg">
        <div class="col-11">
          <fieldset>
            <q-input outlined v-model="nuevo.descripcion" :dense="dense" :rules="[val => !!val || 'Campo vacio']" ref="descripcionRef"/>
          </fieldset>
        </div>
      </div>
      <div class="row flex-center q-mt-lg ">
        <div class="col-5">
          <q-btn color="grey-4" text-color="purple" glossy unelevated label="Cancelar" size="15px" href="/" />
        </div>
        <div class="col-5">
          <q-btn color="grey-4" text-color="purple" glossy unelevated icon="save" label="Crear" size="15px" @click="guardarArticulo" />
        </div>
      </div>
      <div class="row flex-center q-my-lg">
         <q-btn color="grey-4" text-color="purple" glossy unelevated label="limpiar" size="15px"  @click="resetear"/>
      </div>
      </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { db } from '../boot/database'
import { collection, addDoc } from 'firebase/firestore'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

// variables
const $q = useQuasar()
const router = useRouter()
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

const nuevo = ref({
  estado: false,
  marca: '',
  modelo: '',
  pantalla: '',
  sistema: '',
  rom: '',
  ram: '',
  titulo: '',
  vendedor: '',
  telefono: 0,
  descripcion: '',
  precio: 0
})

const idArticulo = ref()

const optionsMobile = ['android', 'windows', 'ios']
const marcaRef = ref(null)
const modeloRef = ref(null)
const pantallaRef = ref(null)
const romRef = ref(null)
const ramRef = ref(null)
const tituloRef = ref(null)
const vendedorRef = ref(null)
const telefonoRef = ref(null)
const descripcionRef = ref(null)
const precioRef = ref(null)
const sistemaRef = ref(null)
// Variables validacion pc
const marcaRef0 = ref(null)
const modeloRef0 = ref(null)
const pantallaRef0 = ref(null)
const romRef0 = ref(null)
const ramRef0 = ref(null)
const tituloRef0 = ref(null)
const vendedorRef0 = ref(null)
const telefonoRef0 = ref(null)
const descripcionRef0 = ref(null)
const precioRef0 = ref(null)
const sistemaRef0 = ref(null)

// Metodos
const chooseFiles = function () {
  document.getElementById('fileUpload').click()
}
const guardarArticulo = async function () {
  marcaRef.value.validate()
  modeloRef.value.validate()
  pantallaRef.value.validate()
  romRef.value.validate()
  ramRef.value.validate()
  tituloRef.value.validate()
  vendedorRef.value.validate()
  telefonoRef.value.validate()
  descripcionRef.value.validate()
  precioRef.value.validate()
  sistemaRef.value.validate()
  // validacion telefono
  marcaRef0.value.validate()
  modeloRef0.value.validate()
  pantallaRef0.value.validate()
  romRef0.value.validate()
  ramRef0.value.validate()
  tituloRef0.value.validate()
  vendedorRef0.value.validate()
  telefonoRef0.value.validate()
  descripcionRef0.value.validate()
  precioRef0.value.validate()
  sistemaRef0.value.validate()
  if (!marcaRef.value.hasError && !modeloRef.value.hasError &&
    !pantallaRef.value.hasError && !romRef.value.hasError &&
    !ramRef.value.hasError && !tituloRef.value.hasError && !vendedorRef.value.hasError &&
    !telefonoRef.value.hasError && !descripcionRef.value.hasError && !precioRef.value.hasError && !sistemaRef.value.hasError &&
    !marcaRef0.value.hasError && !modeloRef0.value.hasError &&
    !pantallaRef0.value.hasError && !romRef0.value.hasError &&
    !ramRef0.value.hasError && !tituloRef0.value.hasError && !vendedorRef0.value.hasError &&
    !telefonoRef0.value.hasError && !descripcionRef0.value.hasError && !precioRef0.value.hasError && !sistemaRef0.value.hasError) {
    console.log(nuevo.value)
    subirArticulo()
  }
}

const subirArticulo = async function () {
  try {
    const docRef = await addDoc(collection(db, 'articulos'), nuevo.value)
    console.log('Document written with ID: ', docRef.id)
    idArticulo.value = docRef.id
    subirImagenes()
  } catch (e) {
    console.error('Error adding document:', e)
  }
}
const subirImagenes = function () {
  console.log('subir imagenes')
  $q.notify({
    message: 'Se guardo con exito',
    color: 'purple',
    icon: 'save',
    position: 'center'
  })
  router.push('/')
}

const resetear = function () {
  marcaRef.value.resetValidation()
  modeloRef.value.resetValidation()
  pantallaRef.value.resetValidation()
  romRef.value.resetValidation()
  ramRef.value.resetValidation()
  tituloRef.value.resetValidation()
  vendedorRef.value.resetValidation()
  telefonoRef.value.resetValidation()
  descripcionRef.value.resetValidation()
  precioRef.value.resetValidation()
  // telfonoReset
  marcaRef0.value.resetValidation()
  modeloRef0.value.resetValidation()
  pantallaRef0.value.resetValidation()
  romRef0.value.resetValidation()
  ramRef0.value.resetValidation()
  tituloRef0.value.resetValidation()
  vendedorRef0.value.resetValidation()
  telefonoRef0.value.resetValidation()
  descripcionRef0.value.resetValidation()
  precioRef0.value.resetValidation()
}

</script>
