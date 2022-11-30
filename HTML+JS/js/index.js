import {
    validator,
    check_for_identical_name,
    ignore_spaces
} from "./validation.js"
import {
    get_pairs,
    get_key_by_value
} from "./auxiliary_for_sorting.js"
import {
    create_xml,
    save_to_pc
} from "./create_xml.js"

// Querry elements
const input = document.getElementById("input")
const text_area = document.getElementById("text_area")
// Buttons
const add_button = document.getElementById("add_but")
const delete_button = document.getElementById("del_but")
const sort_by_name_button = document.getElementById("sort_by_name_but")
const sort_by_value_button = document.getElementById("sort_by_value_but")
const xml_button = document.getElementById("show_xml_but")

// Function for adding pair to text area
const add_pair = function () {
    let content = input.value
    // If value is correct
    if (validator(content)) {
        let names = Object.keys(get_pairs(text_area.options))
        // If name of pair doesn't exist already
        if (check_for_identical_name(content, names)) {
            // Add element to text area
            let opt = document.createElement("option")
            opt.textContent = ignore_spaces(content)
            text_area.appendChild(opt)
        } else {
            // Exist name
            alert("This name already exist")
        }
    } else {
        // Incorrect pair
        alert("Inappropriate format of pair")
    }
    // Clear input
    input.value = ""
}

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
delete_button.onclick = function () {
    // Get array of options in select
    let options = text_area.options
    // Get index of first selected element
    let selected_value_index = options["selectedIndex"]
    // While selected element exists
    while (selected_value_index != -1) {
        // Delete selected element
        text_area.removeChild(options[selected_value_index])
        // Refresh index of first selected elem
        selected_value_index = options["selectedIndex"]
    }
}


// Click to Sort by Name button
sort_by_name_button.onclick = function () {
    // Get array of options in select
    let options = text_area.options
    let pairs = get_pairs(options)
    let new_options = []

    // Create new options in sort order by names
    Object.keys(pairs).sort().forEach(function (key) {
        let option = document.createElement("option")
        option.textContent = key + '=' + pairs[key]
        new_options.push(option)
    })

    // Remowe old options
    for (let i = options.length - 1; i >= 0; i--) text_area.removeChild(options[i])
    // Insert new options
    new_options.forEach(option => {
        text_area.appendChild(option)
    })
}


// Click to Sort by Value button
sort_by_value_button.onclick = function () {
    // Get array of options in select
    let options = text_area.options
    let pairs = get_pairs(options)
    let new_options = []

    // Create new options in sort order by values
    Object.values(pairs).sort().forEach(function (value) {
        let option = document.createElement("option")
        option.textContent = get_key_by_value(pairs, value) + "=" + value
        delete pairs[get_key_by_value(pairs, value)]
        new_options.push(option)
    })

    // Remowe old options
    for (let i = options.length - 1; i >= 0; i--) text_area.removeChild(options[i])
    // Insert new options
    new_options.forEach(option => {
        text_area.appendChild(option)
    })
}


// Click to Sort by Value button
xml_button.onclick = function () {
    // Pack pairs object
    let options = text_area.options
    let pairs = get_pairs(options)
    // Create xml text
    let xml = create_xml(pairs)
    // Save this to pc
    save_to_pc(xml)
}