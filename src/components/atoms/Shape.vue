<template>
  <div :class="shape" class="object-shape"></div>
</template>

<script>
export default {
  props: {
    shape: {
      type: String,
      required: true,
    },
  },
};
</script>
