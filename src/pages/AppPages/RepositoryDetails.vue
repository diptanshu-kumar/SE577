<template>
  <q-page class="flex flex-center">
    <div class="text-h6">
      <ProjectsContainer />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import ProjectsContainer from '../../components/ProjectsContainer.vue'

export default defineComponent({
  name: 'RepositoryDetails',
  components: {
    ProjectsContainer,
  }
})
</script>
