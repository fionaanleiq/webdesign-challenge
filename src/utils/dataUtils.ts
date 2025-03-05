const toProperCase = (str: string) => {
    return str[0] + str.slice(1).toLowerCase();
}

export {
    toProperCase,
}