const customer = {
  name: 'customer',
  type: 'document',
  fields: [
    { name: 'id', type: 'string', title: 'Customer ID', readOnly: true },
    { name: 'name', type: 'string', title: 'Customer Name' },
    { name: 'email', type: 'string', title: 'Email', validation: Rule => Rule.required().email() },
    { name: 'phone', type: 'string', title: 'Phone Number' },
    { name: 'address', type: 'text', title: 'Address' },
    { name: 'createdAt', type: 'datetime', title: 'Account Created At', readOnly: true }
  ]
};

const order = {
  name: 'order',
  type: 'document',
  fields: [
    { name: 'id', type: 'string', title: 'Order ID', readOnly: true },
    { name: 'customerID', type: 'reference', to: [{ type: 'customer' }], title: 'Customer' },
    { name: 'orderDate', type: 'datetime', title: 'Order Date', readOnly: true },
    { name: 'totalAmount', type: 'number', title: 'Total Amount' },
    { name: 'status', type: 'string', title: 'Order Status', options: { list: ['Pending', 'Shipped', 'Delivered', 'Cancelled'] } }
  ]
};

const orderItem = {
  name: 'orderItem',
  type: 'document',
  fields: [
    { name: 'id', type: 'string', title: 'Order Item ID', readOnly: true },
    { name: 'orderID', type: 'reference', to: [{ type: 'order' }], title: 'Order' },
    { name: 'productID', type: 'reference', to: [{ type: 'product' }], title: 'Product' },
    { name: 'quantity', type: 'number', title: 'Quantity' },
    { name: 'pricePerUnit', type: 'number', title: 'Price Per Unit' }
  ]
};

const product = {
  name: 'product',
  type: 'document',
  fields: [
    { name: 'id', type: 'string', title: 'Product ID', readOnly: true },
    { name: 'name', type: 'string', title: 'Product Name' },
    { name: 'price', type: 'number', title: 'Price' },
    { name: 'stock', type: 'number', title: 'Stock Level' },
    { name: 'category', type: 'string', title: 'Category' },
    { name: 'dimensions', type: 'string', title: 'Dimensions' },
    { name: 'material', type: 'string', title: 'Material' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'customizationOptions', type: 'array', title: 'Customization Options', of: [{ type: 'string' }] },
    { name: 'image', type: 'image', title: 'Product Image' }
  ]
};
            