<template>
  <q-page class="flex flex-center">
    <div class="text-h6">
      <GithubReposContainer />
    </div>
  </q-page>

</template>

<script>
import { defineComponent } from 'vue'
import GithubReposContainer from '../../components/RepositoryContainer.vue'

export default defineComponent({
  name: 'RepositoryList',
  components: {
    GithubReposContainer,
  }
})
</script>
