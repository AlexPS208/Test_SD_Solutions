import {
    validator,
    ignore_spaces
} from './validation.js';


// Querry elements
const input = document.getElementById("input")
const text_area = document.getElementById("text_area")
// Buttons
const add_button = document.getElementById("add_but")
const delete_button = document.getElementById("del_but")
const sort_by_name_button = document.getElementById("sort_by_name_but")
const sort_by_value_button = document.getElementById("sort_by_value_but")
const xml_button = document.getElementById("show_xml_but")



// Array for text area values
let text_area_values = []


// Click to Add button
add_button.onclick = function () {
    // If value is correct
    if (validator(input.value)) {
        // Add element to text area
        let opt = document.createElement("option")
        opt.textContent = ignore_spaces(input.value)
        text_area.appendChild(opt)

        // Add element to array
        text_area_values.push(opt)
    } else {
        // Incorrect value
        alert("Inappropriate value")
    }
    // Clear input
    input.value = ""
}


// Click to Delete button
delete_button.onclick = function () {
    // Get array of options in select
    let values = text_area.options
    // Get index of first selected element
    let selected_value_index = values["selectedIndex"]
    // While selected element exists
    while (selected_value_index != -1) {
        // Delete selected element
        text_area.removeChild(values[selected_value_index])
        // Refresh index of first selected elem
        selected_value_index = values["selectedIndex"]
    }
}