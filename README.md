# 🛍️ ShopHub - Product List Application

A modern, performant product listing application built with React, TypeScript, and Tailwind CSS. Features infinite scroll, real-time search, category filtering, and a clean architecture following best practices.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Available Scripts](#available-scripts)
- [Testing](#testing)
- [Implementation Notes](#implementation-notes)
- [Future Enhancements](#future-enhancements)

## ✨ Features

### ✅ Implemented Features (As Per Requirements)

1. **Product Display with Grid Layout**
   - Responsive grid layout (1-4 columns based on screen size)
   - Product cards with image, title, price, and category
   - Hover effects and smooth animations
   - Lazy loading for images

2. **Search Functionality**
   - Real-time search across product titles
   - Instant results without page reload
   - Search input with icon

3. **Category Filtering**
   - Dynamic category buttons fetched from API
   - "All Products" option to show everything
   - Active state indication
   - Filters reset pagination automatically

4. **Skeleton Loaders**
   - Displayed during initial data fetch
   - Shown while loading more products
   - Smooth loading experience

5. **Responsive Design**
   - Mobile-first approach
   - Breakpoints: Mobile (1 col) → Tablet (2 col) → Desktop (3-4 col)
   - Optimized for all screen sizes

6. **State Management with Context API**
   - Centralized state management using React Context
   - Business logic separated into custom hooks
   - Clean architecture with separation of concerns

7. **Infinite Scroll**
   - Loads 8 products per page
   - Uses Intersection Observer API for performance
   - Automatic loading when scrolling to bottom
   - Loading indicator while fetching more items

8. **Unit Tests**
   - ProductCard component fully tested
   - Test file included: `ProductCard.test.tsx`
   - Additional test structure in place for other components

9. **TypeScript Integration**
   - 100% TypeScript coverage
   - Strict type checking enabled
   - Type-safe API calls and component props
   - Enhanced developer experience with IntelliSense

## 🚀 Tech Stack

- **React** - UI Library
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **React Testing Library** - Testing
- **Testing-library** - Test Runner
- **FakeStore API** - Mock Data Source

## 🏁 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd product-list-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `build` folder.

## 🏗️ Architecture

### Clean Architecture Principles

1. **Separation of Concerns**
   - Context: Presentation layer (provides data to components)
   - Custom Hooks: Business logic layer
   - Services: Data access layer
   - Components: UI layer

2. **Single Responsibility**
   - Each hook handles one concern (filtering, pagination, fetching)
   - Components focus only on rendering
   - Services handle only API calls

3. **Type Safety**
   - Strict TypeScript configuration
   - All functions and components fully typed
   - Compile-time error detection

### Data Flow

```
API (FakeStore)
    ↓
Service Layer (productApi.ts)
    ↓
Custom Hook (useProducts.ts) → Business Logic
    ↓
Context (ProductContext.tsx) → State Provider
    ↓
Components → UI Rendering
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run test suite |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run type-check` | Check TypeScript types without building |

## 🧪 Testing

### Run Tests

```bash
npm test
```

### Run Tests in Watch Mode

```bash
npm test -- --watch
```

### Test Coverage

```bash
npm test -- --coverage
```

### Example Test (ProductCard)

Located in `src/components/products/ProductCard/ProductCard.test.tsx`

```typescript
test('renders product information correctly', () => {
  render(<ProductCard product={mockProduct} />);
  
  expect(screen.getByText('Test Product')).toBeInTheDocument();
  expect(screen.getByText('$29.99')).toBeInTheDocument();
});
```

## 📝 Implementation Notes

### 1. ⚠️ Add to Cart Button

**Current Status:** UI only (not functional)

The "Add to Cart" button is present on each product card but currently **does not perform any action**. This is intentional as cart functionality was not part of the original requirements.

### 2. 🔍 Search Implementation

**Current Implementation:**
- Searches only product titles
- Case-insensitive matching
- Real-time filtering (no debounce)

**Possible Enhancements:**
- Add debouncing (300ms) for better performance
- Search in description and category fields
- Highlight matching text
- Show "no results" suggestions

### 3. 📄 Pagination vs Infinite Scroll

**Chosen Approach:** Infinite Scroll ✅

As per requirements, infinite scroll was implemented instead of traditional pagination.

### 4. 🎨 Skeleton Loaders

**Implementation:**
- Shows 8 skeleton cards on initial load
- Shows 4 skeleton cards when loading more items
- Matches product card dimensions
- Pulse animation for visual feedback

### 5. 🧪 Unit Tests

**Current Coverage:**
- ✅ ProductCard component fully tested

### 6. 🔄 State Management Choice

**Chosen:** React Context API ✅

**Why Context over Redux:**
- Simpler setup for this use case
- No external dependencies (except React)
- Sufficient for app's complexity level
- Better performance with proper optimization


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Developer Notes

### Performance Optimizations Implemented

- ✅ `React.memo()` for all components
- ✅ `useMemo()` for expensive calculations
- ✅ `useCallback()` for event handlers
- ✅ Lazy loading for images
- ✅ Intersection Observer for infinite scroll
- ✅ Debouncing (can be added for search)

### Code Quality

- ✅ TypeScript strict mode
- ✅ ESLint configured
- ✅ Prettier for code formatting
- ✅ Component-level test files
- ✅ Meaningful variable names
- ✅ Comments where necessary

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

**Built with using React + TypeScript + Tailwind CSS**