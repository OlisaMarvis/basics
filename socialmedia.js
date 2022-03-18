// Here we declare the function and perform initial divisions
function social(k) {
    let thousands = k/1000
    let millions = k/1000000
    let billions = k/1000000000
// Here we check the edge cases and make sure that no strings, decimals or numbers less than zero is fed into the program
    if (isNaN(k) || k < 0 || Number.isInteger(k) ===false){
        return ('invalid number, you can only have real number of people following you')
    }
    else{
        if(k.toString().length >= 4 && k.toString().length <= 6 && k % 1000 ===0) {
            result = thousands
            return (`You have ${thousands}k followers`)  //Using template strings
        } else if(k.toString().length >= 4 && k.toString().length <= 6 && k % 1000 !==0) {
            result = thousands
            return ('You have ' + result.toFixed(1) + 'k followers')
        } else if(k.toString().length >= 7 && k.toString().length <= 9 && k % 1000000 ===0) {
            result = millions
            return (`You have ${millions}m followers`)
        } else if(k.toString().length >= 7 && k.toString().length <= 9 && k % 1000000 !==0) {
            result = millions
            return ('You have ' + result.toFixed(1) + 'm followers')
        } else if(k.toString().length >=10 && k.toString().length <= 12 && k % 1000000000 ===0) {
            result = billions
            return (`You have ${billions}b followers`)
        } else if(k.toString().length >=10 && k.toString().length <= 12 && k % 1000000000 !==0) {
            result = billions
            return ('You have ' + result.toFixed(1) + 'b followers')
        } else if(k.toString().length >13) {
            return ('Your followers have exceeded the number of human beings on earth, we go leave this app for you')
        }
        else {
            return (`You have ${k} followers`) //Using template strings
        }
    }
}
console.log(social(9464549))