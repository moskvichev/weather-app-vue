<template>
  <div class="block">
    <h1>{{ msg }}</h1>      
  </div>
</template>

<script>
  export default {
    name: 'Introducing',
    props: {
      msg: String
    }
  }
</script>