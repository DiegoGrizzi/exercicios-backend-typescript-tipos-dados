const soletrar=(palavra:string):string=>{

    const letraSeparada:string[]=[]

for (let i = 0; i < palavra.length; i++) {
   letraSeparada.push( palavra[i]);
    
}

return `${letraSeparada.join('-')}. Tem um total de ${palavra.length} letras.`
}

console.log(soletrar('Diego'));
