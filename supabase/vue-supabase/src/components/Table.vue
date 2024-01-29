<template>
  <div class="overflow-x-auto">
    <table class="table">
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>Name</th>
          <th>Job</th>
          <th>Operation</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in displayUsers">
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
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
          <th>
            <button class="btn btn-ghost btn-xs">Edit</button>
            <button class="btn btn-outline btn-error btn-xs">Delete</button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  displayUsers: {
    type: Array,
    default: () => [],
    required: true,
  },
});
</script>
