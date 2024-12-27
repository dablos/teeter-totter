<template>
  <div class="stats">
    <div>
      <h3>Left Side</h3>
      <p>Total Weight: {{ leftWeight }}</p>
      <p>Momentum: {{ leftMomentum }}</p>
    </div>
    <div>
      <h3>Right Side</h3>
      <p>Total Weight: {{ rightWeight }}</p>
      <p>Momentum: {{ rightMomentum }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    leftWeight: Number,
    rightWeight: Number,
    leftMomentum: Number,
    rightMomentum: Number,
  },
};
</script>
