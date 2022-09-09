import { FormEvent, useState } from "react";
import { UsersListState } from "../types/UsersListState";

interface SearchProps {
  usersList: UsersListState;
  setUsersList: (usersList: UsersListState) => void;
}

type SelectInputTypes = "cpf" | "rg";

export function Search({ usersList, setUsersList }: SearchProps) {
  const [selectInputValue, setSelectInputValue] =
    useState<SelectInputTypes>("cpf");
  const [searchInputValue, setSearchInputValue] = useState("");

  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const onInputSelectChange = (inputValue: SelectInputTypes) => {
    setSelectInputValue(inputValue);
    setSearchInputValue("");
  };

  const onInputSearchChange = (inputValue: string) => {
    setSearchInputValue(inputValue);
    if (inputValue === "") {
      setUsersList({
        ...usersList,
        toShow: usersList.initialValues,
      });
      return;
    }

    const regex = new RegExp(`\\b${inputValue}[A-Za-z0-9]*\\b`);

    const matchWithRegexExpression = (textToMatch: string) =>
      (textToMatch || "").match(regex) !== null;

    const foundUsers = usersList.initialValues.filter((user) =>
      matchWithRegexExpression(user[selectInputValue])
    );

    setUsersList({
      ...usersList,
      toShow: foundUsers.length > 0 ? foundUsers : usersList.initialValues,
    });
  };

  return (
    <form
      className="w-56 h-12 flex justify-between"
      onSubmit={handleSearchSubmit}
    >
      <select
        onChange={(event) =>
          onInputSelectChange(event.target.value as SelectInputTypes)
        }
        value={selectInputValue}
      >
        <option value="cpf">CPF</option>
        <option value="rg">RG</option>
      </select>

      <label>
        <input
          className="w-40 h-12 p-2 rounded-lg bg-gray-100"
          type="search"
          value={searchInputValue}
          onChange={(event) => onInputSearchChange(event.target.value)}
        />
      </label>
    </form>
  );
}
