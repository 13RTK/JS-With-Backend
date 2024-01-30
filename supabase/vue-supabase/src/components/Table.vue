<template>
  <div class="overflow-x-auto">
    <table class="table">
      <thead>
        <tr>
          <th>
            <label>
              <input
                type="checkbox"
                class="checkbox"
                :checked="
                  displayUsers.length &&
                  selectedId.length === displayUsers.length
                "
                @click="toggleAll"
              />
            </label>
          </th>
          <th>Name</th>
          <th>Job</th>
          <th>Operation</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in displayUsers"
          class="hover"
          :key="user.id"
          @click="selectUser(user.id)"
        >
          <th>
            <label>
              <input
                type="checkbox"
                class="checkbox"
                :checked="selectedId.includes(user.id)"
              />
            </label>
          </th>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img :src="user.avatar" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div class="font-bold">{{ user.name }}</div>
                <div class="text-sm opacity-50">{{ user.country }}</div>
              </div>
            </div>
          </td>
          <td>
            {{ user.company }}
            <br />
            <span class="badge badge-ghost badge-sm">{{ user.role }}</span>
          </td>
          <th v-show="selectedId.includes(user.id)">
            <button class="btn btn-ghost btn-xs" @click="selectEditUser(user)">
              Edit
            </button>
            <button
              class="btn btn-outline btn-error btn-xs"
              @click="deleteUser(user)"
            >
              Delete
            </button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  displayUsers: {
    type: Array,
    default: () => [],
    required: true,
  },

  selectEditUser: {
    type: Function,
    default: () => {},
    required: true,
  },

  deleteUser: {
    type: Function,
    default: () => {},
    required: true,
  },
});

const selectedId = ref([]);

const selectUser = (id) => {
  if (!selectedId.value.includes(id)) {
    selectedId.value.push(id);
    return;
  }

  selectedId.value = selectedId.value.filter((i) => i !== id);
};
const toggleAll = () => {
  if (selectedId.value.length === props.displayUsers.length) {
    selectedId.value = [];
    return;
  }

  selectedId.value = props.displayUsers.map((user) => user.id);
};
</script>
