import React, { useEffect, useState, Suspense } from 'react'
import Pagination from '../../components/Pagination/Pagination'
import {
  fetchProducts,
  fetchCategories,
  fetchProductsByCategory,
} from '../../utils/api'
import Modal from '../../components/Modal/Modal'
import './Home.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/actions'
import Categories from '../../components/Categories/Categories'

const Card = React.lazy(() => import('../../components/Card/Card'))

const Home = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(4)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productList = await fetchProducts()
        setProducts(productList)
      } catch (error) {
        console.error('Error fetching Products', error)
      }
    }
    loadProducts()
  }, [])

  useEffect(() => {
    const getCategories = async () => {
      try {
        const categoriesList = await fetchCategories()
        setCategories(categoriesList)
      } catch (error) {
        console.log('Error fetching categories', error)
      }
    }
    getCategories()
  }, [selectedCategory, currentPage])

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem)
  console.log('items', currentItems)

  const totalPages = Math.ceil(products.length / itemsPerPage)
  console.log(totalPages)

  const handleCategoryChange = async (category) => {
    setSelectedCategory(category)
    if (category) {
      try {
        const productsData = await fetchProductsByCategory(category)
        setProducts(productsData)
      } catch (error) {
        console.error('Error fetching products by category:', error)
      }
    } else {
      const productsData = await fetchProducts()
      setProducts(productsData)
    }
  }

  const handleCardClick = (product) => {
    setSelectedProduct(product)
    console.log(selectedProduct)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))
    setSelectedProduct(null)
  }

  const handleAddToCart = (product) => {
    console.log('added to cart', product)
    dispatch(addToCart(product))
  }

  return (
    <div className="home-container">
      <Categories
        categories={categories}
        onSelectCategory={handleCategoryChange}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="card_pagination-container">
          <div className="card-container">
            {currentItems.map((product) => (
              <Card
                key={product.id}
                product={product}
                onClick={() => handleCardClick(product)}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
          <Pagination
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredProducts.length}
            onPageChange={setCurrentPage}
          />
        </div>
      </Suspense>
      {selectedProduct && (
        <Modal
          isOpen={isModalOpen}
          product={selectedProduct}
          onClose={handleCloseModal}
          onDelete={handleDeleteProduct}
        />
      )}
    </div>
  )
}

export default Home
