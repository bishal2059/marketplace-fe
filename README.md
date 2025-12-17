# 🛍️ Marketplace - Modern E-Commerce Platform

A modern, fully-featured e-commerce web application built with React, Material-UI, and Stripe integration. Shop smart, save big!

![Marketplace](https://img.shields.io/badge/React-18.2.0-blue) ![Material-UI](https://img.shields.io/badge/Material--UI-5.14-purple) ![Stripe](https://img.shields.io/badge/Stripe-Integration-green)

## ✨ Features

- **🔐 Secure Authentication** - User login and registration with secure password handling
- **🛒 Shopping Cart** - Add/remove items, manage quantities
- **❤️ Favorites** - Save your favorite products for later
- **🏷️ Product Categories** - Browse products by category
- **💳 Payment Integration** - Secure Stripe payment processing
- **📊 Purchase History** - Track all your orders
- **👤 User Profile** - Manage personal information
- **⚡ Fast & Responsive** - Optimized performance and mobile-friendly design
- **🎨 Modern UI/UX** - Beautiful gradient designs and smooth animations
- **🔄 Real-time Search** - Find products instantly
- **✅ Email Verification** - Secure account verification

## 🚀 Tech Stack

- **Frontend Framework**: React 18.2.0
- **UI Library**: Material-UI 5.14.1
- **Animations**: Framer Motion
- **Payment Gateway**: Stripe
- **State Management**: React Context API & Hooks
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Styling**: CSS-in-JS with MUI

## 📋 Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Marketplace API](https://github.com/bishal2059/marketplace) running locally

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd marketplace-fe
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```env
REACT_APP_STRIPEKEY=your_stripe_public_key
REACT_APP_APIURL=http://localhost:5000/api
```

**Where to find these:**
- **Stripe Key**: Get from [Stripe Dashboard](https://dashboard.stripe.com)
- **API URL**: From your Marketplace API server

### 4. Start Development Server
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm test` | Launches the test runner |
| `npm run eject` | Ejects from Create React App (irreversible) |

## 📁 Project Structure

```
src/
├── pages/              # Page components
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   ├── SignupPage.jsx
│   ├── ProductPage.jsx
│   ├── CartPage.jsx
│   ├── FavouritePage.jsx
│   └── ...
├── components/         # Reusable components
│   ├── home/          # Home page components
│   └── user/          # User-related components
├── hooks/             # Custom React hooks
│   ├── cartHandle.js
│   ├── loginHandler.js
│   └── ...
├── contexts/          # React Context
├── img/               # Images and assets
├── App.js             # Main app component
├── theme.js           # MUI Theme configuration
└── index.js           # Entry point
```

## 🎨 Color Scheme

- **Primary Gradient**: #667eea → #764ba2 (Purple)
- **Secondary Gradient**: #ff6b35 → #f7931e (Orange)
- **Accent Color**: #ffdd00 (Yellow)
- **Background**: #f5f7fa (Light Gray)
- **Text Primary**: #1a1a1a (Dark)

## 🔐 API Endpoints

All API calls are made to the configured `REACT_APP_APIURL`. Key endpoints:

- `POST /login` - User login
- `POST /signin` - User registration
- `GET /user` - Get user details
- `POST /cart` - Add to cart
- `GET /cart` - Get cart items
- `POST /favourites` - Add to favorites
- `GET /products` - Get all products
- `POST /payment` - Process payment

## 📱 Responsive Design

The app is fully responsive with breakpoints:
- **Mobile**: < 600px
- **Tablet**: 600px - 960px
- **Desktop**: > 960px

## ⚡ Performance Optimizations

- **Code Splitting**: Lazy loading of components
- **Image Optimization**: Lazy loading images
- **Debounced Search**: Optimized search functionality
- **Memoization**: React.memo for performance
- **CSS-in-JS**: Optimized styling with MUI

## 🐛 Troubleshooting

### App loads slowly
- Ensure API server is running
- Check network tab in DevTools
- Clear browser cache

### Payment not working
- Verify Stripe key is correct
- Check Stripe test mode is enabled
- Ensure API server handles payment endpoint

### CORS errors
- Ensure API server has CORS enabled
- Check `REACT_APP_APIURL` is correct

## 🔐 Security Features

- ✅ Secure password handling
- ✅ HTTPS ready
- ✅ CSRF protection
- ✅ Email verification
- ✅ Secure payment gateway

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Material-UI Docs](https://mui.com)
- [Stripe Documentation](https://stripe.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Bishal Sapkota**
- GitHub: [@bishal2059](https://github.com/bishal2059)

## 🙏 Acknowledgments

- Special thanks to all contributors
- Material-UI for the amazing component library
- Stripe for secure payment processing

---

**Made with ❤️ by Bishal Sapkota**

⭐ If you found this helpful, please give it a star!
