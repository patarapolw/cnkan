import { h, ref, VNode } from "vue";

import Search from "../components/Search.vue";

export const defaultTabName = ref<string | null>(null);
export const tabNames = ref<string[]>([]);

export const defaultNode = ref<VNode | null>(null);
export const nodes = ref<VNode[]>([]);

function createTabNode(_tName: string) {
  return h(Search);
}

export function newTab(tName: string) {
  if (defaultNode.value) {
    nodes.value = [...nodes.value, createTabNode(tName)];
    tabNames.value = [...tabNames.value, tName];
  } else {
    defaultNode.value = createTabNode(tName);
    defaultTabName.value = tName;
    console.log(defaultTabName.value);
  }
}
