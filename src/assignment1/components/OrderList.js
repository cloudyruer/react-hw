import React from 'react'
import ProductItem from './ProductItem'

function OrderList({ productWithAmount, setProductWithAmount }) {
  const renderedProductItem = productWithAmount.map((product, i) => {
    return (
      <ProductItem
        key={product.id}
        amount={product.amount}
        category={product.category}
        image={product.image}
        name={product.name}
        price={product.price}
        calcAmount={(newCalc) => {
          //1. 先從原本的陣列拷貝出一個新陣列(在這上面處理)
          const newStateArr = [...productWithAmount]
          //2. 運算處理：更新陣列中對應商品數量 如果小於1以1來更新
          newStateArr[i].amount =
            newStateArr[i].amount + newCalc < 1
              ? 1
              : newStateArr[i].amount + newCalc
          // 3. 使用新的arr設定state
          setProductWithAmount(newStateArr)
        }}
        // NOTE 10/01
        removeItem={() => {
          const newFilterArr = productWithAmount.filter(
            (_, curArrIndex) => i !== curArrIndex
          )
          setProductWithAmount(newFilterArr)
        }}
      />
    )
  })

  return (
    <div className="col-md-8 cart">
      <div className="title">
        <div className="row">
          <div className="col">
            <h4>
              <b>Shopping Cart</b>
            </h4>
          </div>
          <div className="col align-self-center text-right text-muted">
            {productWithAmount.length} 種商品類別
          </div>
        </div>
      </div>
      {/*  */}
      {renderedProductItem}
      {/*  */}
      <div className="back-to-shop">
        <a href="#/">←</a>
        <span className="text-muted">Back to shop</span>
      </div>
    </div>
  )
}

export default OrderList
