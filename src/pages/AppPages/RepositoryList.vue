<template>
  <q-page class="flex flex-center">
    <div class="text-h6">
      <RepositoryContainer />
    </div>
  </q-page>

</template>

<script>
import { defineComponent } from 'vue'
import RepositoryContainer from '../../components/RepositoryContainer.vue'

export default defineComponent({
  name: 'RepositoryList',
  components: {
    RepositoryContainer,
  }
})
</script>
