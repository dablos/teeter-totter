<template>
  <div class="teeter-totter">
    <div class="plank" :style="{ transform: plankRotation }"></div>
    <div class="fulcrum"></div>
  </div>
</template>

<script>
export default {
  props: {
    plankRotation: String,
  },
};
</script>
