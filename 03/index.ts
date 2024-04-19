const tabuada=(numeros:number[]):string=>{
    let resuldado:string=""
    for (const n of numeros) {
        for (let i = 0; i <=10 ; i++) {
            resuldado+=`${n} x ${i} = ${n*i} \n`
            if (i===10) {
                resuldado+='---------- \n'
            }
        }
    }

    return resuldado
}

console.log(tabuada([1,2]));
