import { useEffect, useState } from "react";
import { Search } from "../components/Search";
import { UserTable } from "../components/UserTable";
import { api } from "../services/api";
import { UsersListState } from "../types/UsersListState";

const usersMock = [
  {
    id: 1,
    name: "Wesley",
    cpf: "046.659.583-67",
    rg: "0000000000-3",
    birthday: new Date(),
    motherName: "Bete",
    registerDate: new Date(),
  },
  {
    id: 2,
    name: "Wesley",
    cpf: "065.359.243-21",
    rg: "0000000000-3",
    birthday: new Date(),
    motherName: "Bete",
    registerDate: new Date(),
  },
  {
    id: 3,
    name: "Wesley",
    cpf: "098.656.643-63",
    rg: "0000000000-3",
    birthday: new Date(),
    motherName: "Bete",
    registerDate: new Date(),
  },
  {
    id: 4,
    name: "Wesley",
    cpf: "023.652.613-09",
    rg: "0000000000-3",
    birthday: new Date(),
    motherName: "Bete",
    registerDate: new Date(),
  },
];

export function Home() {
  const [usersList, setUsersList] = useState<UsersListState>({
    toShow: [],
    initialValues: [],
  });

  const fetchUsers = async () => {
    try {
      setUsersList({
        toShow: usersMock,
        initialValues: usersMock,
      });
      const response = await api.get("/user/list");
      console.log(response.data);
      //setUsersList( response.data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-100">
      <main className="w-full max-w-[800px] p-2 bg-white">
        <header className="my-8 flex justify-end">
          <Search usersList={usersList} setUsersList={setUsersList} />
        </header>
        <UserTable users={usersList} />
      </main>
    </div>
  );
}
