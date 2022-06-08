<template>
  <div>
    <div>
      <p>
        <a :href="repoUrl" target="_blank">{{ branchName }}</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BranchDetails",
  props: {
    branch: String,
    repo: String,
    repoName: String,
  },
  data() {
    return {
      repoUrl: "https://github.com/" + this.repoName + "/tree/" + this.branch
    }
  }
};
</script>
