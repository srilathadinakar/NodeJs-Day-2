const products = [
  { id: 1, name: "iphone12", price: 12000 },
  { id: 2, name: "laptop", price: 45000 },
  { id: 3, name: "headphone", price: 5000 },
  { id: 4, name: "printer", price: 4000 },
  { id: 5, name: "scanner", price: 2000 },
];

//get method
export const getProducts = (req, res) => {
  res
    .status(200)
    .json({ message: "Products retrived successfully", data: products });
};

//get method by Id
export const getProductById = (req, res) => {
  const productId = req.params.id;
  //console.log("Product Id",productId);

  const productDetail = products.find((ele) => ele.id == productId);
  if (!productDetail) {
    return res.status(404).json({ message: "Product Not Found" });
  }
  res
    .status(200)
    .json({ message: "Product Retrived Successfully", data: productDetail });
};

//Post method
export const createProduct = (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
    id: products.length + 1,
    name: name,
    price: price,
  };

  products.push(newProduct);

  res
    .status(200)
    .json({ message: "Product Added Successfully", data: newProduct });
};


// put/update method
export const updateProduct = (req,res)=>{
    const productId = req.params.id;
    const {name,price} = req.body;

    const index = products.findIndex((ele)=>ele.id == productId);
    if(index === -1){
        return res.status(404).json({message:"Product Not Found"})
    }

    products[index].name = name;
    products[index].price = price;
    res.status(200).json({message:"Product Updated Successfully",data:products[index]})
};

//delete method
export const deleteProduct = (req,res) =>{
    const productId = req.params.id;
    const index = products.findIndex((ele)=>ele.id == productId);
    if(!index){
        return res.status(404).json({message:"Product Not Found"})
    }
    products.splice(index,1);
    res.status(200).json({message:"Product Deleted Successfully"})
} 
