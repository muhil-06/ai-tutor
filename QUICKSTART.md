# AI Tutor - Quick Start Guide

## Project Successfully Created! 🎉

Your AI Tutor project is now fully set up with all dependencies installed.

## What's Included

✅ **Frontend**
- React 18 with modern hooks
- Vite for fast development
- Tailwind CSS for styling
- Zustand for state management
- React Router for navigation

✅ **Backend**
- Express.js server
- CORS enabled for cross-origin requests
- Mock AI responses (ready to integrate with OpenAI/Anthropic)
- Mock authentication system

✅ **Learning Style Adaptation**
- Visual learning style support
- Auditory learning style support
- Kinesthetic learning style support
- Reading/Writing learning style support

## Getting Started

### Option 1: Run Both Frontend & Backend (Recommended)

**Terminal 1 - Start the Frontend:**
```bash
npm run dev
```
Frontend will be available at: http://localhost:5173

**Terminal 2 - Start the Backend:**
```bash
npm run server
```
Backend will be available at: http://localhost:5000

### Option 2: Quick Test (Backend Only)
```bash
npm run server
```
Test the API: http://localhost:5000/health

### Option 3: Production Build
```bash
npm run build
npm start
```

## Features Ready to Use

### 1. User Authentication
- Register new accounts
- Login with email/password
- Logout functionality

### 2. Learning Style Selection
Choose from 4 learning styles:
- 👁️ **Visual** - Diagrams and visual representations
- 👂 **Auditory** - Conversational explanations
- 🎯 **Kinesthetic** - Hands-on examples
- 📚 **Reading/Writing** - Detailed notes

### 3. Concept Explanation
- Enter any topic
- Get explanations tailored to your learning style
- Save explanation history

### 4. AI Tutor Chat
- Ask questions in real-time
- Get responses adapted to your learning style
- Maintain conversation history

### 5. Learning Progress
- Track topics covered
- View learning history
- Monitor understanding levels

## Test Credentials

**For Quick Testing:**
- Email: test@example.com
- Password: password123

(Or create your own account)

## Next Steps to Customize

### 1. **Add Real AI Integration**
In `src/server.js`, replace the `generateAIResponse` function with actual API calls:

```javascript
// Example with OpenAI
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function generateAIResponse(prompt, learningStyle) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }]
  });
  return response.choices[0].message.content;
}
```

### 2. **Set Up Your Environment**
Create `.env` file:
```
OPENAI_API_KEY=your_key_here
NODE_ENV=development
PORT=5000
```

### 3. **Add Database**
Currently uses in-memory storage. Add MongoDB or PostgreSQL:
- Install database driver
- Replace users object in `src/server.js`
- Update API endpoints with database queries

### 4. **Implement Real Authentication**
- Add JWT token verification
- Implement refresh tokens
- Add password hashing (bcrypt)

## Project File Structure

```
ai-tutor/
├── src/
│   ├── api/               # Frontend API client
│   ├── components/        # React components
│   │   ├── Dashboard.jsx
│   │   ├── LearningStyleSelector.jsx
│   │   ├── TutorChat.jsx
│   │   ├── ExplainConcept.jsx
│   │   └── Navbar.jsx
│   ├── pages/            # Page components
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   └── RegisterPage.jsx
│   ├── store/            # Zustand state management
│   ├── utils/            # Utility functions
│   │   └── adaptationEngine.js
│   ├── styles/           # Global CSS
│   ├── App.jsx           # Main app
│   ├── main.jsx          # Entry point
│   └── server.js         # Express backend
├── public/               # Static assets
├── .env.example          # Environment template
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
└── package.json          # Dependencies
```

## Common Commands

```bash
# Development
npm run dev          # Start frontend dev server
npm run server       # Start backend server

# Production
npm run build        # Build for production
npm start            # Start production server

# Utilities
npm audit fix        # Fix vulnerabilities
npm install          # Install dependencies
```

## Troubleshooting

### Port Already in Use
- Frontend default: 5173
- Backend default: 5000

Change in `vite.config.js` or by setting PORT environment variable

### CORS Issues
Backend already has CORS enabled. If you get CORS errors, check:
- Backend is running on port 5000
- Frontend `VITE_API_URL` points to correct backend

### Module Not Found
Run `npm install` again to ensure all dependencies are installed

## Support & Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Express.js API](https://expressjs.com/api.html)
- [Zustand GitHub](https://github.com/pmndrs/zustand)

## Happy Learning! 🚀

Your AI Tutor platform is ready to help students learn in their preferred style!
