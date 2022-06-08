<template>
  <q-page class="flex flex-center">
    <div class="text-h6">
      Info About Me
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import UserContainer from '../../components/UserContainer.vue'

export default defineComponent({
  name: 'AboutMe',
  components: {
    UserContainer,
  }
})
</script>
