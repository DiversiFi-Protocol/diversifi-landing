# DiversiFi Landing Page

A modern, responsive landing page for DiversiFi built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Full-height sections**: Each section takes up the full viewport height and width
- **Animated hero background**: Support for animated GIF, WebM, or MP4 backgrounds
- **Shared background sections**: Sections 3 and 4 share the same background image with different overlays
- **Responsive design**: Mobile-first approach with responsive breakpoints
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **SEO optimized**: Proper meta tags and semantic HTML structure

## Section Structure

1. **Hero Section**: Animated background with main messaging and CTAs
2. **Explainer 1**: How it works section with feature highlights
3. **Explainer 2**: DeFi protocols section (top half of shared background)
4. **Explainer 3**: Institutions section (bottom half of shared background)
5. **Explainer 4**: White background section with risk management details
6. **Governance**: Community governance section with image background

## Getting Started

### Prerequisites

- Node.js 22+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd diversifi-landing
```

2. Use the correct Node.js version (if using nvm):

```bash
nvm use
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Background Assets

To complete the setup, you'll need to add the following assets to the `public/` directory:

- `hero-animation.webm` (or .gif/.mp4) - Animated background for hero section
- `shared-background.jpg` - Background image for sections 3 and 4
- `governance-background.jpg` - Background image for governance section

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: '#00ff88',    // Main brand color
  secondary: '#0066ff',  // Secondary accent
  dark: '#0a0a0a',      // Dark background
  'dark-gray': '#1a1a1a' // Secondary dark
}
```

### Typography

The project uses Inter font family, which can be changed in `tailwind.config.js` and `globals.css`.

### Content

All content is contained within the component files in `src/components/sections/`. Edit these files to update the messaging and content.

## Build and Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

### Start Production Server

```bash
npm start
# or
yarn start
```

### Deploy

The project can be deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main page component
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   └── sections/        # Individual page sections
│       ├── HeroSection.tsx
│       ├── Explainer1Section.tsx
│       ├── Explainer2Section.tsx
│       ├── Explainer3Section.tsx
│       ├── Explainer4Section.tsx
│       └── GovernanceSection.tsx
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - Modern React with hooks
- **PostCSS** - CSS processing
- **ESLint** - Code linting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
