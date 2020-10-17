<template>
    <div class="period">{{city_data}}</div>
</template>

<script>
export default {
    name: "City",
    props: {
        city_data: {
            type: Object           
        }
    },
    data() {
        return {}
    },
    computed: {}
}

</script>