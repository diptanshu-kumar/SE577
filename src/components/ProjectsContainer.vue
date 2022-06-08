<template>
  <div v-if="hasError === true">Error</div>
  <div v-else>
    <div id="userInfo">
      Enter Github Account Username:
      <input type="text" v-model="userNameText"/>
      <button @click="getReposFromGithub(userNameText)">Repository Details</button>
    </div>
    <div class="grid">
      <div class="col" v-for="project in data" v-bind:key="project.id">
        <GithubItem :title="project.name" :urlLink="project.html_url" :desc="project.description"
          :language="project.language" :tags="project.topics">
        </GithubItem>
        <AllBranches :repoName="project.name" :repoFullName="project.full_name"></AllBranches>
      </div>
    </div>
  </div>
</template>

<script>


import axios from 'axios'
import GithubItem from './GithubItem.vue'
import AllBranches from './AllBranches.vue'


export default {
  name: 'ProjectsContainer',
  components: {
    GithubItem,
    AllBranches,
  },
  data() {
    return {
      data: null,
      isLoading: true,
      hasError: false
    }
  },
  methods:
  {
    getReposFromGithub: function(userNameVal) {
      var userNameVal = userNameVal;

      axios
      .get("http://localhost:7500/repos?username=" + userNameVal)
      .then(response => (
        this.data = response.data
      ))
      .catch(error => {
        console.log(error)
        this.hasError = true
      })
      .finally(() => this.isLoading = false)
      }
  },
  created: function(){
    var user = this.userNameText;
    if(user) {
      this.getReposFromGithub(user)
    }
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