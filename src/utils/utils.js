export const capitalise = (s) => {
    if (typeof s !== 'string') return s
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const isPositiveInteger = (str) =>  {
    const n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
}