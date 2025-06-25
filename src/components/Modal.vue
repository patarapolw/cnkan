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
        <v-tabs-window v-model="iTab">
          <v-tabs-window-item :value="-1">
            <component :is="defaultNode" />
          </v-tabs-window-item>
          <v-tabs-window-item v-for="(_, i) in tabNames" :key="i" :value="i">
            <component :is="nodes[i]" />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import {
  defaultNode,
  defaultTabName,
  nodes,
  tabNames,
} from "../states/tabbed-modal";

const isModal = ref(false);
const iTab = ref(-1);

watch(defaultTabName, (t) => {
  if (t) {
    isModal.value = true;
    iTab.value = -1;
    tabNames.value = [];
    nodes.value = [];
  } else {
    isModal.value = false;
  }
});

watch(isModal, (b) => {
  if (!b) {
    if (defaultNode.value) {
      defaultNode.value = null;
    }
    defaultTabName.value = null;
  }
});
</script>

<style scoped></style>
