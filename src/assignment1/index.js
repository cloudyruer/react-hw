import { useState } from 'react'
import './Assignment1.css'
import OrderList from './components/OrderList'
import Summary from './components/Summary'

// 產品訂購的項目
const products = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    id: 2,
    name: '白色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    price: 200,
  },
  {
    id: 3,
    name: '黑色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 450,
  },
  {
    id: 4,
    name: '金色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 100,
  },
]

const addAmountToProductArr = products.map((product) => ({
  ...product,
  amount: 1,
}))
console.log(addAmountToProductArr)

function Assignment1() {
  const [productWithAmount, setProductWithAmount] = useState(
    addAmountToProductArr
  )

  // 訂單的總數量
  const totalAmount = productWithAmount.reduce(
    (acc, cur) => acc + cur.amount,
    0
  )

  // 訂單的總金額
  const totalPrice = productWithAmount.reduce(
    (acc, cur) => acc + cur.amount * cur.price,
    0
  )

  return (
    <div className="card">
      <div className="row">
        <OrderList
          productWithAmount={productWithAmount}
          setProductWithAmount={setProductWithAmount}
        />
        <Summary totalAmount={totalAmount} totalPrice={totalPrice} />
      </div>
    </div>
  )
}

export default Assignment1
