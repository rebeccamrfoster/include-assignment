import { useState } from "react";

export default function ListItem({ name, number, packed }) {
    const [checked, setChecked] = useState(packed);

    const updateChecked = event => setChecked(!checked);

    return (
        <tr>
            <td>{name}</td>
            <td>{number}</td>
            <td>
                <input type="checkbox" onChange={updateChecked} checked={checked} />
            </td>
        </tr>
    )
}