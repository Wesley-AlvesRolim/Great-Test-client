import { UsersListState } from "../types/UsersListState";
import { UserItem } from "./UserItem";

interface UserListProps {
  users: UsersListState;
}

export function UserTable({ users }: UserListProps) {
  return (
    <>
      {users.toShow?.length > 0 && (
        <section className="overflow-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="h-16 p-4 rounded-t-sm rounded-r-sm text-center bg-teal-600 text-white">
                <th className="px-1">Nome</th>
                <th className="px-1">CPF</th>
                <th className="px-1">RG</th>
                <th className="px-1">Data de Nascimento</th>
                <th className="px-1">Nome Da Mãe</th>
                <th className="px-1">Data de Cadastro</th>
              </tr>
            </thead>
            <tbody>
              {users.toShow.map((user) => (
                <UserItem key={user.cpf} data={user} />
              ))}
            </tbody>
          </table>
        </section>
      )}
    </>
  );
}
