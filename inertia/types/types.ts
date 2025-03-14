export type MenuItem = {
  icon: React.ElementType
  label: string
  path: string
}

export type Order = {
  id: number
  customer: string
  product: string
  price: number
  status: string
}

export type Customer = {
  id: number
  name: string
  email: string
  orders: number
  spent: string
}

export type Product = {
  id: number
  name: string
  stock: number
  price: string
  sales: number
}
