
function capitalizeWords(str) {
    const words = str.split(' ')
    const capitalizedWords = words.map(word => {
        if(word.length === 0){
         return word
        }
        if (word.length === 1){
            return word.toUpperCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1)
    })

    const result = capitalizedWords.join(' ');
    return result;
}
const inputString = "hola mundo";
const capitalizedString = capitalizeWords(inputString);
console.log(capitalizedString);
    




    