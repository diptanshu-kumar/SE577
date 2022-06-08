<template>
  <div v-if="hasError === true">Error</div>
  <div v-else>
    <div id="userInfo">
      Enter Github Username:
      <input type="text" v-model="userNameText"/>
      <button @click="getUserFromGithub(userNameText)">Get User Info</button>
    </div>
    <div v-if="hasData === true">
      <div class="col">
        <ul>
          <li>Name: {{data.name}}</li>
          <li>Location: {{data.location}}</li>
          <li><a :href="'#repos?username=' + data.login">View Repo List</a></li>
          <li><a :href="'#repoinfo?username=' + data.login">View Details of Repos</a></li>
          <li><a :href="'#gists?username=' + data.login">View Gists</a></li>
          <li>Public Repository Count: {{data.public_repos}}</li>
          <li>Public Gist Count: {{data.public_gists}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'UserContainer',
  data() {
    return {
      data: null,
      hasData: false,
      hasError: false,
      userNameText: this.$route.query.username
    }
  },
  methods:
  {
    getUserFromGithub: function(userNameVal) {
      var userNameVal = userNameVal;

      axios
      .get("http://localhost:7500/user?username=" + userNameVal)
      .then(response => (
        this.hasData = true,
        this.hasError = false,
        this.data = response.data
      ))
      .catch(error => {
        console.log(error)
        this.hasError = true
      })
      }
  },
  created: function(){
    var user = this.userNameText;
    if(user) {
      this.getUserFromGithub(user)
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
