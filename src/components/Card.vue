<template>
        <div class="card">
            <h3 class="card-header">{{weather_data.applicable_date}}</h3>
            <div class="card-body">
                <h4 class="card-title">min {{weather_data.min_temp.toFixed(1)}}</h4>
                <h4 class="card-title">max {{weather_data.max_temp.toFixed(1)}}</h4>
                <p class="card-text">state {{weather_data.weather_state_name}}</p>
            </div>
        </div> 
</template>

<script>
export default {
    name: "Card",
    props: {
        weather_data: {
            type: Object           
        }
    },
    data() {
        return {}
    },
    computed: {}
}

</script>