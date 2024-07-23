import axios from 'axios'

const api = 'https://fakestoreapi.com'

export const fetchProducts = async () => {
  try {
    const products = await axios.get(`${api}/products`)
    console.log(products)
    return products.data
  } catch (error) {
    console.error('Error fetching products..', error)
    throw error
  }
}

export const fetchCategories = async () => {
  try {
    const categories = await axios.get(`${api}/products/categories`)
    return categories.data
  } catch (error) {
    console.error('Error fetching Product categories', error)
    throw error
  }
}

export const fetchProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`${api}/products/category/${category}`)
    return response.data
  } catch (error) {
    console.error('Error fetching products by category:', error)
    throw error
  }
}

export const signup = async (userData) => {
  try {
    console.log('User signed up', userData)
    return { message: 'User signed up successfully' }
  } catch (error) {
    console.error('Error signing up:', error)
    throw error
  }
}

export const login = async (credentials) => {
  try {
    console.log('User logged in:', credentials)
    return { message: 'User logged in successfully' }
  } catch (error) {
    console.error('Error logging in:', error)
    throw error
  }
}
