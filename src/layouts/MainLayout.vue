<template>
  <div class="desktop-only">
  <div class="row print-desktop-only">
    <q-toolbar class="bg-purple-3 ">
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
        <q-btn color="purple-5" label="inicio" />
      </div>
      <div class="col-1 q-pa-lg">
        <q-btn round color="purple-5" icon="add" />
      </div>
      <div class="col-1 q-pa-sm">
        <q-btn round color="purple-5" icon="shopping_cart">
        <q-badge color="orange" floating transparent >22</q-badge>
        </q-btn>
      </div>
    </q-toolbar>
  </div>
</div>
</template>
<script>

</script>
