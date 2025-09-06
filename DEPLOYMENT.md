# Deployment Guide

## Quick Start
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build for production: `npm run build`

## Deployment Options
- **Netlify**: Drag & drop dist folder
- **Vercel**: Connect GitHub repo
- **GitHub Pages**: Use gh-pages package
- **Manual**: Upload dist folder to web server

## Customization
- Update personal info in components
- Replace placeholder images
- Modify colors in tailwind.config.js
- Add your own projects and skills

## Contact Form
Currently shows alert. To make functional:
1. Create backend API endpoint
2. Update onSubmit function in Contact.tsx
3. Use email service like SendGrid

Your portfolio is ready to deploy! 🚀
