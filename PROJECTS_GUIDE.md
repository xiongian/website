# Projects Section - Quick Guide

## 📁 Where to Add Your Project Data

Edit this file: **`src/data/projects.ts`**

## 🎯 How to Populate Projects

1. **Add your project images** to `src/assets/`
2. **Import them** at the top of `src/data/projects.ts`
3. **Update each project object** in the `projects` array

### Example:
```typescript
import myProjectImage from '../assets/my-project.png';

{
  id: 'unique-id',
  title: 'My Project Name',
  description: 'One-line brief description',
  fullDescription: 'Full multi-sentence description...',
  image: myProjectImage,
  githubUrl: 'https://github.com/xiongian/my-project',
  tags: ['React', 'TypeScript', 'Node.js'],
  borderColor: '#244A00', // Green or '#FFC36E' for yellow
}
```

## 🎨 Customization Options

### Border Colors
- **Green**: `'#244A00'`
- **Yellow**: `'#FFC36E'`
- Or use any hex color you want!

### Tags
- Add as many tags as you want
- Overflow is handled automatically (shows "+N" for extra tags)
- Tags are styled as green rectangles

### Grid Gap
To adjust spacing between cards, edit **`src/styles/projects.css`** line 29:
```css
gap: 2rem; /* Change this value */
```

## 🎬 Features Included

✅ 3×3 grid layout (70vw width)
✅ 345×306px aspect ratio cards
✅ 8px customizable border per project
✅ Faint white glow on hover
✅ GitHub icon (inline with title)
✅ Tag overflow handling ("+N" indicator)
✅ Click to expand modal (50vw width)
✅ Dark overlay background
✅ Fade-in animation
✅ Click anywhere or press Escape to close
✅ Responsive design

## 🚀 Component Structure

```
ProjectsSection (main container)
  ├── ProjectCard (each card in grid)
  └── ProjectModal (expanded overlay)
```

## 📝 Type Definitions

Located in **`src/types/project.ts`** - already set up for you!

---

**All designs match your reference images! Ready to populate with your projects.** 🎨
