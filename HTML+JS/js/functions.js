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

import {
    input,
    text_area
} from "./constants.js"



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

// Delete pair function
const delete_func = function () {
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


// Function for sorting by Name parameter
const sort_by_name = function () {
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


// Function for sorting by Value parameter
const sort_by_value = function () {
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

// Function for create and download xml file, based on list's data
const show_xml = function () {
    // Pack pairs object
    let options = text_area.options
    let pairs = get_pairs(options)
    // Create xml text
    let xml = create_xml(pairs)
    // Save this to pc
    save_to_pc(xml)
}


export {
    add_pair,
    delete_func,
    sort_by_name,
    sort_by_value,
    show_xml
}