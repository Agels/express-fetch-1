const { ObjectId } = require("mongodb");

const products = require("./model");

const index = async (req, res) => {
  try {
    const result = await products.find();
    res.send({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.send({
      status: "error",
      data: err,
    });
  }
};

const detail = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await products.findOne({ _id: ObjectId(id) });
    res.send({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.send({
      status: "error",
      data: err,
    });
  }
};

const store = async (req, res) => {
  const { name, price, stock, status } = req.body;

  try {
    const result = await products.create({
      name: name,
      price: price,
      stock: stock,
      status: status,
    });
    res.send({
      status: "data has been added",
      data: result,
    });
  } catch (err) {
    res.send({
      status: "error",
      data: err,
    });
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  const { name, price, stock, status } = req.body;
  try {
    const result = await products.updateOne(
      {
        _id: ObjectId(id),
      },
      {
        $set: {
          name: name,
          price: price,
          stock: stock,
          status: status
        }
      }
    );
    res.send({
      status: "data has been updated",
      data: result,
    });
  } catch (err) {
    res.send({
      status: "error",
      data: err,
    });
  }
};

const deleted = async(req, res) => {
    const id = req.params.id;
    try{
    const result = await products.deleteOne({_id:ObjectId(id)})
    res.send({
        status:'data has been deleted',
        data:result
    })
    } catch(err) {
        res,send({
            status:'error',
            data:err
        })
    }
}

module.exports = {
  index,
  detail,
  store,
  update,
  deleted
};
