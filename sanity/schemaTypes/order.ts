import { defineType } from "sanity";

export const orderSchema = defineType({
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    { name: "orderNumber", title: "Order Number", type: "string" },
    { name: "orderDate", title: "Order Date", type: "datetime" },
    { name: "customerName", title: "Customer Name", type: "string" },
    { name: "email", title: "Email", type: "string" },
    { name: "address", title: "Address", type: "string" },
    { name: "city", title: "City", type: "string" },
    { name: "postalCode", title: "Postal Code", type: "string" },
    { name: "country", title: "Country", type: "string" },
    { name: "totalAmount", title: "Total Amount", type: "number" },
    { name: "paymentMethod", title: "Payment Method", type: "string" },
    { name: "paymentStatus", title: "Payment Status", type: "string" },
    {
      name: "orderItems",
      title: "Order Items",
      type: "array",
      of: [
        {
          type: "object",
          name: "orderItem",
          fields: [
            {
              name: "product",
              title: "Product",
              type: "reference",
              to: [{ type: "products" }],
            },
            { name: "price", title: "Price", type: "number" },
            { name: "quantity", title: "Quantity", type: "number" },
          ],
        },
      ],
    },
    {
      name: "orderStatus",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Completed", value: "completed" },
          { title: "Shipped", value: "shipped" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
    },
  ],
});