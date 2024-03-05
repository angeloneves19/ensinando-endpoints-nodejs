const Express = require('express')
const app = Express()
const db = require('./db')

app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))

app.get('/', (req:any, res:any) => {
  const items = db.findAll()
  res.send(items)
})

  app.get('/creatUsers', (req:any, res:any) => {
    const user = {
      id: 1,
      name: "Joana",
      email: "j.ana@gmail.com",
      password: "abc.123#"
  }
  const createdItem = db.create(user)
  res.send(createdItem)
  })

app.get('/getUserById', (req:any, res:any) => {
  const id = 1
  const item = db.findById(id)
  res.send(item)
})

app.get('/updateByIdUser', (req:any, res:any) => {
const id = 1
const user = {
    id: 2,
    name: "Joana Maria",
    email: "jmaria@gmail.com",
    password: "123#abc"
}
const updatedItem = db.updateById(id, user)
res.send(updatedItem)
 })

// Exercicio de CRUD
// Utilizando as 5 funções encontradas em db, crie 5 endpoints para o recurso "usuario".
// (Leia em README para saber mais sobre as funções)
/* 
    O recurso usuario deve ter as seguintes propriedades com seus respectivos tipos:
    { 
        name: String, 
        email: String, 
        password: String 
    }
*/

app.listen(3030, () => {
  console.log("Esse servidor está rodando em http://localhost:3030")
})

export {}