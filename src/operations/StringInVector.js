convert = (string) => {
    let test = 0, test2 = 0, test3 = 0, separador = 1
    let stringtest = '', valortest = ''
    let key = [], valorID = [], valorQNT = []

    for(let num in string){
       if (string[num] === '{'){
          //array.push(parseInt(string[num]))
         test = 1
       }
       else if((test === 1)&&(string[num] !=='}')){

          if((string[num]==='"')&&(test2 === 0)){
            test2 = 1
          }
          else if((test2 === 1)&&(string[num] !=='"')&&(string[num] !==' ')){
            stringtest += string[num]
          }
          else if((test2 === 1)&&(string[num] ==='"')){
             test2 = 0
             key.push(stringtest)
             string = ''
          }

          if((string[num]===':')&&(test2 === 0)){
             test3 = 1
          }
          else if((string[num] !==' ')&&(string[num] !==',')&&(test3 === 1)){
            valortest += string[num]
          }
          else if((string[num] !==' ')&&(string[num] ===',')&&(test3 === 1)){
            if (separador==1){
            valorID.push(parseInt(valortest))
            }
            else{
               valorQNT.push(parseInt(valortest))
            }
            test3 = 0
            separador *= -1
          }
       }
       else if((test === 1)&&(string[num] ==='}')){
         return {id: valorID, qnt: valorQNT}
       }
    }
}

console.log(JSON.parse('[{"id":2,"qtd":3},{"id":1,"qtd":1}]'))

module.exports = convert