<template>
  <div v-if="hasError === true">Error</div>
  <div v-else>
    <div id="userInfo">
      Enter Github Account Username:
      <input type="text" v-model="userNameText"/>
      <button @click="getReposFromGithub(userNameText)">Repository List</button>
    </div>

    <ul>
      <div class="col" v-for="project in data" v-bind:key="project.id">
        <li><a :href="project.html_url">{{ project.name }}</a></li>
      </div>
    </ul>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'RepositoryContainer',
  data() {
    return {
      data: null,
      hasError: false,
      userNameText: this.$route.query.username
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
