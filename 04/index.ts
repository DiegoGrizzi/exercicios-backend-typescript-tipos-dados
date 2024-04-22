type Etiqueta={
    produto:string,
    lote:number,
    ano:number,
    qtd:number

}

const produto:Etiqueta={
    
        produto: 'CPU Dual Core 3.0GHZ',
        lote: 321,
        ano: 2022,
        qtd: 0
    
}

const gerarEtiqueta=(info:Etiqueta):string[]|string=>{
const etiquetas:string[]=[]

const {lote, ano, qtd}=info
const numeroGerado=(numero:number):string=>numero.toString().padStart(3,"0")

if (qtd>=1) {
    for (let i = 1; i <= qtd ; i++) {
        const gerarNumero=numeroGerado(i)
        const etiqueta=`${lote}-${ano}-${gerarNumero}`;
        etiquetas.push(etiqueta)
        
    }

    return etiquetas
}
    
return `Informe a quantidade desejada.`


}



console.log(gerarEtiqueta(produto));

