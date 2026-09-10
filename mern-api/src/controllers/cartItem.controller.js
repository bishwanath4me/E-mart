const cartItemService=require("../services/cartItem.service.js")

async function updateCartItem(req, res) {
    
    const user = await req.user;
    console.log("req user :", user)
    // console.log("cart item id", req.params.id)
    try {
        const updatedCartItem = await cartItemService.updateCartItem(user._id,req.params.id,req.body);

      return res.status(200).send(updatedCartItem);
    } catch (err) {
        console.log("error",err.message)
      //return res.status(500).json({ error: err.message });
      return res.status(500).send({ error: err.message });
    }
}

async function removeCartItem(req, res) {
    
    const user =await req.user;
    
    //console.log(user._id,"user id");
    console.log("cart item id", req.params.id);

    try {
        await cartItemService.removeCartItem(user._id,req.params.id)

      return res.status(200).send({message:"item removed",status:true});
    } catch (err) {
        console.log("error",err.message)
     // return res.status(500).json({ error: err.message });
     return res.status(500).send({ error: err.message });
    }
}

module.exports={updateCartItem,removeCartItem};