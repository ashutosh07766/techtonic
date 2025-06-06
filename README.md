# Lookbook Project

A modern, interactive lookbook application built with React and Vite, featuring a beautiful UI with smooth media navigation and product showcase capabilities.

## Features

- Interactive media viewer with swipe and click navigation
- Smooth transitions between looks and media items
- Product showcase integration
- Responsive design with Tailwind CSS
- Modern gradient text effects and animations

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Lucide React (for icons)
- ESLint for code quality
- PostCSS for CSS processing

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd [your-project-name]
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` by default.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To preview the production build:

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
src/
  ├── components/
  │   ├── Lookbook.jsx      # Main lookbook component
  │   └── MediaViewer.jsx   # Media display component
  ├── App.jsx
  └── main.jsx
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 
