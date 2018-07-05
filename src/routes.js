import Note from "./pages/Note";
import List from "./pages/List";

export default [
  { path: "/", component: List },
  { path: "/note/:id", component: Note }
];
