const products = [
    {
      id: 1,
      name: 'foo',
      price: 7
    },
    {
      id: 2,
      name: 'bar',
      price: 2
    },
    {
      id: 5,
      name: 'bazz',
      price: 1
    },
  ];
  
  const users = [
    {
       id: 1,
       name: 'moe'
    },
    {
       id: 2,
       name: 'larry'
    },
    {
       id: 3,
       name: 'curly'
    }
  ];
  
  // productId matches up with product in products
  // userId matches up with user in users
  const orders = [
    {
      id: 1,
      productId: 1,
      quantity: 3,
      userId: 1
    },
    {
      id: 2,
      productId: 1,
      quantity: 7,
      userId: 1
    },
    {
      id: 3,
      productId: 5,
      quantity: 70,
      userId: 3
    },
    {
      id: 4,
      productId: 5,
      quantity: 1,
      userId: 3
    }
  ];
  
  // console.log(productsPurchased(orders, products)); // logs foo and bazz products
  
  
  
  function productsPurchased(orders, products) {
    const arrIdsPurchased = orders.reduce((a, order) => {
      a.push(order.productId)
      return a
    }, [])
  
    return products.filter(order => arrIdsPurchased.includes(order.id))
  
  }
  
  // console.log(topSellingProductByQuantity(orders, products));//logs bazz product
  
  function topSellingProductByQuantity(orders, products) {
    const purchased = productsPurchased(orders, products)
    for (let k = 0; k < purchased.length; ++k) {
      purchased[k]['quantity'] = 0
    }
  
    for (let i = 0; i < orders.length; ++i) {
      let current = orders[i]
      let currentProductId = current.productId
      for (let j = 0; j < purchased.length; j++) {
        let currentProduct = purchased[j]
        if (currentProduct.id === currentProductId) {
          currentProduct.quantity += current.quantity 
        }
      }
    }
    
    let maxNum = null
    let maxProduct = null
  
    for (let l = 0; l < purchased.length; ++l) {
      if (purchased[l].quantity > maxNum || maxNum === null) {
        maxNum = purchased[l].quantity
        maxProduct = purchased[l]
      }
    }
  
    return maxProduct
  }
  
  // console.log(usersWithOrders(users, orders));//logs info on moe and curly
  
  function usersWithOrders(users, orders) {
    const userIdsPurchased = orders.reduce((a, order) => {
      a.push(order.userId)
      return a
    }, [])
    
    return users.filter((user => userIdsPurchased.includes(user.id)))
  }
  
  usersWithOrders(users, orders)