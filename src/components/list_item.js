import { useState } from "react";

export default function ListItem({ name, number, packed }) {
    // Created state variable to hold status of checkbox, initializing it to 
    // value of `packed` prop passed in from List component.
    const [checked, setChecked] = useState(packed);

    // Defined event handler to update `checked` state variable when checkbox 
    // is checked and unchecked, using bang (!) to toggle Boolean value.
    const updateChecked = event => setChecked(!checked);

    // ListItem component should render a single row (i.e., `tr` element) in the
    // travel checklist table.
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