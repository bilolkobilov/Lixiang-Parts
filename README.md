# Lixiang Parts - React E-Commerce Catalog

## Project Overview

Lixiang Parts is a modern, responsive web application for showcasing automotive parts. Built with React, TypeScript, Tailwind CSS, and Firebase, it provides an intuitive platform for browsing and managing products.

## Key Features

- 🚗 Product Gallery with Responsive Design
- 🔍 Advanced Filtering System
- 📱 Mobile-Friendly Interface
- 🔒 Simple Admin Panel for Product Management
- 💨 Smooth Animations and Transitions

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Firebase Firestore
- React Router
- React Icons

## Prerequisites

- Node.js (v18+)
- npm or yarn
- Firebase Account

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/lixiang-parts.git
cd lixiang-parts
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

### 4. Run the Application
```bash
npm start
# or
yarn start
```

## Deployment

### Vercel Deployment
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## Security Considerations

- Implement proper authentication for the admin panel
- Use environment variables for sensitive configuration
- Regularly update dependencies

## Customization

- Modify color scheme in `tailwind.config.js`
- Adjust product categories in `types/Product.ts`
- Customize Telegram integration in `utils/telegramHelper.ts`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - [Your Email]

Project Link: [https://github.com/yourusername/lixiang-parts](https://github.com/yourusername/lixiang-parts)