# 🛒 E-commerce Microservices — Progress Log  

## 📌 Overview  
We are building a **scalable e-commerce platform** using **Node.js (Express), PostgreSQL, Prisma, and Docker (later)**.  
Each core feature (users, products, orders, etc.) will be developed as an independent **microservice**.  

So far, we have:  
- Setup **monorepo structure** with `pnpm workspaces`  
- Created **User Service** (working ✅)  
- Started **Product Service** (database + migrations working ✅)  

---

## 📂 Project Structure (Current Progress)

```
ecommerce-microservices/
│── pnpm-workspace.yaml
│── package.json
│── services/
│    ├── user-service/
│    │   ├── prisma/
│    │   │   └── schema.prisma
│    │   ├── src/
│    │   │   ├── controllers/
│    │   │   ├── middlewares/
│    │   │   ├── routes/
│    │   │   └── index.js
│    │   ├── .env
│    │   └── package.json
│    │
│    ├── product-service/
│        ├── prisma/
│        │   └── schema.prisma
│        ├── src/
│        ├── .env
│        └── package.json
```

---

## 🚀 User Service (Completed Today)

### ✅ Features Implemented
- Express server setup  
- Prisma + PostgreSQL connection  
- User model (`id, name, email, password, createdAt`)  
- Routes:  
  - `POST /api/users/register` → Register a new user  
  - `POST /api/users/login` → Login with JWT authentication  
- Middleware for error handling  
- Password hashing with **bcrypt**  
- JWT authentication using **jsonwebtoken**  

### 🔑 Example `.env` (User Service)

```env
PORT=4000
DATABASE_URL="postgresql://user:password@localhost:5432/user_service_db?schema=public"
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=1d
```

---

## 📦 Product Service (Progress Today)

### ✅ Setup Completed
- PostgreSQL database `product_service_db` with dedicated user `product_user`  
- Prisma schema created  
- Solved **shadow database issue** by creating a dedicated `product_service_shadow`  
- First migration applied successfully (`init`)  

### 🔑 Example `.env` (Product Service)

```env
PORT=5000
DATABASE_URL="postgresql://product_user:your_secure_password@localhost:5432/product_service_db?schema=public"
SHADOW_DATABASE_URL="postgresql://product_user:your_secure_password@localhost:5432/product_service_shadow?schema=public"
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=1d
```

---

## 📝 Next Steps (Tomorrow)
1. Setup Express server for Product Service  
2. Implement CRUD routes for `Product` model  
   - Create product  
   - Get all products  
   - Get product by ID  
   - Update product  
   - Delete product  
3. Add authentication middleware if needed (admin-only product creation)  

---

✅ **Current Status:**  
- User Service running (register + login working)  
- Product Service database ready (migration done)  
- Ready to build Product API next 🚀  
