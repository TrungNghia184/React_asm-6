import React from 'react'
import "./index.scss"
export default function AddToCartSuccess(props) {
  return (
    <div className="add-successfully" style={{display: props.style}}>
        Item has been added to your cart successfully!
    </div>
  )
}
