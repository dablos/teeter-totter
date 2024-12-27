<template>
  <div
    :class="['falling-object', shape]"
    :style="{ left: `${objectX}px`, top: `${objectY}px` }"
  >
    <Weight :weight="weight" />
  </div>
</template>

<script>
import Weight from "../atoms/WeightLabel.vue";

export default {
  components: {
    Weight,
  },
  props: {
    weight: Number,
    shape: String,
    objectX: Number,
    objectY: Number,
  },
};
</script>
