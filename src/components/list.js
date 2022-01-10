import { useState, useEffect } from "react";
import "../stylesheets/list.css";
import ListItem from "./list_item";
import Form from "./form";

export default function App() {
    // Created state variable to hold list of each item on travel checklist,
    // initializing it to empty array since travel checklist is empty to begin.
    const [list, setList] = useState([]);

    // Defined function to pass down to Form child component. Child will invoke
    // function, passing in object containing new item's information, and 
    // updateList function will set `list` state variable, triggering a re-render.
    const updateList = newItem => {
        setList([...list, newItem]);
    }

    // useEffect(() => {
    //     fetch("./data.json")
    //         .then(response => response.json())
    //         .then(data => setList(data))
    // }, [])

    return (
        <div className="list">
            <h1 className="list-title">Travel Checklist</h1>
            <Form updateList={updateList} />

            <table>
                {/* The first row of the table contains column headers. */}
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Packed</th>
                    </tr>
                </thead>
                {/* The list state variable will contain all items on the travel
                checklist. So we iterate through that list, mapping each item to
                its own row in the table, which I extracted into the ListItem component. 
                The item's name, number, and packed status are passed down as props. */}
                <tbody>
                    {
                        list.map(item => (
                            <ListItem key={item.name}
                                name={item.name}
                                number={item.number}
                                status={item.checked} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}