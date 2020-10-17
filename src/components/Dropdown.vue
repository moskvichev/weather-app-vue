<template>
    <div>
        <City          
         :city_data="CITY" 
        />
    </div>
</template>

<script>

import City from '@/components/City.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Dropdown',
  components: {
    City
  },  
  props: {},
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

</script>