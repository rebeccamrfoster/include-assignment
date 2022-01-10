import { useState } from "react";

export default function Form({ updateList }) {
    // Created state variable to hold object containing information related to
    // item. Name is initialized to empty string. Number, which represents the
    // quantity, is initialized to 0. Checked, which represents whether or not
    // the item is packed, is initialized to false so it is unchecked upon
    // first render.
    const [item, setItem] = useState({ "name": "", number: 0, "checked": false });

    // Defined event handler to update `name`, `number`, and `checked` state 
    // variables.
    // Defined event handler to update `checked` state variable when checkbox is
    // checked and unchecked, using bang (!) to toggle Boolean value.
    const updateItem = event => {
        // The event target is the element that triggers the event. In the case
        // of the `name` and `number` fields, it is an input element so its 
        // value is the text that the user types in.
        const { name, value } = event.target;
        if (name === "name" || name === "number") {
            setItem(prevItem => ({
                ...prevItem,
                [name]: value
            }))
        }
        // Created separate condition for `checked` state variable. When checkbox
        // is checked or unchecked, the value of the Boolean will be toggled
        // using bang (!).
        else if (name === "checked") {
            // Created new object from information contained in `item` state variable.
            const newItem = Object.assign({}, item);
            newItem.checked = !newItem.checked;
            setItem(newItem);
        }
    };

    const handleSubmit = event => {
        // Invoked updateList function passed in from List parent component,
        // passing in new item object so it can be appended to the travel checklist.
        updateList(item);
        // Upon submission of form, inputs should clear, so reset state variables 
        // to default values. User can begin typing out next item.
        setItem({ "name": "", number: 0, "checked": false });
    }

    return (
        <form className="list-form">
            {/* Added onChange property to input element so its respective
                event handler is called each time user types or deletes
                character in the field. */}
            <label>Item
                <input type="text" name="name" value={item.name}
                    onChange={updateItem} />
            </label>
            <label>Quantity
                <input type="number" name="number" value={item.number}
                    onChange={updateItem} />
            </label>
            {/* Added checked property, using `checked` state variable and 
                ternary logic to determine whether checkbox should be checked. */}
            <label>Packed
                <input type="checkbox" name="checked"
                    checked={item.checked ? "checked" : ""}
                    onChange={updateItem}
                    className="list-form-check" />
            </label>

            {/* Added onClick property so when user clicks submit (or 
                presses enter), handleSubmit function is invoked. */}
            <input type="submit" value="Add New Item"
                onClick={handleSubmit}
                className="list-form-btn" />
        </form>
    )
}