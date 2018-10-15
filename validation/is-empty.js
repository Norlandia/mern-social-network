const isEmpty = (value) => 
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof vlalue === 'string' && value.trim().length === 0);

module.exports = isEmpty;
