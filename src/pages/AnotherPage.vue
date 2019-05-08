<template>
  <div>
    <p v-for="(n, idx) in 100" :key="idx">{{ idx }}. This is another page</p>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
