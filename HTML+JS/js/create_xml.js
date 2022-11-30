const create_xml = function (pairs_obj) {
    // Create xml text
    // Create head xml
    let xml = "<?xml version=\"1.0\" standalone=\"yes\" ?>\n<pairs>\n"
    for (const key in pairs_obj) {
        // Put every pair to tags <name> and <value>
        xml = xml + "   <name>" + key + "</name>\n   <value>" + pairs_obj[key] + "</value>\n"
    }
    // Close tag
    xml = xml + "</pairs>"

    return xml
}

const save_to_pc = function (str) {
    // Contain text into blob
    let blob = new Blob([str], {
        type: "text/xml"
    })
    // Create <a> for attribute "download"
    let link = document.createElement("a")
    // Contain blob with data into link
    link.setAttribute("href", URL.createObjectURL(blob))
    link.setAttribute("download", Date.now() + ".xml")
    // Simulate click for download
    link.click()
}

export {
    create_xml,
    save_to_pc
}