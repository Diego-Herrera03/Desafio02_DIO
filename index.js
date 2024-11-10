function exibir_nivel(vitorias){
    if (vitorias < 10){
       return "Ferro"

    }else if (vitorias >= 11 && vitorias <= 20){
        return "Bronze"

    }else if (vitorias >= 21 && vitorias <= 50){
        return "Prata"

    }else if (vitorias >= 51 && vitorias <= 80){
        return "Ouro"

    }else if (vitorias >= 81 && vitorias <= 90){
        return "Diamante"

    }else if (vitorias >= 91 && vitorias <= 100){
        return "Lendário"

    }else if (vitorias >= 101){
        return "Imortal"

    }else{
        return "Indefinido"
    }
}

let vitorias      = 50
let derrotas      = 50
let saldoVitorias = vitorias - derrotas
let nivel         = exibir_nivel(vitorias)

console.log(`O Herói tem o saldo de ${saldoVitorias} e está no nível ${nivel}`)
