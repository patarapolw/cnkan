<template>
  <div>
    <ul>
      <li v-for="it in items" :key="it.i">
        {{ it.v }} {{ it.i }}:{{ it.t }} {{ it.r }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { analyzeItems } from "../states/tabbed-modal";

const items = computed(() => {
  const items = analyzeItems.value
    .map((it, i) => ({ ...it, v: it.r[6] || it.t, i }))
    .filter(
      (it) =>
        /[\p{sc=Han}\p{sc=Hiragana}\p{sc=Katakana}]/u.test(it.v) &&
        !["助詞", "助動詞"].includes(it.r[0])
    );

  const vArray = items.map((it) => it.v);

  return items.filter((it, i) => vArray.indexOf(it.v) === i);
});
</script>

<style scoped></style>
