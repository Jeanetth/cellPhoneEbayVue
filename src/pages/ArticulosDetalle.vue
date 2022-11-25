<template>
  <div class="gt-sm ">
    <div class="row">
      <div class="col q-mt-lg q-mx-lg">
        <q-carousel
          animated
          v-model="slide"
          arrows
          navigation
          infinite
          control-color="purple"
          >
          <q-carousel-slide v-for="(img,id) in imagenes" :key="id" :name="id+1" :img-src="img"/>
        </q-carousel>
      </div>
      <div class="col">
        <!--primer fila-->
        <div class="row q-mx-lg">
          <div class="col">
            <h5>{{articulo.titulo}}</h5>
          </div>
        </div>
        <div class="row q-mx-lg">
          <div class="col">
            <h3>${{articulo.precio}}</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-5 q-ma-lg ">
            <q-btn color="grey-4" @click="eliminarDb"  text-color="purple" glossy unelevated icon="monetization_on" label="Comprar" size="20px" />
          </div>
        </div>
            <div class="row q-ma-lg">
              <div class="col">
                <fieldset>
                  <legend>&nbsp;</legend>
                  <div class="row">
                    <div class="col">
                      <spam>Vendedor: {{articulo.vendedor}}</spam>
                    </div>
                    <div class="col">
                    <spam>Telefono: {{articulo.telefono}}</spam>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    <div class="row q-mb-lg flex-center">
      <div class="col-8">
        <h4 class="text-center">DESCRIPCION</h4>
        <div class="row">
          <div class="col">
            <fieldset>
              Estado: {{articulo.estado}}
              <br>
              Marca: {{articulo.marca}}
              <br>
              Modelo: {{articulo.modelo}}
              <br>
              Pantalla: {{articulo.pantalla}}
              <br>
              Sistema: {{articulo.sistema}}
              <br>
              Rom: {{articulo.rom}}
              <br>
              Ram: {{articulo.ram}}
            </fieldset>
          </div>
          <div class="col">
            <fieldset>
              {{articulo.descripcion}}
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Solo para moviles-->
  <div class="lt-md">
    <div class="row">
      <div class="col q-ma-lg">
        <q-carousel
          animated
          v-model="slide"
          arrows
          navigation
          infinite
          control-color="purple"
          >
          <q-carousel-slide v-for="(img,id) in imagenes" :key="id" :name="id+1" :img-src="img"/>
        </q-carousel>
      </div>
    </div>
    <div class="row q-mx-lg">
      <span>{{articulo.titulo}}</span>
      <div class="row q-mx-lg ">
        <div class="text-center">
          <h3>${{ articulo.precio }}</h3>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-10 text-center">
        <h6>vendedor: {{articulo.vendedor}}</h6>
      </div>
      <div class="col-10 text-center">
        <h6>telefono: {{articulo.telefono}}</h6>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <fieldset>
          Estado: {{articulo.estado}}
          <br>
          Marca: {{articulo.marca}}
          <br>
          Modelo: {{articulo.modelo}}
          <br>
          Pantalla: {{articulo.pantalla}}
          <br>
          Sistema: {{articulo.sistema}}
          <br>
          Rom: {{articulo.rom}}
          <br>
          Ram: {{articulo.ram}}
        </fieldset>
      </div>
    </div>
    <div class="row">
      <div class="col ">
        <fieldset>
          {{articulo.descripcion}}
        </fieldset>
      </div>
    </div>
    <div class="row q-mt-xl">
      <div class="col-10 text-center q-mb-sm q-ml-lg fixed-bottom">
        <q-btn-group>
          <q-btn color="purple" label="Inicio" spread @click="$router.push('/')" size="xl" />
          <q-btn color="purple" label="Comprar" @click="eliminarDb" size="xl" />
        </q-btn-group>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../boot/database'
import { getStorage, ref as refStorage, listAll, getDownloadURL, deleteObject } from 'firebase/storage'
import { onMounted, ref } from 'vue'
import { useQuasar } from 'quasar'

const route = useRoute()
const router = useRouter()
const count = ref(0)
const articulo = ref([])
const imagenes = ref([])
const slide = ref(1)
const $q = useQuasar()
const imagenesRef = ref([])

async function getData () {
  const querySnapshot = await getDocs(collection(db, 'articulos'))
  querySnapshot.forEach((doc) => {
    if ((route.params.idarticulo === doc.id) && count.value === 0) {
      count.value++
      articulo.value = doc.data()
    }
  })
}
async function eliminarDb () {
  await deleteDoc(doc(db, 'articulos', route.params.idarticulo))
  console.log('ejecutado con exito')
  const storage = getStorage()
  imagenesRef.value.forEach((item) => {
    const desertRef = refStorage(storage, item)
    deleteObject(desertRef).then(() => {
    }).catch((error) => {
      console.log(error)
    })
  })
  $q.notify({
    message: 'Comprada con exito',
    color: 'purple',
    icon: 'save',
    position: 'center'
  })
  router.push('/')
}
function getImage () {
  const storage = getStorage()
  const listRef = refStorage(storage, route.params.idarticulo)

  // Find all the prefixes and items.
  listAll(listRef)
    .then((res) => {
      res.items.forEach((itemRef) => {
        imagenesRef.value.push(itemRef.fullPath)
        console.log(itemRef.fullPath)
        getDownloadURL(refStorage(storage, itemRef.fullPath))
          .then((url) => {
            // `url` is the download URL for 'images/stars.jpg'
            imagenes.value.push(url)
          })
          .catch((error) => {
            console.log(error)
          })
      })
    }).catch((error) => {
      console.log(error)
    })
}

onMounted(() => {
  console.log(route.params.idarticulo)
  console.log('entro')
  getData()
  getImage()
})

</script>
