<template>
  <q-page class="flex flex-center">
    <div class="text-h6">
      <ul>
        <li><a href="#/login">Login</a></li>
        <li><a href="#/gists">Gist Details</a></li>
        <li><a href="#/repos">Repository List</a></li>
        <li><a href="#/repoInfo">Repository Details</a></li>
        <li><a href="#/about">About Me</a></li>
      </ul>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
