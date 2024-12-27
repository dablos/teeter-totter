<template>
  <div
    :class="['dropped-object', obj.shape]"
    :style="{ left: `${obj.x}px`, top: `${obj.y}px` }"
  >
    <Weight :weight="obj.weight" />
  </div>
</template>

<script>
import Weight from "../atoms/WeightLabel.vue";

export default {
  components: {
    Weight,
  },
  props: {
    obj: Object,
  },
};
</script>
