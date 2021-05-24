export const randomInterval = (length) => {
    const number = Math.floor(Math.random() * (length) * 1.1);
    if (number >= length) {
        return randomInterval(length);
    }
    return number;
}

export const randomFromList = (list) => {
    return list[randomInterval(list.length)]
}

const randomLetter = (ignored = '') => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        .filter(c => !ignored.includes(c)).join('');
    if (chars.length === 0) return '.';
    return chars.charAt(randomInterval(chars.length));
}

export const randomLetters = (numberOfLetters) => {
    let letters = '';
    for (let i = 0; i < numberOfLetters; i++) {
        letters += randomLetter(letters);
    }
    return letters;
}