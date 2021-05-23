export const capitalise = (s) => {
    if (typeof s !== 'string') return s
    return s.charAt(0).toUpperCase() + s.slice(1)
  }