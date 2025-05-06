const products = [
    {
      productId: 1,
      name: "Phone",
      description: "Smartphone with 128GB storage",
      price: 500,
      stock: 10,
      category: "Electronics",
      tags: ["mobile", "smartphone"],
      discount: null
    },
    {
      productId: 2,
      name: "Shirt",
      description: "Cotton T-shirt",
      price: 20,
      stock: 50,
      category: "Clothing",
      tags: ["fashion", "summer"],
      discount: { type: "percentage", value: 10 }
    },
    {
      productId: 3,
      name: "Bag",
      description: "Leather",
      price: 20,
      stock: 60,
      category: "Accessories",
      tags: ["leather", "fabric"],
      discount: null
    },
    {
      productId: 4,
      name: "Laptop",
      description: "Windows 11",
      price: 25,
      stock: 50,
      category: "Electronics",
      tags: ["fashion"],
      discount: { type: "percentage", value: 15 }
    },
    {
      productId: 5,
      name: "Shirt",
      description: "Cotton T-shirt",
      price: 20,
      stock: 50,
      category: "Clothing",
      tags: ["laptop", "tabs"],
      discount: null
    }
  ];
  
  const displayProductDetails = (product) => {
    console.log("\nProduct Details:");
    for (const key in product) {
      if (key !== "tags") {
        console.log(`${key}: ${product[key]}`);
      } else {
        console.log("tags: " + product.tags.join(", "));
      }
    }
  };
  
  const filterProductsByCategory = (category) => {
    return products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
  };
  
  const findProductById = (productId) => {
    return products.find((product) => product.productId === productId);
  };
  
  const discountModule = (productId, discount) => {
    const product = findProductById(productId);
    if (product) {
      if (discount.type === "percentage") {
        const discountAmount = (product.price * discount.value) / 100;
        product.price = parseFloat((product.price - discountAmount).toFixed(2));
        product.discount = discount;
        console.log(`Discount of ${discount.value}% applied. New price: $${product.price}`);
      }
    }
  };
  
  const updateStock = (productId, quantity) => {
    const product = findProductById(productId);
    if (product) {
      product.stock = quantity;
      console.log(`Stock for product ID ${productId} updated to ${quantity}`);
    } else {
      console.error(`Product with ID ${productId} not found.`);
    }
  };
  
  const addTagToProduct = (productId, tag) => {
    const product = findProductById(productId);
    if (product) {
      if (tag.trim() && !product.tags.includes(tag)) {
        product.tags.push(tag);
        console.log(`Tag '${tag}' added to product ID ${productId}`);
      } else {
        console.log(`Tag '${tag}' already exists or is invalid on product ID ${productId}`);
      }
    } else {
      console.error(`Product with ID ${productId} not found.`);
    }
  };
  
  const removeProduct = (productId) => {
    const index = products.findIndex((p) => p.productId === productId);
    if (index !== -1) {
      products.splice(index, 1);
      console.log(`Product with ID ${productId} removed.`);
    } else {
      console.error(`Product with ID ${productId} not found.`);
    }
  };
  
  const calculateTotalValue = () => {
    let totalValue = 0;
    for (const product of products) {
      totalValue += product.price * product.stock;
    }
    console.log("Total value: $" + totalValue.toFixed(2));
  };
  
  // Run operations
  console.log("\nInitial Products:");
  products.forEach(p => displayProductDetails(p));
  
  console.log("\nFilter by Category (Electronics):");
  const electronicsProducts = filterProductsByCategory("Electronics");
  electronicsProducts.forEach(p => displayProductDetails(p));
  
  console.log("\nFind Product by ID (2):");
  const prod2 = findProductById(2);
  if (prod2) displayProductDetails(prod2);
  else console.log("Product with ID 2 not found.");
  
  console.log("\nApply Discount (Product ID 2):");
  discountModule(2, { type: "percentage", value: 10 });
  
  console.log("\nUpdate Stock (Product ID 3):");
  updateStock(3, 75);
  
  console.log("\nAdd Tag to Product (Product ID 4):");
  addTagToProduct(4, "new");
  
  console.log("\nRemove Product (Product ID 5):");
  removeProduct(5);
  
  console.log("\nProducts after removal:");
  products.forEach(p => displayProductDetails(p));
  
  calculateTotalValue();
  