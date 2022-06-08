<template>
  <div>
    <a :href="urlLink"></a>
    <div>
      <p><a :href="urlLink">{{ title }}</a></p>
      <div>
      </div>
      <div>
        <span v-for="tag in tags" v-bind:key="tag">{{ tag }} </span>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'GithubItem',
  props: {
    title: String,
    urlLink: String,
    tags: Array
  }
}

</script>

<style>
.item-image {
  width: 300px;
}
</style>

