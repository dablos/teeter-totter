<template>
  <span>{{ weight }}kg</span>
</template>

<script>
export default {
  props: {
    weight: {
      type: Number,
      required: true,
    },
  },
};
</script>
