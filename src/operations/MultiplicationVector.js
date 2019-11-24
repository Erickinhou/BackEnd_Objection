soma = (vector1, vector2) => {
    let vector3 = []
    for (let num in vector1){
        vector3.push(vector1[num]*vector2[num])
    }
    return vector3
}

module.exports = soma