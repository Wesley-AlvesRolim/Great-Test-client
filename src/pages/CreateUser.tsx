import { FormEvent, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../services/api";

export function CreateUser() {
  const [nameInput, setNameInput] = useState("");
  const [cpfInput, setCpfInput] = useState("");
  const [rgInput, setRgInput] = useState("");
  const [motherNameInput, setMotherNameInput] = useState("");
  const [birthdayInput, setBirthdayInput] = useState("");

  const navigate = useNavigate();

  const handleCreateUserSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await api.post("/user/create", {
      name: nameInput,
      cpf: cpfInput,
      rg: rgInput,
      birthday: birthdayInput,
      motherName: motherNameInput,
    });
    navigate("/");
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-100">
      <main className="w-full max-w-[800px] p-2 bg-white">
        <header className="my-8 flex">
          <Link to="/">
            <FaArrowLeft />
          </Link>
        </header>
        <section>
          <form
            className="flex flex-col justify-center"
            onSubmit={handleCreateUserSubmit}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <fieldset className="min-w-80">
                <label className="block font-bold" htmlFor="name">
                  Nome:
                </label>
                <input
                  className="w-full h-10 p-4 bg-gray-100 rounded-lg focus:outline-teal-400"
                  type="text"
                  id="name"
                  value={nameInput}
                  onChange={(event) => setNameInput(event.target.value)}
                />
              </fieldset>
              <fieldset className="min-w-80">
                <label className="block font-bold" htmlFor="cpf">
                  CPF:
                </label>
                <input
                  className="w-full h-10 p-4 bg-gray-100 rounded-lg focus:outline-teal-400"
                  type="text"
                  id="cpf"
                  value={cpfInput}
                  onChange={(event) => setCpfInput(event.target.value)}
                />
              </fieldset>
              <fieldset className="min-w-80">
                <label className="block font-bold" htmlFor="rg">
                  RG:
                </label>
                <input
                  className="w-full h-10 p-4 bg-gray-100 rounded-lg focus:outline-teal-400"
                  type="text"
                  id="rg"
                  value={rgInput}
                  onChange={(event) => setRgInput(event.target.value)}
                />
              </fieldset>
              <fieldset className="min-w-80">
                <label className="block font-bold" htmlFor="birthday">
                  Data de Nascimento:
                </label>
                <input
                  className="w-full h-10 p-4 bg-gray-100 rounded-lg focus:outline-teal-400"
                  type="date"
                  id="birthday"
                  value={birthdayInput}
                  onChange={(event) => setBirthdayInput(event.target.value)}
                />
              </fieldset>
              <fieldset className="min-w-80">
                <label className="block font-bold" htmlFor="motherName">
                  Nome da mãe:
                </label>
                <input
                  className="w-full h-10 p-4 bg-gray-100 rounded-lg focus:outline-teal-400"
                  type="text"
                  id="motherName"
                  value={motherNameInput}
                  onChange={(event) => setMotherNameInput(event.target.value)}
                />
              </fieldset>
            </div>
            <button className="w-40 h-10 mt-4 rounded-lg bg-teal-600 text-white font-bold flex items-center justify-center hover:scale-105 transition-transform">
              Enviar
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
