<template>
  <div id="app">
    <Stats
      :leftWeight="leftWeight"
      :rightWeight="rightWeight"
      :leftMomentum="leftMomentum"
      :rightMomentum="rightMomentum"
    />
    <div class="simulation">
      <FallingObject
        :weight="currentWeight"
        :shape="currentShape"
        :objectX="objectX"
        :objectY="objectY"
      />
      <DroppedObject v-for="(obj, index) in objects" :key="index" :obj="obj" />
      <TeeterTotter :plankRotation="plankRotation" />
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

import Stats from "../organisms/StatsPanel.vue";
import FallingObject from "../molecules/FallingObject.vue";
import DroppedObject from "../molecules/DroppedObject.vue";
import TeeterTotter from "../organisms/TeeterTotter.vue";

export default {
  components: {
    Stats,
    FallingObject,
    DroppedObject,
    TeeterTotter,
  },
  setup() {
    const store = useStore();

    const objectX = ref(200);
    const objectY = ref(0);
    const currentWeight = ref(5);
    const currentShape = ref("square");
    const isDropping = ref(false);

    const objects = computed(() => store.state.objects.objects);

    const leftWeight = computed(() =>
      objects.value
        .filter((obj) => obj.side === "left")
        .reduce((sum, obj) => sum + obj.weight, 0)
    );
    const rightWeight = computed(() =>
      objects.value
        .filter((obj) => obj.side === "right")
        .reduce((sum, obj) => sum + obj.weight, 0)
    );
    const leftMomentum = computed(() =>
      objects.value
        .filter((obj) => obj.side === "left")
        .reduce((sum, obj) => sum + obj.weight * obj.distance, 0)
    );
    const rightMomentum = computed(() =>
      objects.value
        .filter((obj) => obj.side === "right")
        .reduce((sum, obj) => sum + obj.weight * obj.distance, 0)
    );

    const plankRotation = computed(() => {
      const balance = rightMomentum.value - leftMomentum.value;
      return `rotate(${balance / 100}deg)`;
    });

    const dropObject = () => {
      if (isDropping.value) return;

      isDropping.value = true;

      const dropInterval = setInterval(() => {
        if (objectY.value >= 285) {
          clearInterval(dropInterval);
          placeObject();
        } else {
          objectY.value += 5;
        }
      }, 20);
    };

    const placeObject = () => {
      const dropSide = objectX.value < 300 ? "left" : "right";
      const distanceFromFulcrum =
        dropSide === "left"
          ? Math.abs(200 - objectX.value)
          : Math.abs(objectX.value - 400);

      store.commit("objects/ADD_OBJECT", {
        weight: currentWeight.value,
        shape: currentShape.value,
        side: dropSide,
        distance: distanceFromFulcrum,
        x: objectX.value - 25,
        y: 285,
      });

      resetFallingObject();
    };

    const resetFallingObject = () => {
      objectX.value = 200;
      objectY.value = 0;
      isDropping.value = false;
      currentWeight.value = Math.floor(Math.random() * 5) + 1;
      currentShape.value = ["square", "circle", "triangle"][
        Math.floor(Math.random() * 3)
      ];
    };

    const handleKeydown = (e) => {
      if (isDropping.value) return;

      if (e.key === "ArrowLeft") {
        objectX.value = Math.max(100, objectX.value - 10);
      } else if (e.key === "ArrowRight") {
        objectX.value = Math.min(500, objectX.value + 10);
      } else if (e.key === "ArrowDown" || e.key === "Enter") {
        dropObject();
      }
    };

    onMounted(() => {
      window.addEventListener("keydown", handleKeydown);
    });

    return {
      objectX,
      objectY,
      currentWeight,
      currentShape,
      isDropping,
      objects,
      leftWeight,
      rightWeight,
      leftMomentum,
      rightMomentum,
      plankRotation,
      dropObject,
    };
  },
};
</script>
