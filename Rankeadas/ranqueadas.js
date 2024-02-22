const calculaNivel = (victory, defeat) =>{
    
    let nivelheroi = ""
    const resultado = (victory - defeat)

    if(victory <= 10){
        nivelheroi = "Ferro"
    }else if(victory >= 11 && victory <= 20){
        nivelheroi = "Bronze"
    }else if(victory >= 21 && victory <= 50){
        nivelheroi = "Prata"
    }else if(victory >= 51 && victory <= 80){
        nivelheroi = "Ouro"
    }else if(victory>= 81 && victory <= 90){
        nivelheroi = "Diamante"
    }else if(victory >= 91 && victory <= 100){
        nivelheroi = "Lendário"
    }else if(victory >= 101){
        nivelheroi = "Imortal"
    }
    console.log(`O Herói tem saldo de ${victory} está no nível de ${nivelheroi}`)
    
}

calculaNivel(150,90)