export const transformString = (s : string) : string => {
    if (s.length > 1) {
        const firstLetter : string = s.slice(0, 1).toUpperCase();
        const rest : string = s.slice(1).replace(/_/gi, " ")
        return firstLetter + rest;
    } else {
        return s.toUpperCase();
    }
}