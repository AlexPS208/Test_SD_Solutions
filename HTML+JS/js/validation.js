const validator = function (str) {
    // return true when string suits to validation requare (<NAME>=<VALUE>)
    if (str.includes('=')){
        str = str.split('=')
        return (str.length == 2 && str.every(elem => elem.trim()))
    }
}

const ignore_spaces = function (str) {
    // delete spaces
    str = str.split('=')
    return str[0].trim()+'='+str[1].trim()
}


export {validator, ignore_spaces}