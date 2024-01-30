import { faker } from "@faker-js/faker";

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
