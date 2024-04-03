<template>
  <Person/>
  <hr>
  <Person2/>
</template>

<script lang="ts">
  import Person from './components/Person.vue'
  import Person2 from './components/Person2.vue'

  export default {
    name:'App',
    components:{Person, Person2}
  }
</script>
