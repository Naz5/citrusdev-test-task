import { Orders } from '@/types/orders.types';
import { Sales } from './types/sales.types';

export const salesData:Sales[] = [
  {
    date: '2025-01-31',
    product: 'Laptop',
    orders: 50,
    sales: 5000,
    region: 'North America'
  },
  {
    date: '2025-01-31',
    product: 'Phone',
    orders: 65,
    sales: 3000,
    region: 'Europe'
  },
  {
    date: '2025-02-01',
    product: 'Tablet',
    orders: 40,
    sales: 2000,
    region: 'Asia'
  },
  {
    date: '2025-02-02',
    product: 'Laptop',
    orders: 55,
    sales: 7000,
    region: 'North America'
  },
  {
    date: '2025-02-03',
    product: 'Phone',
    orders: 80,
    sales: 4000,
    region: 'Europe'
  },
  {
    date: '2025-02-04',
    product: 'Tablet',
    orders: 90,
    sales: 3500,
    region: 'Asia'
  },
  {
    date: '2025-02-05',
    product: 'Laptop',
    orders: 33,
    sales: 6000,
    region: 'North America'
  },
  {
    date: '2025-01-10',
    product: 'Phone',
    orders: 74,
    sales: 2500,
    region: 'Europe'
  }
];

export const ordersData: Orders[] = [
  {
    orderId: '001',
    date: '2025-01-29',
    product: 'Laptop',
    quantity: 5,
    totalPrice: 5000,
    region: 'North America',
  },
  {
    orderId: '002',
    date: '2025-01-25',
    product: 'Phone',
    quantity: 10,
    totalPrice: 3000,
    region: 'Europe'
  },
  {
    orderId: '003',
    date: '2025-01-20',
    product: 'Tablet',
    quantity: 3,
    totalPrice: 2000,
    region: 'Asia'
  },
  {
    orderId: '004',
    date: '2025-01-15',
    product: 'Laptop',
    quantity: 7,
    totalPrice: 7000,
    region: 'North America'
  },
  {
    orderId: '005',
    date: '2025-01-10',
    product: 'Phone',
    quantity: 8,
    totalPrice: 4000,
    region: 'Europe'
  },
  {
    orderId: '006',
    date: '2025-01-05',
    product: 'Tablet',
    quantity: 5,
    totalPrice: 3500,
    region: 'Asia'
  },
  {
    orderId: '007',
    date: '2024-12-30',
    product: 'Laptop',
    quantity: 6,
    totalPrice: 6000,
    region: 'North America'
  },
  {
    orderId: '008',
    date: '2024-12-25',
    product: 'Phone',
    quantity: 5,
    totalPrice: 2500,
    region: 'Europe'
  },
  {
    orderId: '009',
    date: '2024-12-25',
    product: 'Phone',
    quantity: 5,
    totalPrice: 2500,
    region: 'Europe'
  },
  {
    orderId: '0011',
    date: '2024-12-25',
    product: 'Phone',
    quantity: 5,
    totalPrice: 2500,
    region: 'Europe'
  },
  {
    orderId: '0012',
    date: '2024-12-25',
    product: 'Phone',
    quantity: 5,
    totalPrice: 2500,
    region: 'Europe'
  }
];
