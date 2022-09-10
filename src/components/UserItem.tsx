import { useNavigate } from "react-router-dom";
import { User } from "../types/User";

interface UserItemProps {
  data: User;
}

export function UserItem({ data }: UserItemProps) {
  const navigate = useNavigate()
  const formattedData = {
    ...data,
    birthday: new Date(data.birthday).toLocaleString("pt-BR", {
      dateStyle: "short",
    }),
    registerDate: new Date(data.registerDate).toLocaleString("pt-BR", {
      dateStyle: "short",
    }),
  };
  return (
    <tr
      onClick={()=> navigate(`/user/${data.cpf}`)}
      className="h-12 p-2 text-center hover:bg-teal-400 hover:text-white cursor-pointer transition-colors table-row"
    >
      <td className="px-1 align-middle">{formattedData.name}</td>
      <td className="px-1 align-middle">{formattedData.cpf}</td>
      <td className="px-1 align-middle">{formattedData.rg}</td>
      <td className="px-1 align-middle">{formattedData.birthday}</td>
      <td className="px-1 align-middle">{formattedData.motherName}</td>
      <td className="px-1 align-middle">{formattedData.registerDate}</td>
    </tr>
  );
}
