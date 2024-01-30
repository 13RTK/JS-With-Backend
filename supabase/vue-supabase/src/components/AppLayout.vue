<template>
  <Navbar />
  <div class="divider"></div>

  <div class="text-center my-3">
    <div v-if="!editUser">
      <ConditionFilter @searchUser="(value) => (queryName = value)" />

      <Table
        :displayUsers="displayUsers"
        :selectEditUser="selectEditUser"
        :deleteUser="deleteUser"
      />
    </div>

    <div v-else>
      <EditUser
        :editUser="editUser"
        :cancelEditUser="cancelEditUser"
        :updateUser="updateUser"
      />
    </div>
  </div>

  <Footer />
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { getUsers, deleteUserById, updateUserField } from "@/utils/userHelper";
import { useToast } from "vue-toastification";

import Table from "./Table.vue";
import ConditionFilter from "./ConditionFilter.vue";
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
import EditUser from "./EditUser.vue";

// Edit user
const editUser = ref(null);
const toast = useToast();

const selectEditUser = (user) => {
  editUser.value = user;
};

const cancelEditUser = () => {
  editUser.value = null;
};

const updateUser = async (newUser) => {
  toast.clear();

  // Post the new user
  await updateUserField(newUser);

  // Update Success
  users.value = users.value.map((user) => {
    if (user.id === newUser.id) {
      return {
        avatar: user.avatar,
        ...newUser,
      };
    }

    return user;
  });
  toast.success(`User: ${newUser.name} updated successfully`);
  cancelEditUser();
};

const deleteUser = async (deleteUser) => {
  toast.clear();
  await deleteUserById(deleteUser.id);

  // Delete success
  users.value = users.value.filter((user) => user.id !== deleteUser.id);
  toast.success(`User: ${deleteUser.name} deleted successfully`);
};

// Table and search
const queryName = ref("");
const users = ref([]);

const displayUsers = computed(() => {
  if (queryName.value.length === 0) {
    return users.value;
  }

  return users.value.filter((user) => user.name.includes(queryName.value));
});

onMounted(async () => {
  const usersArr = await getUsers();

  users.value = usersArr;
});
</script>
