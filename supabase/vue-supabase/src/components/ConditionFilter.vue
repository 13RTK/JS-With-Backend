<template>
  <div>
    <input
      type="text"
      placeholder="username"
      class="input input-bordered w-full max-w-xs"
      v-model="queryName"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const emits = defineEmits(["search-user"]);
const queryName = ref("");
const searchUser = () => {
  emits("search-user", queryName.value);
};

watch(queryName, () => {
  searchUser();
});
</script>
