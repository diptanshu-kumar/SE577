<template>
  <q-page class="flex flex-center">
    <div class="text-h6">
      <GistsContainer />
    </div>
  </q-page>

</template>

<script>
import { defineComponent } from 'vue'
import GistsContainer from '../../components/GistsContainer.vue'

export default defineComponent({
  name: 'GistList',
  components: {
    GistsContainer,
  }
})
</script>
