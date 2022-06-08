<template>
  <div v-if="isLoading === true">
    Loading...
  </div>
  <div v-if="hasError === true">
    Error
  </div>
  <div v-else>
    <div class="grid">
      <div class="col" v-for="project in data" v-bind:key="project.id">
        <GithubItem :title="project.name" :urlLink="project.html_url" :tags="project.topics">
        </GithubItem>
        <GithubBranches :repoName="project.name" :repoFullName="project.full_name"></GithubBranches>
      </div>
    </div>
  </div>
</template>

<script>


import axios from 'axios'
import GithubItem from './GithubItem.vue'
import GithubBranches from './AllBranches.vue'


export default {
  name: 'ProjectsContainer',
  components: {
    GithubItem,
    GithubBranches,
  },
  data() {
    return {
      data: null,
      isLoading: true,
      hasError: false
    }
  },
  mounted() {
    axios
      .get('http://localhost:7500/repos')
      .then(response => (
        this.data = response.data
      ))
      .catch(error => {
        console.log(error)
        this.hasError = true
      })
      .finally(() => this.isLoading = false)
  }
}

</script>

<style>
.grid {
  display: flex;
}

.col {
  flex: 1;
}
</style>
