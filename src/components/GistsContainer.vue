<template>
  <div v-if="hasError === true">Error</div>
  <div v-else>
    <div id="userInfo">
      Enter Github Username:
      <input type="text" v-model="userNameText"/>
      <button @click="getGistsFromGithub(userNameText)">User Gists</button>
    </div>
    <ul>
      <div class="col" v-for="gist in data" v-bind:key="gist.id">
        <li><a :href="gist.html_url">{{ gist.description }}</a></li>
      </div>
    </ul>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'GistsContainer',
  data() {
    return {
      data: null,
      isLoading: true,
      hasError: false
    }
  },
  methods:
  {
    getGistsFromGithub: function(userNameVal) {
      var userNameVal = userNameVal;

      axios
      .get("http://localhost:7500/gists?username=" + userNameVal)
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
