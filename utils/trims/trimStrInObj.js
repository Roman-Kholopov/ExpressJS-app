function trimStrInObj(obj) {
    const trimObj = {}
    for (let key in obj) {
        trimObj[key] = obj[key].trim();
    }
    return trimObj;
}

module.exports = trimStrInObj;