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
                <q-radio v-model="estado" val="Nuevo" label="Nuevo" />
                <q-radio v-model="estado" val="Usado" label="Usado" />
                <br>
                <q-input class="q-my-lg" outlined v-model="nuevo.marca" :dense="dense" :rules="[val => !!val || 'Campo vacio']" ref="marcaRef">
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
                <q-select v-model="nuevo.sistema" class="q-my-lg" :options="optionsMobile" label="Sistema" :rules="[val => val != null || 'Seleccione una opcion']" />
                <q-input outlined v-model="nuevo.rom" :dense="dense" :rules="[val => !!val || 'Campo vacio']" ref="romRef">
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
              <q-input v-model="nuevo.titulo" :rules="[val => !!val || 'Campo vacio']" ref="tituloRef"/>
            </div>
          </div>
          <div class="row ">
            <div class="col-11 ">
              <q-input class="q-mt-lg" outlined v-model="nuevo.vendedor" :dense="dense" :rules="[val => !!val || 'Campo vacio']" ref="vendedorRef">
                <template v-slot:prepend>
                  <spam>Vendedor:</spam>
                </template>
              </q-input>
            </div>
          </div>
          <div class="row ">
            <div class="col-11 ">
              <q-input standout v-model.number="nuevo.desde" type="number" min="0" :rules="[val => val > 0 || 'El numero debe ser positivo',val => !!val || 'Campo vacio']" ref="telefonoRef">
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
              <q-input v-model="nuevo.descripcion" filled autogrow  :rules="[val => !!val || 'Campo vacio']" ref="descripcionRef"/>
            </div>
          </div>
          <div class="row flex-center">
            <div class="col- q-my-xl">
              <fieldset>
                <legend>PRECIO</legend>
                <q-input class="q-mt-lg" outlined v-model="nuevo.precio" :dense="dense" type="number" ref="precioRef" :rules="[val => val > 0 || 'El numero debe ser positivo', val => !!val || 'Campo vacio']">
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
            <q-input outlined v-model="nuevo.titulo" :dense="dense" ref="tituloRefM"/>
          </fieldset>
        </div>
      </div>
      <div class="row flex-center">
        <div class="col-8">
          <q-input class="q-my-lg" type="number" outlined v-model="nuevo.precio" :dense="dense" ref="precioRefM">
            <template v-slot:prepend>
              <spam>Precio: $</spam>
            </template>
          </q-input>
        </div>
      </div>
      <div class="row q-mt-sm flex-center">
        <div class="col-11 text-center">
          <q-input class="q-my-lg" type="text" outlined v-model="nuevo.vendedor" :dense="dense" ref="vendedorRefM">
            <template v-slot:prepend>
              <spam>Vendedor:</spam>
            </template>
          </q-input>
        </div>
      </div>
      <div class="row q-mt-sm flex-center">
        <div class="col-11 text-center">
          <q-input class="q-my-lg" type="number" outlined v-model="nuevo.telefono" :dense="dense" ref="telefonoRefM">
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
            <q-radio v-model="nuevo.estado" val="Nuevo" label="Nuevo" ref="estadoRefM"/>
            <q-radio v-model="nuevo.estado" val="Usado" label="Usado" ref="estadoRefM"/>
            <br>
            <q-input class="q-mt-lg" outlined v-model="nuevo.marca" :dense="dense" ref="marcaRefM">
              <template v-slot:prepend>
                <spam>Marca:</spam>
              </template>
            </q-input>
            <q-input class="q-my-lg" outlined v-model="nuevo.modelo" :dense="dense" ref="modeloRefM">
              <template v-slot:prepend>
                <spam>Modelo:</spam>
              </template>
            </q-input>
            <q-input outlined v-model="nuevo.pantalla" :dense="dense" ref="pantallaRefM">
              <template v-slot:prepend>
                <spam>Pantalla:</spam>
              </template>
            </q-input>
            <q-select v-model="nuevo.sistema" class="q-my-lg" :options="optionsMobile" label="Sistema" ref="sistemaRefM" />
            <q-input outlined v-model="nuevo.rom" :dense="dense" ref="romRefM">
              <template v-slot:prepend>
                <spam>Rom:</spam>
              </template>
            </q-input>
            <q-input outlined v-model="nuevo.ram" class="q-my-lg" :dense="dense" ref="ramRefM">
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
            <q-input outlined v-model="nuevo.descripcion" :dense="dense" ref="descripcionRefM"/>
          </fieldset>
        </div>
      </div>
      <div class="row flex-center q-mt-lg ">
        <div class="col-5">
          <q-btn color="grey-4" text-color="purple" glossy unelevated label="Cancelar" size="15px" href="/" />
        </div>
        <div class="col-5">
          <q-btn color="grey-4" @click="showNotif('center')" text-color="purple" glossy unelevated icon="save"
            label="Crear" size="15px" href='/' />
        </div>
         </div>
         <q-btn color="grey-4" text-color="purple" glossy unelevated label="limpiar" size="10px"  @click="resetear"/>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { db } from '../boot/database'
import { collection, addDoc } from 'firebase/firestore'

// variables
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
  marca: '',
  modelo: '',
  pantalla: '',
  estado: '',
  sistema: '',
  rom: '',
  ram: '',
  titulo: '',
  vendedor: '',
  telefono: 0,
  descripcion: '',
  precio: 0
})
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
// Variables validacion telefono
const marcaRefM = ref(null)
const modeloRefM = ref(null)
const pantallaRefM = ref(null)
const estadoRefM = ref(null)
const sistemaRefM = ref(null)
const romRefM = ref(null)
const ramRefM = ref(null)
const tituloRefM = ref(null)
const vendedorRefM = ref(null)
const telefonoRefM = ref(null)
const descripcionRefM = ref(null)
const precioRefM = ref(null)
const idArticulo = ref('')
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
  if (!marcaRef.value.hasError && !modeloRef.value.hasError &&
    !pantallaRef.value.hasError && !romRef.value.hasError &&
    !ramRef.value.hasError && !tituloRef.value.hasError && !vendedorRef.value.hasError &&
    !telefonoRef.value.hasError && !descripcionRef.value.hasError && !precioRef.value.hasError) {
    console.log('entro')
    subirArticulo()
  }
}

const subirArticulo = async function () {
  try {
    const docRef = await addDoc(collection(db, 'articulos'), nuevo.value)
    console.log("Document written with ID: ", docRef.id)
    idArticulo.value = docRef.id
  } catch (e) {
    console.error("Error adding document: ", e)
  }
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
  /*
  marcaRefM.value.resetValidation()
  modeloRefM.value.resetValidation()
  pantallaRefM.value.resetValidation()
  estadoRefM.value.resetValidation()
  sistemaRefM.value.resetValidation()
  romRefM.value.resetValidation()
  ramRefM.value.resetValidation()
  tituloRefM.value.resetValidation()
  vendedorRefM.value.resetValidation()
  telefonoRefM.value.resetValidation()
  descripcionRefM.value.resetValidation()
  precioRefM.value.resetValidation()
  */
}

</script>
