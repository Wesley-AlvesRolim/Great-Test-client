import { Routes as RoutesReactRouter, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { User } from "./pages/User";

export function Routes() {
  return (
    <RoutesReactRouter>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<User />} />
    </RoutesReactRouter>
  );
}
