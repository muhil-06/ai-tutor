# AI Tutor

An intelligent tutoring platform that explains concepts adapted to each user's unique learning style.

## Features

- **Adaptive Learning Styles**: Detects and adapts to visual, auditory, kinesthetic, and reading/writing learning preferences
- **Personalized Explanations**: Generates explanations in the user's preferred learning format
- **Interactive Q&A**: Real-time interaction with an AI tutor
- **Progress Tracking**: Monitors learning progress and adjusts difficulty
- **Multi-Subject Support**: Covers various subjects and topics
- **Learning History**: Maintains records of topics covered and concepts learned

## Tech Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **React Router** - Navigation

### Backend
- **Node.js & Express** - Server
- **OpenAI API** - AI capabilities (extensible to other providers)
- **CORS** - Cross-origin support

## Project Structure

```
ai-tutor/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom hooks
│   ├── utils/          # Utility functions
│   ├── api/            # API client
│   ├── store/          # Zustand stores
│   ├── styles/         # Global styles
│   ├── App.jsx         # Main App component
│   ├── main.jsx        # Entry point
│   └── server.js       # Express server
├── .env.example        # Environment variables template
├── vite.config.js      # Vite configuration
├── package.json        # Dependencies
└── README.md           # This file
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- OpenAI API key (or alternative AI provider)

### Installation

1. Clone the repository:
```bash
cd ai-tutor
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```bash
cp .env.example .env
```

4. Add your API keys to `.env`:
```
OPENAI_API_KEY=your_key_here
```

### Development

Run both frontend and backend in development mode:

```bash
# Terminal 1 - Frontend (Vite dev server)
npm run dev

# Terminal 2 - Backend (Node.js server)
npm run server
```

The frontend will be available at `http://localhost:5173`
The backend API will be available at `http://localhost:5000`

### Production Build

```bash
npm run build
npm start
```

## Learning Styles Supported

1. **Visual**: Diagrams, charts, color-coded explanations, infographics
2. **Auditory**: Conversational tone, step-by-step explanations, analogies
3. **Kinesthetic**: Practical examples, hands-on activities, real-world applications
4. **Reading/Writing**: Detailed notes, lists, written definitions, comprehensive resources

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Learning Profile
- `GET /api/profile` - Get user profile and learning style
- `POST /api/profile/learning-style` - Set learning style preference
- `POST /api/profile/update` - Update user profile

### Tutoring
- `POST /api/tutor/explain` - Get explanation for a concept
- `POST /api/tutor/ask` - Ask a question to the tutor
- `POST /api/tutor/practice` - Get practice problems

### Progress
- `GET /api/progress` - Get learning progress
- `GET /api/history` - Get learning history

## Environment Variables

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 5000) |
| `NODE_ENV` | Environment (development/production) |
| `OPENAI_API_KEY` | OpenAI API key for AI features |
| `DATABASE_URL` | MongoDB connection string (optional) |
| `VITE_API_URL` | Backend API URL for frontend |

## Customization

### Adding New Learning Styles
Modify the learning style system in `/src/utils/adaptationEngine.js`

### Changing AI Provider
Update `/src/api/aiProvider.js` to integrate with your preferred AI service

### Styling
Customize Tailwind CSS in `tailwind.config.js`

## Future Enhancements

- [ ] Spaced repetition system
- [ ] Gamification and achievements
- [ ] Collaborative learning
- [ ] Mobile app
- [ ] Real-time collaboration
- [ ] Video explanations
- [ ] Code execution for programming concepts

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues, questions, or suggestions, please create an issue in the repository.
