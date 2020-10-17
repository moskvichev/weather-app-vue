<template>
    <div class="period">Moscow</div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Dropdown',  
  props: {
    city: []
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'CITY'
    ]),
  },
  methods: {
    ...mapActions([
      'GET_CITY_FROM_API'
    ])
  },
  mounted() {
    this.GET_CITY_FROM_API()
  }
}
console.log(Object)
</script>