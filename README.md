# TrueHue

**TrueHue** is a simple, mobile-friendly React prototype that helps users "find" their perfect foundation or concealer shade in a fun and glam way.

## Features

- Warm, glam gradient background
- Playfair Display SC font for the logo and elegant feel
- File upload for a selfie (no real image analysis, just a simulated match)
- Displays a randomly chosen foundation/concealer shade from a dummy catalog
- Soft, feminine, rose-gold accented UI with smooth hover effects
- Fully responsive for mobile and desktop
- Clean React functional components: `Header`, `Upload`, `ResultCard`, `Footer`
- Dummy catalog data stored in a simple JS array

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- npm (comes with Node)

### Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/truehue.git
   cd truehue
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
npm run build
```
This outputs an optimized static build to the `build/` folder.

## Deploying

You can deploy TrueHue to Netlify, Vercel, GitHub Pages, or any static hosting provider.

### Example: Deploy to Netlify

1. Push your code to GitHub.
2. Go to [Netlify](https://www.netlify.com/), log in, and click "New site from Git".
3. Connect your GitHub repo and follow the prompts.
4. Netlify will auto-detect the build command (`npm run build`) and publish your app.

## Project Structure

```
truehue/
  src/
    components/
      Header.js
      Upload.js
      ResultCard.js
      Footer.js
    App.js
    App.css
    index.js
  public/
    index.html
  package.json
  README.md
```

## Customization

- **Catalog values:**  
  Edit the `dummyCatalog` array in `App.js` to change your product/shade/brand options.
- **Branding:**  
  Update colors, font, or logo in `Header.js` and CSS for your own style.

## License

MIT

---

**Made with ❤️ for quick prototyping and beauty-tech fun!**