import { useState } from "react";
import "../stylesheets/App.css";
import ItemForm from "./item_form";

export default function App() {
  const [list, setList] = useState([]);

  const handleSubmit = (name, number) => {
    const newItem = { "name": name, "number": number };
    setList(list.concat(newItem));
  };
  debugger
  return (
    <div>
      <h1>Travel Checklist</h1>
      <ul>
        {
          list.map(item => (
            <li key={item.name}>
              <p>{item.name}</p>
              <p>{item.number}</p>
            </li>
          ))
        }
      </ul>

      <ItemForm handleSubmit={handleSubmit} />
    </div>
  );
}