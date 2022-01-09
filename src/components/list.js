import { useState } from "react";
import "../stylesheets/list.css";
import ListItem from "./list_item";

export default function App() {
    const [list, setList] = useState([]);
    const [name, setName] = useState("");
    const [number, setNumber] = useState(0);
    const [checked, setChecked] = useState(false);

    const updateName = event => setName(event.target.value);
    const updateNumber = event => setNumber(event.target.value);
    const updateChecked = event => setChecked(!checked);

    const handleSubmit = event => {
        const newItem = { "name": name, "number": number, "checked": checked };
        setList(list.concat(newItem));
        setName("");
        setNumber(0);
        setChecked(false);
    };

    return (
        <div className="list">
            <h1 className="list-title">Travel Checklist</h1>
            <form className="list-form">
                <label>Item
                    <input type="text" value={name} onChange={updateName} />
                </label>
                <label>Quantity
                    <input type="number" value={number} onChange={updateNumber} />
                </label>
                <label>Packed
                    <input type="checkbox" checked={checked ? "checked" : ""}
                        onChange={updateChecked} className="list-form-check" />
                </label>

                <input type="submit" value="Add New Item"
                    onClick={handleSubmit} className="list-form-btn" />
            </form>

            <table>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Packed</th>
                </tr>
                {
                    list.map(item => <ListItem name={item.name}
                        number={item.number}
                        packed={item.checked} />
                    )
                }
            </table>
        </div>
    );
}