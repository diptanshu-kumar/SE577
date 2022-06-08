<template>
  <div>
    <div>
      <p>
        <a :href="repoUrl">{{ branchName }}</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BranchDetails",
  props: {
    branchName: String,
    repo: String,
    fullName: String,
  },
  data() {
    return {
      repoUrl: "https://github.com/" + this.fullName + "/tree/" + this.branchName
    }
  }
};
</script>
