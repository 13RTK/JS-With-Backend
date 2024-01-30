import { faker } from "@faker-js/faker";

const BASE_URL = "";

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

const insertFakeUser = async () => {
  const fakeUser = getFakeUser();

  // Fetch API to insert
};
