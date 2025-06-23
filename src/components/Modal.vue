<template>
  <v-dialog
    v-model="isModal"
    max-width="1200"
    height="100%"
    contained
    scrollable
  >
    <v-card>
      <v-tabs v-model="iTab">
        <v-tab :value="-1">{{ defaultTabName }}</v-tab>
        <v-tab v-for="(t, i) in tabNames" :key="i" :value="i">{{ t }} </v-tab>
      </v-tabs>

      <v-card-text>
        <v-tab-window v-model="iTab">
          <v-tab-window-item :value="-1">
            <component :is="defaultNode" />
          </v-tab-window-item>
          <v-tab-window-item v-for="(_, i) in tabNames" :key="i" :value="i">
            <component :is="nodes[i]" />
          </v-tab-window-item>
        </v-tab-window>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch, h, VNode } from "vue";
import Search from "./Search.vue";

const props = defineProps({
  defaultTabName: {
    type: [String, null],
    required: true,
  },
});

const isModal = ref(true);

const iTab = ref(-1);
const tabNames = ref<string[]>([]);

const defaultNode = ref<VNode | null>(null);
const nodes = ref<VNode[]>([]);

watch(
  () => props.defaultTabName,
  (t) => {
    if (t) {
      isModal.value = true;
      iTab.value = -1;
      tabNames.value = [];
      nodes.value = [];

      defaultNode.value = h(Search);
    } else {
      isModal.value = false;
    }
  }
);
</script>

<style scoped></style>
