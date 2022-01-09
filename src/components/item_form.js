import { useState } from "react";

export default function ItemForm({ handleSubmit }) {
    const [name, setName] = useState("");
    const [number, setNumber] = useState(0);

    const updateName = event => setName(event.target.value);
    const updateNumber = event => setNumber(event.target.value);

    return (
        <div>
            <label>Add New Item:</label>
            <form onSubmit={() => handleSubmit(name, number)}>
                <input type="text" value={name} onChange={updateName} />
                <input type="number" value={number} onChange={updateNumber} />
                <input type="submit" onClick={() => handleSubmit(name, number)} />
            </form>
        </div>
    )
}