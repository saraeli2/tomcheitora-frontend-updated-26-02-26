import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'

const toast = useToast()

export const useShoppingCartStore = defineStore('cart', {
  state: () => ({
    customerInfo: JSON.parse(localStorage.getItem('CUSTOMER_INFO')) || {},
    isOrderPlaced: JSON.parse(localStorage.getItem('IS_ORDER_PLACED')) || false,
    cartItems: JSON.parse(localStorage.getItem('CART_STORAGE')) || [],
    deliveryType: localStorage.getItem('deliveryType') || '',
  }),

  getters: {
    countCartItems(){
      return this.cartItems.length
    },
    getCartItems(){
      return this.cartItems
    },
    getTotalPrice(){
      return this.cartItems.reduce((acc, item) => acc += (item.price) * item.quantity, 0)
    },
  },

  actions: {
    addToCart(item) {
      let index = this.cartItems.findIndex(product => product.id === item.id)
      if(index !== -1) {
        this.cartItems[index].quantity += 1
        toast.info('Your item has been updated')
      }else {
        item.quantity = 1
        this.cartItems.push(item)
        localStorage.setItem('CART_STORAGE', JSON.stringify(this.cartItems))
        toast.success('Your item has been saved')
      }
      this.cartItems = JSON.parse(localStorage.getItem('CART_STORAGE')) || []
    },

    addToCartQuickView(item, qty) {
      let index = this.cartItems.findIndex(product => product.id === item.id)
      if(index !== -1) {
        this.cartItems[index].quantity += qty
        localStorage.setItem('CART_STORAGE', JSON.stringify(this.cartItems))
        toast.info('Your item has been updated')
      }else {
        item.quantity = qty
        this.cartItems.push(item)
        localStorage.setItem('CART_STORAGE', JSON.stringify(this.cartItems))
        toast.success('Your item has been saved')
      }
      this.cartItems = JSON.parse(localStorage.getItem('CART_STORAGE')) || []
    },

    incrementQty(item) {
      let index = this.cartItems.findIndex(product => product.id === item.id)
      if(index !== -1) {
        this.cartItems[index].quantity += 1
        localStorage.setItem('CART_STORAGE', JSON.stringify(this.cartItems))
        toast.info('Your item has been updated')
      }else{
        item.quantity = 1
        this.cartItems.push(item)
        localStorage.setItem('CART_STORAGE', JSON.stringify(this.cartItems))
        toast.success('Your item has been saved')
      }
      this.cartItems = JSON.parse(localStorage.getItem('CART_STORAGE')) || []
    },
    
    decrementQty(item) {
      let index = this.cartItems.findIndex(product => product.id === item.id)
      if(index !== -1) {
        this.cartItems[index].quantity -= 1
        localStorage.setItem('CART_STORAGE', JSON.stringify(this.cartItems))
        if(this.cartItems[index].quantity === 0){
          this.cartItems = this.cartItems.filter(product => product.id !== item.id)
          localStorage.setItem('CART_STORAGE', JSON.stringify(this.cartItems))
          toast.error('Your item has been removed')
        }
        toast.info('Your item has been updated')
        this.cartItems = JSON.parse(localStorage.getItem('CART_STORAGE')) || []
      }
    },

    removeFromCart(item) {
      const updatedItems = this.cartItems = this.cartItems.filter(product => product.id !== item.id)

      localStorage.setItem('CART_STORAGE', JSON.stringify(updatedItems))
      this.cartItems = JSON.parse(localStorage.getItem('CART_STORAGE')) || []
      toast.error('Your item has been removed')
    },

    addLocalStorageData(name, email, address, isOrderPlaced){
      const customer = localStorage.setItem('CUSTOMER_INFO', JSON.stringify({ name: name, email: email, address: address }))
      const placeOrder = localStorage.setItem('IS_ORDER_PLACED', JSON.stringify(isOrderPlaced))

      this.customerInfo = customer
      this.isOrderPlaced = placeOrder
    },
    addDeliveryTypeData(type){
      this.deliveryType = type
      console.log(this.deliveryType)
    },

    removeLocalStorageData() {
      localStorage.removeItem('CART_STORAGE')
      localStorage.removeItem('CUSTOMER_INFO')
      localStorage.removeItem('IS_ORDER_PLACED')
      this.cartItems = []
      this.customerInfo = {}
      this.isOrderPlaced = false
    },
  },
})

