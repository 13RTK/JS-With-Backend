<template>
  <div>
    <label
      >username:
      <input
        type="text"
        placeholder="user name"
        class="input input-bordered w-full max-w-xs my-3 mx-3"
        v-model="userName"
      />
    </label>

    <label
      >country:
      <input
        type="text"
        placeholder="user country"
        class="input input-bordered w-full max-w-xs my-3 mx-3"
        v-model="userCountry"
      />
    </label>
    <br />

    <label>
      company:
      <input
        type="text"
        placeholder="user company"
        class="input input-bordered w-full max-w-xs my-3 mx-3"
        v-model="userCompany"
      />
    </label>

    <label>
      role:
      <input
        type="text"
        placeholder="user role"
        class="input input-bordered w-full max-w-xs my-3 mx-3"
        v-model="userRole"
      />
    </label>

    <br />
    <button
      class="btn btn-primary mx-3"
      @click="
        updateUser({
          id: editUser.id,
          name: userName,
          country: userCountry,
          company: userCompany,
          role: userRole,
        })
      "
    >
      Submit
    </button>
    <button class="btn mx-3" @click="cancelEditUser">Cancel</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  editUser: {
    type: Object,
    required: true,
  },

  cancelEditUser: {
    type: Function,
    required: true,
  },

  updateUser: {
    type: Function,
    required: true,
  },
});

const userName = ref(props.editUser.name);
const userCountry = ref(props.editUser.country);
const userCompany = ref(props.editUser.company);
const userRole = ref(props.editUser.role);
</script>
