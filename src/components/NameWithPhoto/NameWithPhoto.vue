<template>
  <div>
    <img :src="source" alt="test">
  </div>
</template>

<script>
  export default {
    props: ['source']
  }
</script>
