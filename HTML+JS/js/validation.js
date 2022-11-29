const validator = function (str) {
    // return true when string suits to validation requare (<NAME>=<VALUE>). Names and Values can contain only alpha-numeric characters.
    if (str.includes('=')){
        str = str.split('=')
        return (str.length == 2 && str.every(elem => /^[a-zA-Zа-яёА-ЯЁ\d ]+$/.test(elem.trim())))
    }
}

const ignore_spaces = function (str) {
    // delete spaces
    str = str.split('=')
    return str[0].trim()+'='+str[1].trim()
}

const check_for_identical_name = function (content, existing_names) {
    content = ignore_spaces(content).split('=')
    return !existing_names.includes(content[0])
}

export {validator, ignore_spaces, check_for_identical_name}