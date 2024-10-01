import React, { useState } from 'react'
import './Modal.css'

const Modal = ({ isOpen, product, onClose, onDelete }) => {
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])

  console.log(product)

  if (!isOpen) return null

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment])
      setComment('')
    }
  }

  const handleDeleteProduct = () => {
    onDelete(product.id)
    onClose()
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <img src={product.image} alt={product.title} />
        <div className="modal-comments">
          <h3>Comments</h3>
          <ul>
            {comments.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </div>
        <div className="modal-actions">
          <input
            type="text"
            value={comment}
            placeholder="Add a comment"
            onChange={(e) => setComment(e.target.value)}
          />
          <button className="add_comment" onClick={handleAddComment}>
            Add Comment
          </button>
          <button className="product_delete" onClick={handleDeleteProduct}>
            Delete
          </button>
          <button className="modal_close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
