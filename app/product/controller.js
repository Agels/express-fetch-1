const connection = require('../../config/mysql');

const index = (req, res ) => {
    const { search} = req.query;
    let query = {};

    if(search){
        query = {
            sql:"SELECT * FROM products WHERE name like ?",
            value: [`%${search}%`],
        };
    } else {
        query = {
            sql: "SELECT * FROM products "
        }
    }
    connection.query(query, _response(res));
}

const detail = (req, res) => {
    const id = req.params.id;

    connection.query({
        sql : 'SELECT * FROM products WHERE id =? ', 
        values:[id]
    }, _response(res))
}

const store = (req, res) => {
    const {id_user, name, price, stock, status} = req.body;
    console.log(id_user, name, price, stock, status)
    connection.query({
        sql : "INSERT INTO products(id_user, name, price, stock, status) VALUES (?, ?, ?, ?, ?)",
        values:[
            id_user,
            name,
            price,
            stock,
            status
        ]
    },   _response(res))
}

const update = (req, res) => {
    const {id_user, name, price, stock, status} = req.body;
    const id = req.params.id
    connection.query({
        sql : "UPDATE products SET id_user = ?, name = ? , price = ? , stock = ?, status = ? WHERE id = ? ",
        values:[
            id_user,
            name,
            price,
            stock,
            status,
            id
        ]
    },   _response(res))
}

const destroy = (req, res) => {
    const id = req.params.id;
    connection.query({
        sql : "DELETE FROM products WHERE id = ?",
        values:[id]
    }, _response(res))
}

    const _response = (res) => {
        return (err, result) => {
            if(err){
                res.send({
                    status:"failed",
                    Response:err
                });
            } else {
                res.send({
                    status:"success",
                    Response:result
                });
            }
        }
    }


module.exports = {
    index,
    store,
    update,
    destroy,
    detail
}