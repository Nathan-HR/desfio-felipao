var nomeHeroi = prompt("Insira o Nome do Heroi aqui: ") 

var poderHeroi = parseInt(prompt(
    `Digite o XP do ${nomeHeroi} Entre 1.000 e 10.001` 
))

if(poderHeroi === 1000){
    console.log(`${nomeHeroi} é nivel Ferro`)
}else if(poderHeroi >= 1001 && poderHeroi <= 2000){
    console.log(`${nomeHeroi} está no nível Bronze`)
}else if(poderHeroi >= 2001 && poderHeroi <= 5000){
    console.log(`${nomeHeroi} está no nível Prata`)
}else if(poderHeroi >= 5001 && poderHeroi <= 7000){
    console.log(`${nomeHeroi} está no nível Ouro`)
}else if(poderHeroi >= 7001 && poderHeroi <= 8000){
    console.log(`${nomeHeroi} está no nível Platina`)
}else if(poderHeroi >= 8001 && poderHeroi <= 9000){
    console.log(`${nomeHeroi} está no nível Ascendente`)
}else if(poderHeroi >= 9001 && poderHeroi <= 10000){
    console.log(`${nomeHeroi} está no nível Imortal`)
}else if(poderHeroi >= 10001){
    console.log(`${nomeHeroi} está no nível Radiante`)
}

