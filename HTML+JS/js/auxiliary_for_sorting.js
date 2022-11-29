const get_pairs = function(options) {
    let pairs = {}
    for (let elem = 0; elem < options.length; elem++) {
        let content = options[elem].textContent.split('=')
        pairs[content[0]] = content[1]
    }
    return pairs
}

const get_key_by_value = function(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

export {get_pairs, get_key_by_value}
