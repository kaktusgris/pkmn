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
    const regex = '[' + ignored.split('').join(',') + ']';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.replace(regex, '');
    return chars.charAt(randomInterval(chars.length));
}

export const randomLetters = (numberOfLetters) => {
    let letters = '';
    for (let i = 0; i < numberOfLetters; i++) {
        letters += randomLetter(letters);
    }
    return letters;
}