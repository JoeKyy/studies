const prod1 = {}
prod1.nome = 'Celular'
prod1.preco = 450
prod1['Desconto Legal'] = 0.40 // evitar

console.log(prod1)

const prod2 = {
  nome: 'Camisa',
  preco: 75.99,
  obj: {
    teste: 1,
    obj: {
      teste: 2
    }
  }
}

//JSON
'{ "nome": "Camisa", "preco": 75.99 }'

console.log(prod2)
