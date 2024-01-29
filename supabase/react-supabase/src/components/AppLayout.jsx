import Footer from "./Footer";
import Navbar from "./Navbar";
import ConditionFilter from "./ConditionFilter";
import Table from "./Table";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

const AppLayout = () => {
  const [queryName, setQueryName] = useState("");
  const [users, setUsers] = useState([]);

  const displayUsers = queryName
    ? users.filter((user) => user.name.includes(queryName))
    : users;

  useEffect(() => {
    const usersArr = Array.from({ length: 10 }, (_, idx) => ({
      id: idx,
      avatar: faker.image.avatar(),
      name: faker.internet.userName(),
      country: faker.location.country(),
      company: faker.company.buzzPhrase(),
      role: faker.person.jobTitle(),
    }));

    setUsers(usersArr);
  }, []);

  return (
    <>
      <Navbar />
      <div className="divider"></div>

      <div className="text-center my-3">
        <ConditionFilter onSearch={(value) => setQueryName(value)} />
        <Table displayUsers={displayUsers} />
      </div>

      <Footer />
    </>
  );
};
export default AppLayout;
