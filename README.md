# Data Scientist Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Perfect for showcasing data science projects, skills, and professional experience.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Powered by Framer Motion
- **Data Science Focused**: Sections tailored for data scientists
- **Project Showcase**: Display projects with GitHub links, presentations, and blog posts
- **Contact Form**: Functional contact form with validation
- **Blog Integration**: Showcase Medium articles and technical writing
- **Skills Visualization**: Interactive skill bars and categories

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Router** - Client-side routing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio_website
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
   Navigate to `http://localhost:5173`

## 🎨 Customization

### Personal Information

Update the following files with your information:

#### 1. Hero Section (`src/components/Hero.jsx`)
- Replace `[Your Name]` with your actual name
- Update the description and statistics
- Modify the call-to-action buttons

#### 2. About Section (`src/components/About.jsx`)
- Update the profile image (replace the placeholder with your photo)
- Modify the experience timeline
- Update the statistics

#### 3. Skills Section (`src/components/Skills.jsx`)
- Customize skill categories and proficiency levels
- Add or remove skills based on your expertise
- Update the additional skills list

#### 4. Projects Section (`src/components/Projects.jsx`)
- Replace project data with your actual projects
- Update GitHub links, presentation links, and blog post links
- Add your own project images
- Modify project descriptions and technologies

#### 5. Blog Section (`src/components/Blog.jsx`)
- Replace blog post data with your Medium articles
- Update Medium profile URL
- Add your own blog post images and descriptions

#### 6. Contact Section (`src/components/Contact.jsx`)
- Update contact information (email, phone, location)
- Replace social media links with your profiles
- Customize the contact form behavior

#### 7. Footer (`src/components/Footer.jsx`)
- Update social media links
- Modify the footer links and services

### Styling

#### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... customize primary colors
  },
  dark: {
    50: '#f8fafc',
    100: '#f1f5f9',
    // ... customize dark theme colors
  }
}
```

#### Fonts
The website uses Inter font by default. You can change it in `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Your-Font', 'system-ui', 'sans-serif'],
}
```

### Images

Replace placeholder images with your own:
- Profile photo in About section
- Project screenshots in Projects section
- Blog post images in Blog section

## 📱 Sections Overview

### 1. Hero Section
- Introduction with animated background
- Call-to-action buttons
- Key statistics display

### 2. About Section
- Personal information and photo
- Experience timeline
- Professional statistics

### 3. Skills Section
- Categorized skills with progress bars
- Additional skills tags
- Interactive animations

### 4. Projects Section
- Featured project showcase
- Project grid with categories
- Links to GitHub, presentations, and blogs

### 5. Blog Section
- Featured blog post
- Blog post grid
- Medium integration

### 6. Contact Section
- Contact form with validation
- Contact information
- Social media links
- Availability status

### 7. Footer
- Navigation links
- Social media icons
- Copyright information

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure custom domain if needed

### GitHub Pages
1. Add `"homepage": "https://yourusername.github.io/repo-name"` to `package.json`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`

## 📝 Content Guidelines

### Projects
- Include clear descriptions
- List technologies used
- Provide links to GitHub, demos, and documentation
- Add high-quality screenshots

### Blog Posts
- Write engaging titles
- Include read time estimates
- Add relevant categories
- Link to your Medium profile

### Skills
- Be honest about proficiency levels
- Group related skills together
- Include both technical and soft skills

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/
│   ├── About.jsx
│   ├── Blog.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) for icons
- [Unsplash](https://unsplash.com/) for placeholder images

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to open an issue or contact me directly.

---

**Happy coding! 🚀**
