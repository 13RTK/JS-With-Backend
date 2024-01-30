import { faker } from "@faker-js/faker";
import supabase from "./supabase";

export const getFakeUser = () => {
  return {
    id: Date.now(),
    avatar: faker.image.avatar(),
    name: faker.internet.userName(),
    country: faker.location.country(),
    company: faker.company.buzzPhrase(),
    role: faker.person.jobTitle(),
  };
};

export const getUsers = async () => {
  let { data: employee } = await supabase.from("employee").select("*");

  return employee;
};

export const insertUser = async (user) => {
  const { data } = await supabase.from("employee").insert([user]).select();

  return data;
};

export const updateUserField = async (newUser) => {
  await supabase
    .from("employee")
    .update({ ...newUser })
    .eq("id", newUser.id)
    .select();
};

export const deleteUserById = async (id) => {
  await supabase.from("employee").delete().eq("id", id);
};
