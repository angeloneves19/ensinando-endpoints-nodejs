"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.byUser = void 0;
const Express = require('express');
const app = Express();
const db = require('./db');
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    const items = db.findAll();
    res.send(items);
});
const byUser = (id) => {
    app.get('/creatUsers', (req, res) => {
        const user = {
            id: id,
            name: "Joana",
            email: "j.ana@gmail.com",
            password: "abc.123#"
        };
        const createdItem = db.create(user, 1);
        res.send(createdItem);
    });
};
exports.byUser = byUser;
app.get('/getUserById', (req, res) => {
    const id = 1;
    const item = db.findById(id);
    res.send(item);
});
app.get('/updateByIdUser', (req, res) => {
    const id = 2;
    const getUser = (0, exports.byUser)(1);
    const updatedItem = db.updatedById(id, getUser);
    console.log(updatedItem);
});
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
    console.log("Esse servidor está rodando em http://localhost:3030");
});
