import { useState } from "react";
import "../stylesheets/list.css";
import ListItem from "./list_item";

export default function App() {
    // Created state variable to hold name of item, initializing it to empty string.
    const [name, setName] = useState("");
    // Created state variable to hold quantity, initializing it to 0.
    const [number, setNumber] = useState(0);
    // Created state variable to hold status of checkbox, initializing it to 
    // false so it will be uncheked upon first render.
    const [checked, setChecked] = useState(false);
    // Created state variable to hold list of each item on travel checklist,
    // initializing it to empty array since travel checklist is empty to begin.
    const [list, setList] = useState([]);

    // Defined event handlers to update `name` and `number` state variables.
    // The event target is the element that triggers the event. In this case,
    // it is an input element, so its value is the text that the user types in. 
    const updateName = event => setName(event.target.value);
    const updateNumber = event => setNumber(event.target.value);
    // Defined event handler to update `checked` state variable when checkbox is 
    // checked and unchecked, using bang (!) to toggle Boolean value.
    const updateChecked = event => setChecked(!checked);

    // Upon submission of form, handleSubmit function is invoked.
    const handleSubmit = event => {
        // Created object to represent new item that user just typed out
        // and submitted, taking values from state variables.
        const newItem = { "name": name, "number": number, "checked": checked };
        // list.concat(newItem) will return the existing list with the newItem
        // appended, whereas list.push(newItem) would return the pushed item. 
        // Then reset the value of the `list` state variable to trigger re-render.
        setList(list.concat(newItem));
        // Upon submission of form, inputs should clear, so reset state variables 
        // to default values. User can begin typing out next item.
        setName("");
        setNumber(0);
        setChecked(false);
    };

    return (
        <div className="list">
            <h1 className="list-title">Travel Checklist</h1>
            <form className="list-form">
                {/* Added onChange property to input element so its respective
                event handler is called each time user types or deletes
                character in the field. */}
                <label>Item
                    <input type="text" value={name} onChange={updateName} />
                </label>
                <label>Quantity
                    <input type="number" value={number} onChange={updateNumber} />
                </label>
                {/* Added checked property, using `checked` state variable and 
                ternary logic to determine whether checkbox should be checked. */}
                <label>Packed
                    <input type="checkbox" checked={checked ? "checked" : ""}
                        onChange={updateChecked} className="list-form-check" />
                </label>

                {/* Added onClick property so when user clicks submit (or 
                presses enter), handleSubmit function is invoked. */}
                <input type="submit" value="Add New Item"
                    onClick={handleSubmit} className="list-form-btn" />
            </form>

            <table>
                {/* The first row of the table contains column headers. */}
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Packed</th>
                </tr>
                {/* The list state variable will contain all items on the travel
                checklist. So we iterate through that list, mapping each item to
                its own row in the table, which I extracted into the ListItem component. 
                The item's name, number, and packed status are passed down as props. */}
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