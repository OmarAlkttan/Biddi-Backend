# API Documentation

## Introduction

This API documentation provides details about the endpoints available for Project backend server. 

## Authentication

| No. | Method | Endpoint                 | Description                |
|-----|--------|--------------------------|----------------------------|
| 1   | POST   | /register               | User registration          |
| 2   | POST   | /login                  | User login                 |
| 3   | POST   | /logout                 | User logout                |
| 4   | POST   | /refresh                | Refresh token              |
| 5   | POST   | /confirm-email          | Confirm email              |
| 6   | POST   | /reset-password         | Reset password             |
| 7   | GET    | /me                     | Get current user           |

## User

| No. | Method | Endpoint                 | Description                |
|-----|--------|--------------------------|----------------------------|
| 1   | GET    | /users/:id               | Get user                   |
| 2   | POST   | /users                   | Add user                   |
| 3   | GET    | /users                   | Get all users              |
| 4   | PUT    | /users/:id               | Update user                |
| 5   | DELETE | /users/:id               | Delete user                |
| 6   | POST   | /addresses               | Add address                |
| 7   | PUT    | /addresses/:id           | Update address             |
| 8   | DELETE | /addresses/:id           | Delete address             |
| 9   | PUT    | /addresses/:id/default   | Make address default       |
| 10  | POST   | /favorites/vendors/:vendorId| Add favorite vendor      |
| 11  | POST   | /favorites/products/:productId| Add favorite product    |
| 12  | POST   | /favorites/services/:serviceId| Add favorite service    |
| 13  | PUT    | /notifications/:id       | Update notification        |
| 14  | POST   | /cart                    | Add to cart                |
| 15  | PUT    | /cart/items/:id          | Update cart item           |
| 16  | DELETE | /cart/items/:id          | Remove cart item           |

## Vendor

| No. | Method | Endpoint                    | Description                |
|-----|--------|-----------------------------|----------------------------|
| 1   | POST   | /vendors                    | Add vendor                 |
| 2   | GET    | /vendors/:id                | Get vendor                 |
| 3   | GET    | /vendors                    | Get all vendors            |
| 4   | GET    | /vendors/:category          | Get vendors by category    |
| 5   | PUT    | /vendors/:id                | Update vendor              |
| 6   | DELETE | /vendors/:id                | Delete vendor              |
| 7   | POST   | /sections                   | Add section                |
| 8   | GET    | /sections/:id               | Get section                |
| 9   | PUT    | /sections/:id               | Update section             |
| 10  | DELETE | /sections/:id               | Delete section             |
| 11  | POST   | /categories                 | Add category               |

## Product

| No. | Method | Endpoint                    | Description                |
|-----|--------|-----------------------------|----------------------------|
| 1   | POST   | /products                   | Add product                |
| 2   | GET    | /products/:id               | Get product                |
| 3   | PUT    | /products/:id               | Update product             |
| 4   | DELETE | /products/:id               | Delete product             |
| 5   | GET    | /products/vendors/:vendorId  | Get products by vendor     |
| 6   | GET    | /products/categories/:categoryId| Get products by category  |

## Service

| No. | Method | Endpoint                    | Description                |
|-----|--------|-----------------------------|----------------------------|
| 1   | POST   | /services                   | Add service                |
| 2   | GET    | /services                   | Get all services           |
| 3   | GET    | /services/:category         | Get services by category   |
| 4   | GET    | /services/:id               | Get service                |
| 5   | PUT    | /services/:id               | Update service             |
| 6   | DELETE | /services/:id               | Delete service             |
| 7   | PUT    | /services/:id/provider      | Assign service provider    |

## Service Provider

| No. | Method | Endpoint                    | Description                |
|-----|--------|-----------------------------|----------------------------|
| 1   | POST   | /providers                  | Add service provider       |
| 2   | GET    | /providers/:serviceId       | Get providers by service   |
| 3   | GET    | /providers/:id              | Get service provider       |
| 4   | PUT    | /providers/:id              | Update service provider    |
| 5   | DELETE | /providers/:id              | Delete service provider    |

## Service Order

| No. | Method | Endpoint                    | Description                |
|-----|--------|-----------------------------|----------------------------|
| 1   | POST   | /service-orders             | Add service order          |
| 2   | GET    | /service-orders/:id         | Get service order          |
| 3   | PUT    | /service-orders/:id         | Update service order       |
| 4   | DELETE | /service-orders/:id         | Delete service order       |
| 5   | PUT    | /service-orders/:id/accept  | Accept service order       |
| 6   | PUT    | /service-orders/:id/cancel  | Cancel service order       |

## Order

| No. | Method | Endpoint                    | Description                |
|-----|--------|-----------------------------|----------------------------|
| 1   | POST   | /orders                     | Add order                  |
| 2   | GET    | /orders/:id                 | Get order                  |
| 3   | GET    | /orders/user/:userId        | Get user orders            |
| 4   | GET    | /orders/vendor/:vendorId    | Get vendor orders          |
| 5   | GET    | /orders/rider/:riderId      | Get rider orders           |
| 6   | PUT    | /orders/:id                 | Update order               |
| 7   | DELETE | /orders/:id                 | Delete order               |
| 8   | PUT    | /orders/:id/accept          | Accept order               |
| 9   | PUT    | /orders/:id/cancel          | Cancel order               |
| 10  | PUT    | /orders/:id/return          | Return product             |

## Review

| No. | Method | Endpoint                    | Description                |
|-----|--------|-----------------------------|----------------------------|
| 1   | POST   | /reviews                    | Add review                 |
| 2   | GET    | /reviews/:id                | Get review                 |
| 3   | GET    | /reviews/vendor/:vendorId   | Get vendor reviews         |
| 4   | GET    | /reviews/product/:productId | Get product reviews        |
| 5   | GET    | /reviews/service/:serviceId | Get service reviews        |
| 6   | GET    | /reviews/provider/:providerId| Get service provider reviews|
| 7   | PUT    | /reviews/:id                | Update review              |
| 8   | DELETE | /reviews/:id                | Delete review              |

## Driver

| No. | Method | Endpoint                    | Description                |
|-----|--------|-----------------------------|----------------------------|
| 1   | POST   | /drivers                    | Add driver                 |
| 2   | GET    | /drivers/:id                | Get driver                 |
| 3   | PUT    | /drivers/:id                | Update driver              |
| 4   | DELETE | /drivers/:id                | Delete driver              |
| 5   | GET    | /location                   | Get driver location        |

