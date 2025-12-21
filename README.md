# Vanilla JS Template

Minimal Vite vanilla template.

## 📦 Stacks

- ⚡️ **Vite 7** - Build tool
- 🎨 **PostCSS** - autoprefixer, cssnano, preset-env
- 🔍 **Biome** - Linter & formatter (JS/TS/JSON)
- ✨ **Prettier** - Formatter (CSS/HTML)
- 🗂️ **Path Alias** - `@` → `./src`

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/your-username/vanilla-template.git my-project
cd my-project

# Clean git
rm -rf .git && git init

# Install
pnpm install

# Dev
pnpm dev
```

## 📜 Scripts

```bash
# Development
pnpm dev          # Start dev server
pnpm build        # Build production
pnpm preview      # Preview build

# Code Quality
pnpm lint         # Lint code
pnpm lint:fix     # Fix lint issues
pnpm format       # Format JS/TS/JSON (Biome)
pnpm format:css   # Format CSS (Prettier)
pnpm format:html  # Format HTML (Prettier)
pnpm format:all   # Format all
pnpm check        # Lint + format (Biome)

# Maintenance
pnpm clean        # Clean dist
pnpm clean:all    # Clean dist + node_modules
pnpm reinstall    # Clean all + reinstall
```

## 📁 Structure

```
├── public/              # Static assets
├── src/
│   ├── assets/          # Processed assets (optimized)
│   ├── css/
│   │   ├── base/
│   │   ├── components/
│   │   └── index.css
│   └── js/
│       ├── lib/
│       ├── modules/
│       ├── services/
│       ├── utils/
│       └── main.js
├── .env
├── .prettierrc.json
├── biome.json
├── postcss.config.js
└── vite.config.js
```

## 🔧 Config

### Path Alias

```javascript
// Before
import helper from '../../utils/helper.js'

// After
import helper from '@/js/utils/helper.js'
```

### Env Variables

```javascript
// .env
VITE_APP_TITLE=My App

// Access
console.log(import.meta.env.VITE_APP_TITLE)
```

### Build Target

```javascript
// vite.config.js
target: 'baseline-widely-available'  // Chrome 107+, Safari 16+, Firefox 104+
```

## 📝 Notes

- **Assets:** `src/assets/` cho optimization, `public/` cho static
- **Secrets:** Dùng `.env.local` (gitignored)
- **Biome:** tabs, 100 width, single quotes
- **Prettier:** align với Biome config

## 📄 License

MIT
