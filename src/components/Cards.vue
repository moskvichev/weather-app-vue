<template>
    <div class="cards">

        <Card 
          v-for="weather in WEATHERS"
          :key="weather.article"
          :weather_data="weather"
        />
        
    </div>    
</template>

<script>

import Card from '@/components/Card.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Cards',
  components: {
    Card
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'WEATHERS'
    ]),
  },
  methods: {
    ...mapActions([
      'GET_WEATHERS_FROM_API'
    ])
  },
  mounted() {
    this.GET_WEATHERS_FROM_API()
  }
}
</script>