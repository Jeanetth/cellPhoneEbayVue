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
                <q-input standout v-model.number="desde" type="text"  prefix="Marca"  :rules="[ val => val > 0 || 'Por favor solo numero positivos']"/>
                <q-input class="q-my-lg" outlined v-model="modelo" :dense="dense" :rules="[val => !!val || 'Campo vacio']">
                  <template v-slot:prepend>
                    <spam>Modelo:</spam>
                  </template>
                </q-input>
                <q-input outlined v-model="pantalla" :dense="dense" :rules="[val => !!val || 'Campo vacio']">
                  <template v-slot:prepend>
                    <spam>Pantalla:</spam>
                  </template>
                </q-input>
                <q-select v-model="sistema" class="q-my-lg" :options="optionsMobile" label="Sistema" :rules="[val => val != null || 'Seleccione una opcion']"/>
                <q-input outlined v-model="rom" :dense="dense" :rules="[val => !!val || 'Campo vacio']">
                  <template v-slot:prepend>
                    <spam>Rom:</spam>
                  </template>
                </q-input>
                <q-input outlined v-model="ram" class="q-my-lg" :dense="dense" :rules="[val => !!val || 'Campo vacio']">
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
              <q-input v-model="titulo" :rules="[val => !!val || 'Campo vacio']"/>
            </div>
          </div>
          <div class="row ">
            <div class="col-11 ">
              <q-input class="q-mt-lg" outlined v-model="vendedor" :dense="dense" :rules="[val => !!val || 'Campo vacio']">
                <template v-slot:prepend>
                  <spam>Vendedor:</spam>
                </template>
              </q-input>
            </div>
          </div>
          <div class="row ">
            <div class="col-11 ">
              <q-input standout v-model.number="desde" type="number" min="0" >
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
              <q-input v-model="descripcion" filled autogrow />
            </div>
          </div>
          <div class="row flex-center">
            <div class="col- q-my-xl">
              <fieldset>
                <legend>PRECIO</legend>
                <q-input class="q-mt-lg" outlined v-model="precio" :dense="dense" type="number">
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
              <q-btn color="grey-4" @click="showNotif('center')" text-color="purple" glossy unelevated icon="save"
                label="Crear" size="25px" href='/' />
            </div>
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
            <q-input outlined v-model="titulo" :dense="dense" />
          </fieldset>
        </div>
      </div>
      <div class="row flex-center">
        <div class="col-8">
          <q-input class="q-my-lg" type="number" outlined v-model="precio" :dense="dense">
            <template v-slot:prepend>
              <spam>Precio: $</spam>
            </template>
          </q-input>
        </div>
      </div>
      <div class="row q-mt-sm flex-center">
        <div class="col-11 text-center">
          <q-input class="q-my-lg" type="text" outlined v-model="vendedor" :dense="dense">
            <template v-slot:prepend>
              <spam>Vendedor:</spam>
            </template>
          </q-input>
        </div>
      </div>
      <div class="row q-mt-sm flex-center">
        <div class="col-11 text-center">
          <q-input class="q-my-lg" type="number" outlined v-model="telefono" :dense="dense">
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
            <q-radio v-model="estado" val="Nuevo" label="Nuevo" />
            <q-radio v-model="estado" val="Usado" label="Usado" />
            <br>
            <q-input class="q-mt-lg" outlined v-model="marca" :dense="dense">
              <template v-slot:prepend>
                <spam>Marca:</spam>
              </template>
            </q-input>
            <q-input class="q-my-lg" outlined v-model="modelo" :dense="dense">
              <template v-slot:prepend>
                <spam>Modelo:</spam>
              </template>
            </q-input>
            <q-input outlined v-model="pantalla" :dense="dense">
              <template v-slot:prepend>
                <spam>Pantalla:</spam>
              </template>
            </q-input>
            <q-select v-model="sistema" class="q-my-lg" :options="optionsMobile" label="Sistema" />
            <q-input outlined v-model="rom" :dense="dense">
              <template v-slot:prepend>
                <spam>Rom:</spam>
              </template>
            </q-input>
            <q-input outlined v-model="ram" class="q-my-lg" :dense="dense">
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
            <q-input outlined v-model="descripcionMobile" :dense="dense" />
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
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
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
const sistema = ref()
const optionsMobile = ['android', 'windows', 'ios']
const estado = ref('')
// Metodos
const chooseFiles = function () {
  document.getElementById('fileUpload').click()
}

</script>
