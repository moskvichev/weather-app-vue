<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="main">
          <Introducing msg="This is weather-app are test task for SimbirSoft" />
          <div class="block">
            <div class="col col-flex">
              <Dropdown />
              <div class="period">Autumn</div>
            </div>
          </div>
          <div class="block">
            <Cards />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//@ is an alias to /src
import Introducing from "@/components/Introducing.vue";
import Dropdown from "@/components/Dropdown.vue";
import Cards from "@/components/Cards.vue";

export default {
  name: "Home",
  components: {
    Introducing,
    Dropdown,
    Cards,
  },
};
</script>
