# Vanilla JS Template

Basic vite vanilla template config to my personal preferences.

## 📦 Stacks

- ⚡️ **Vite 7** 
- 🎨 **PostCSS** - Modern CSS with autoprefixer, cssnano, preset-env
- 🔍 **Biome** - Linter & formatter 
- 🗂️ **Path Aliases** - Clean imports with `@` prefix
- 🌍 **Environment Variables** - `.env` support with Vite

## 🚀 Quick Start

### Clone & Setup

```bash
# Clone this template
git clone https://github.com/your-username/vanilla-template.git my-project

# Navigate to project
cd my-project

# Remove git history & reinitialize
rm -rf .git
git init
git add .
git commit -m "Initial commit"

# Install dependencies
npm install

# Code Quality
npm run lint         # Lint code
npm run lint:fix     # Fix lint issues
npm run format       # Format code
npm run check        # Lint + format

## 📁 Folder Structure

```
├── public/              # Static assets (copied as-is)
│   ├── favicon.ico      # → /favicon.ico
│   └── robots.txt       # → /robots.txt
│
├── src/
│   ├── assets/          # Processed assets (optimized, hashed)
│   │   ├── fonts/
│   │   ├── icons/
│   │   └── images/
│   │
│   ├── css/
│   │   ├── base/        # Typography, layout, utilities
│   │   ├── components/  # Component styles
│   │   ├── reset.css
│   │   ├── global.css
│   │   └── index.css
│   │
│   └── js/
│       ├── lib/         # Third-party integrations
│       ├── modules/     # Feature modules
│       ├── services/    # API, storage, etc.
│       ├── utils/       # Helpers, constants
│       └── main.js      # Entry point
│
├── .env                 # Environment variables
├── vite.config.js       # Vite configuration
├── postcss.config.js    # PostCSS configuration
└── biome.json           # Biome configuration
```

## 🔧 Configuration

### Path Aliases

Import với `@` thay vì relative paths:

```javascript
// ❌ Before
import helper from '../../utils/helper.js'

// ✅ After
import helper from '@utils/helper.js'
```

**Available aliases:**
- `@` → `./src`
- `@css` → `./src/css`
- `@js` → `./src/js`
- `@utils` → `./src/js/utils`
- `@modules` → `./src/js/modules`
- `@services` → `./src/js/services`
- `@lib` → `./src/js/lib`
- `@assets` → `./src/assets`

### Environment Variables

Variables prefixed with `VITE_` are exposed to client-side code:

```javascript
// Access in code
console.log(import.meta.env.VITE_APP_TITLE)
console.log(import.meta.env.MODE)  // 'development' or 'production'
```

- `.env` - Committed to git (no secrets)
- `.env.local` - For secrets (gitignored)
- Production - Set env vars in hosting dashboard


## 🎨 Assets Handling

### `src/assets/` (Recommended)
- ✅ Optimized & hashed filenames
- ✅ Cache busting
- ✅ Tree-shaking (only used files)

```javascript
import logo from '@assets/images/logo.png'
// → /assets/logo-a3f2b9c1.png
```

### `public/` (Static files)
- ✅ Fixed URLs
- ❌ No optimization

```html
<img src="/favicon.ico">
<!-- → /favicon.ico -->
```

## 🏗️ Build Configuration

```javascript
// vite.config.js
{
  target: ['es2022', 'chrome89', 'firefox89', 'safari15'],
  cssMinify: false,  // Using cssnano in PostCSS
  sourcemap: process.env.NODE_ENV === 'production' ? 'hidden' : true,
  minify: 'esbuild'  
}
```

## 📝 Best Practices

1. **Imports:** Use path aliases for cleaner code
2. **Assets:** Store in `src/assets/` for optimization
3. **Env vars:** Use `.env.local` for secrets (not committed)
4. **CSS:** Organize by base/components structure
5. **Code quality:** Run `npm run check` before commit


## 📄 License

MIT

---

