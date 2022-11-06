<template>
  <div class="gt-sm">

    <div class="row print-desktop-only">
      <q-layout view="lHh Lpr lFf">
      <q-toolbar class="bg-purple-3">
        <div class="col-0.5">
          <q-icon name="campaign" size="75px" />
        </div>
        <div class="col-2">
          <q-toolbar-title>Tienda Cellphone</q-toolbar-title>
        </div>
        <div class="col-5">
            <q-input rounded outlined v-model="text">
              <template v-slot:prepend>
                <q-avatar>
                  <q-icon name="search" />
                </q-avatar>
              </template>
            </q-input>
          </div>
        <div class="col-0.5  q-pa-lg">
          <q-btn color="purple-5" label="inicio" href="/"/>
        </div>
        <div class="col-1 q-pa-lg">
          <q-btn round color="purple-5" icon="add" href="#/nuevoAnuncio"/>
        </div>
        <div class="col-1 q-pa-sm">
          <q-btn round color="purple-5" icon="shopping_cart">
          <q-badge color="orange" floating transparent >22</q-badge>
          </q-btn>
        </div>
      </q-toolbar>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
    </div>

  </div>

  <div class="lt-md">
    <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-purple-3">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          size="30px"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          <q-input rounded outlined v-model="text">
              <template v-slot:prepend>
                <q-avatar>
                  <q-icon name="search" />
                </q-avatar>
              </template>
            </q-input>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          <q-icon name="campaign" size="30px" />  Tienda cellPhone
        </q-item-label>

        <MobileMenu
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import MobileMenu from 'src/components/mobileMenu.vue'

const linksList = [
  {
    title: 'Inicio',
    link: '/'
  },
  {
    title: 'Nuevo anuncio',
    link: '#/nuevoAnuncio'
  },
  {
    title: 'Carrito',
    link: ''
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    MobileMenu
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
