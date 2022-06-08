<template>
  <div>
    <div v-if="isLoading === true">Loading Branches</div>
    <div v-if="hasError === true">Error</div>

    <p>Branches:</p>
    <div class="col" v-for="branch in data" v-bind:key="branch.name">
      <BranchDetails :branchName="branch.name" :repo="repoName" :repoFullName="repoFullName">
      </BranchDetails>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import BranchDetails from "./BranchDetails.vue";

export default {
  name: "AllBranches",
  components: {
    BranchDetails,
  },
  props: {
    repoName: String,
    repoFullName: String,
  },
  data() {
    return {
      data: null,
      isLoading: true,
      hasError: false,
    };
  },
  mounted() {
    axios
      .get("http://localhost:7500/branches?repo=" + this.repoName)
      .then((response) => (this.data = response.data))
      .catch((error) => {
        console.log(error);
        this.hasError = true;
      })
      .finally(() => (this.isLoading = false));
  },
};
</script>
