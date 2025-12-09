# AI Rules for Gano Shakh Application

## Tech Stack Overview

- **Frontend Framework**: React 18+ with TypeScript for type safety
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom configuration for utility-first styling
- **UI Components**: shadcn/ui library components (prebuilt and customizable)
- **Icons**: lucide-react for consistent iconography
- **State Management**: React Context API for language and theme management
- **Routing**: React Router for client-side navigation
- **Authentication**: Firebase Authentication for user management
- **Database**: Supabase for product data and storage
- **AI Integration**: Google GenAI (Gemini) for MycoDoc chat functionality

## Library Usage Rules

### Core UI Libraries
- **shadcn/ui**: Use for all standard UI components (buttons, cards, forms, etc.)
- **lucide-react**: Use exclusively for all icons throughout the application
- **Tailwind CSS**: Use for all styling - never write vanilla CSS except for special animations

### State Management
- **React Context**: Use for global state like language, theme, and user authentication
- **useState/useReducer**: Use for local component state management
- **No external state libraries**: Do not add Redux, Zustand, or similar libraries

### Data Fetching
- **Supabase client**: Use for all product data fetching and storage operations
- **Firebase client**: Use for authentication and real-time database operations
- **Native fetch**: Acceptable for simple API calls when needed

### AI & External Services
- **@google/genai**: Use exclusively for all Gemini AI interactions
- **Firebase SDK**: Use for authentication and database operations
- **Supabase SDK**: Use for storage and database operations

### Animation & Effects
- **Tailwind classes**: Use for simple transitions and animations
- **CSS keyframes**: Acceptable for complex animations when Tailwind is insufficient
- **No animation libraries**: Do not add Framer Motion, GSAP, or similar animation libraries

### Routing
- **React Router**: Use for all client-side routing
- **No additional routing libraries**: Do not add additional routing solutions

### Form Handling
- **React Hook Form**: Acceptable for complex forms
- **Native form handling**: Preferred for simple forms
- **No form libraries**: Do not add Formik or similar form libraries

### Data Visualization
- **Native SVG**: Use for simple charts and graphics
- **No visualization libraries**: Do not add Chart.js, D3, or similar libraries

### Internationalization
- **Custom LanguageContext**: Use existing implementation for all i18n needs
- **No i18n libraries**: Do not add react-i18next or similar libraries

### HTTP Requests
- **fetch API**: Use for all HTTP requests
- **No HTTP libraries**: Do not add axios or similar HTTP client libraries

### Testing
- **Vitest**: Use for unit testing
- **React Testing Library**: Use for component testing
- **No additional testing libraries**: Do not add Jest or Enzyme

### Code Quality
- **TypeScript**: Use strict typing for all components and functions
- **ESLint**: Follow existing configuration for code consistency
- **Prettier**: Use existing configuration for code formatting

## AI Interaction Guidelines

### MycoDoc AI (Gemini)
1. Always use the existing `geminiService.ts` for all AI interactions
2. Follow the system instruction format exactly as defined
3. Handle errors gracefully with user-friendly messages
4. Never expose API keys directly in components
5. Use the chat context pattern established in `ChatBot.tsx`

### Image Processing
1. When handling image uploads, always convert to base64
2. Follow the existing pattern in `ChatBot.tsx` for image submission
3. Validate image types before processing

### Response Formatting
1. Follow the 8-step response structure defined in the system instructions
2. Use proper markdown formatting as specified
3. Include relevant emojis as per the guidelines
4. Always recommend appropriate Gano Shakh products

## Component Structure Rules

1. **File Organization**:
   - Pages go in `src/pages/`
   - Components go in `src/components/`
   - Services go in `src/services/`
   - Contexts go in `src/contexts/`
   - Lib files go in `src/lib/`

2. **Component Design**:
   - Create new files for every new component
   - Keep components under 100 lines when possible
   - Use TypeScript interfaces for props
   - Implement proper error boundaries for critical components

3. **Styling**:
   - Use Tailwind CSS exclusively
   - Follow the existing color palette
   - Implement dark mode support for all components
   - Use responsive design patterns

4. **Performance**:
   - Use React.memo for components with static props
   - Implement useCallback for event handlers
   - Use useMemo for expensive calculations
   - Lazy load non-critical components

## Security Rules

1. **Environment Variables**:
   - Never commit API keys or secrets
   - Use Vite's env variable system
   - Follow the pattern in `vite.config.ts`

2. **User Data**:
   - Validate all user inputs
   - Sanitize data before displaying
   - Use Firebase security rules for database operations

3. **Authentication**:
   - Always check authentication state before sensitive operations
   - Use Firebase authentication methods exclusively
   - Implement proper logout functionality

## Deployment Rules

1. **Build Process**:
   - Use `npm run build` for production builds
   - Ensure all environment variables are set
   - Test build output before deployment

2. **Hosting**:
   - Optimize for static hosting (Vercel, Netlify, GitHub Pages)
   - Ensure proper routing configuration
   - Set cache headers appropriately

3. **Performance Optimization**:
   - Lazy load images and videos
   - Optimize asset sizes
   - Implement proper caching strategies