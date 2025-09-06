# W.S. Weerasinghe - Personal Portfolio Website

A modern, responsive, and interactive personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and engaging animations
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance**: Optimized with modern React practices and efficient animations
- **Accessibility**: ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Icons**: React Icons
- **Development**: ESLint, TypeScript

## 📱 Sections

1. **Hero Section**: Introduction with animated text and call-to-action buttons
2. **About**: Personal information and profile summary
3. **Skills**: Interactive skill cards with proficiency levels
4. **Education**: Educational background and certifications
5. **Projects**: Showcase of featured projects (WildRide Udawalawe)
6. **Contact**: Contact form and contact information
7. **Footer**: Social links and navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`. You can modify the primary colors and other theme values.

### Content
Update the content in each component file to match your personal information:
- `Hero.tsx`: Update name, title, and tagline
- `About.tsx`: Modify personal description and profile information
- `Skills.tsx`: Update skills and proficiency levels
- `Education.tsx`: Modify educational background and certifications
- `Projects.tsx`: Add your own projects
- `Contact.tsx`: Update contact information

### Images
Replace placeholder images with your own:
- Profile photo in the About section
- Project screenshots in the Projects section
- Favicon and social media images

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first design approach
- Responsive navigation with mobile menu
- Adaptive layouts for different screen sizes
- Touch-friendly interactions

## 🎭 Animations

Framer Motion is used for:
- Page load animations
- Scroll-triggered animations
- Hover effects and micro-interactions
- Smooth page transitions

## 🔧 Configuration

### Tailwind CSS
Custom animations and components are defined in `src/index.css` using Tailwind's `@layer` directive.

### TypeScript
Type definitions are included for all components and form data.

## 📦 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Education.tsx   # Education section
│   ├── Projects.tsx    # Projects section
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Footer component
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🌐 Deployment

The website can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the `gh-pages` package
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Name**: W.S. Weerasinghe
- **Email**: wasanasandaruwani0804@gmail.com
- **Phone**: +94 784693472
- **Location**: Embilipitiya, Sri Lanka
- **GitHub**: [github.com/wasanasandaruwani](https://github.com/wasanasandaruwani)
- **LinkedIn**: [linkedin.com/in/wasana-sandaruwani-949672377](https://linkedin.com/in/wasana-sandaruwani-949672377)

---

Built with ❤️ using React, TypeScript, Tailwind CSS, and Framer Motion
