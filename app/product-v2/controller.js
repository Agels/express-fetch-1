const Product = require('./model');

const index = async(req, res) => {
   const result = await Product.findAll(); 
   res.send({
       status:'success',
       data:result
   })
}

const detail = async(req, res) => {
    const id = req.params.id
    const result = await Product.findOne({
        where: {
            id : id
        }
    })
    res.send({
        status: 'success',
        data:result
    })
}

const create = async(req, res) => {
    const {id_user, name, price, stock, status} = req.body;
    try{
        await Product.sync();
      const result =  await Product.create({id_user, name, price, stock, status});
      res.send({
          status:'success',
          data:result
      })
    } catch(err) {
    _response(res);
    }
} 


const update = async(req, res) => {
    const {id_user, name, price, stock, status} = req.body;
    const id = req.params.id;

    try {
    const result = await Product.update({
        id_user : id_user,
        name : name,
        price : price,
        stock : stock,
        status: status
    }, {
        where :{
            id:id
        }
    })
        res.send({
            status : 'success',
            data:result
        })
    } catch (err) {
        res.send({
            status : 'error',
            data:err
        })
    }
}

const destroy = async(req, res) => {
    const id = req.params.id;
    try {
        const result = await Product.destroy({
            where:{
                id : id
            }
        })
        res.send({
            status:'success',
            data:result
        })
    } catch(err){
        res.send({
            status:'error',
            data:err
        })
    }
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


module.exports  = {
    create,
    index,
    detail,
    update,
    destroy
}