// Import constants
import {
    input,
    add_button,
    delete_button,
    sort_by_name_button,
    sort_by_value_button,
    xml_button
} from "./constants.js"

// Import functions
import {
    add_pair,
    delete_func,
    sort_by_name,
    sort_by_value,
    show_xml
} from "./functions.js"


// Click to Add button
add_button.addEventListener('click', event => {
    add_pair()
})
// Click Enter in input area
input.addEventListener('keypress', event => {
    if (event.key === "Enter") {
        add_pair()
    }
})

// Click to Delete button
delete_button.addEventListener('click', event => {
    delete_func()
})

// Click to Sort by Name button
sort_by_name_button.addEventListener('click', event => {
    sort_by_name()
})

// Click to Sort by Value button
sort_by_value_button.addEventListener('click', event => {
    sort_by_value()
})

// Click to Sort by Value button
xml_button.addEventListener('click', event => {
    show_xml()
})