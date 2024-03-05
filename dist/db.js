"use strict";
const db = () => {
    const database = [];
    const message = "nao foi possivel encontrar, informacao invalida!";
    const getIndice = (id) => database.findIndex(user => user.id === id);
    return {
        findById: (id) => {
            const user = database.find(user => user.id == id);
            if (!user) {
                message: 'informacao nao encontrada';
            }
            return user;
        },
        findAll: () => database,
        create: (user) => {
            const newUser = {
                id: database.length + 1,
                name: user.name,
                email: user.email,
                password: user.password
            };
            database.push(newUser);
            return newUser;
        },
        updateById: (id, user) => {
            const { name, email, password } = user;
            const indice = getIndice(id);
            if (indice >= 0) {
                const actualUser = database[indice];
                actualUser.name = name ? name : actualUser.name;
                actualUser.email = email ? email : actualUser.email;
                actualUser.password = password ? password : actualUser.password;
                database[indice] = actualUser;
                return { user: actualUser };
            }
            return { message };
        },
        remove: (id) => {
            const indice = getIndice(id);
            if (indice >= 0) {
                database.splice(indice, 1);
                return { message: "removido com sucesso! " };
            }
            return { message };
        }
    };
};
module.exports = db();
