<template>
  <div class="card">
    <h3 class="card-header">{{ weather_data.applicable_date }}</h3>
    <div class="card-body">
      <p class="card-title">
        t&#176; min: {{ weather_data.min_temp.toFixed(1) }}
      </p>
      <p class="card-title">
        t&#176; max: {{ weather_data.max_temp.toFixed(1) }}
      </p>
      <p class="card-text">States: {{ weather_data.weather_state_name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    weather_data: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  computed: {},
};
</script>
