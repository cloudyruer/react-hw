import React from 'react'

function ProductItem({
  amount,
  category,
  image,
  name,
  price,
  calcAmount,
  removeItem,
}) {
  return (
    <div className="row border-top border-bottom">
      <div className="row main align-items-center">
        <div className="col-2">
          <img alt="" className="img-fluid" src={image} />
        </div>
        <div className="col">
          <div className="row text-muted">{category}</div>
          <div className="row">{name}</div>
        </div>
        <div className="col">
          <a href="#/" onClick={() => calcAmount(-1)}>
            -
          </a>
          <a href="#/" className="border">
            {amount}
          </a>
          <a href="#/" onClick={() => calcAmount(1)}>
            +
          </a>
        </div>
        <div className="col">
          &euro; {price}{' '}
          <span
            className="close"
            style={{ cursor: 'pointer' }}
            onClick={removeItem}
          >
            &#10005;
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
