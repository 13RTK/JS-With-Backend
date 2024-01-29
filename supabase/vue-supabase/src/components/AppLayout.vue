<template>
  <Navbar />
  <div class="divider"></div>

  <div class="text-center my-3">
    <ConditionFilter @searchUser="(value) => (queryName = value)" />

    <Table :displayUsers="displayUsers" />
  </div>

  <Footer />
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { faker } from "@faker-js/faker";

import Table from "./Table.vue";
import ConditionFilter from "./ConditionFilter.vue";
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";

const queryName = ref("");
const users = ref([]);

const displayUsers = computed(() => {
  if (queryName.value.length === 0) {
    return users.value;
  }

  return users.value.filter((user) => user.name.includes(queryName.value));
});

onMounted(() => {
  const usersArr = Array.from({ length: 10 }, (_, idx) => ({
    id: idx,
    avatar: faker.internet.avatar(),
    name: faker.internet.userName(),
    country: faker.location.country(),
    company: faker.company.bs(),
    role: faker.person.jobTitle(),
  }));

  users.value = usersArr;
});
</script>
