import { Routes as RoutesReactRouter, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { User } from "./pages/User";
import { CreateUser } from "./pages/CreateUser";

export function Routes() {
  return (
    <RoutesReactRouter>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<User />} />
      <Route path="/user/create" element={<CreateUser />} />
    </RoutesReactRouter>
  );
}
