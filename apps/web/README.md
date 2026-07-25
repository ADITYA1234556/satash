# Satash Community Care - Website

Professional website for Satash Community Care Projects Ltd - an independent provider of residential care and supported living services for adults with learning disabilities.

## Project Structure

```
apps/web/src/
├── components/          # Reusable React components
│   ├── ui/             # UI components (buttons, cards, etc.)
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Footer component
│   └── ...
├── pages/              # Page components (one per route)
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── ProjectsPage.jsx
│   └── [ProjectName]Page.jsx
├── layouts/            # Layout wrapper components
│   ├── MainLayout.jsx  # Main page layout
│   └── ...
├── config/             # Configuration files
│   └── site.config.js  # Site-wide configuration
├── constants/          # Application constants
│   ├── index.js
│   └── healthcare-terms.js
├── hooks/              # Custom React hooks
│   └── index.js
├── utils/              # Utility functions
│   ├── seo.js
│   ├── accessibility.js
│   └── classNameUtils.js
├── types/              # Type definitions (JSDoc)
├── styles/             # Global styles
│   └── globals.css
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Base styles
```

## Key Features

### Healthcare-Focused Design
- Professional terminology aligned with healthcare standards
- Accessibility (WCAG 2.1) compliance
- CQC regulatory compliance focus
- Person-centred care principles embedded in content

### Professional Components
- Reusable, well-organized components
- Consistent styling system
- Motion preferences respected
- Mobile-responsive design

### SEO Optimized
- Meta tags for healthcare keywords
- Semantic HTML structure
- Open Graph tags for social sharing

## Development

### Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run lint:warn    # Show all warnings
```

### Configuration
- **Vite**: Fast build tool configuration in `vite.config.js`
- **Tailwind CSS**: Design system configuration in `tailwind.config.js`
- **PostCSS**: CSS processing in `postcss.config.js`
- **ESLint**: Code quality in `eslint.config.mjs`

## Configuration Files

### Site Configuration (`src/config/site.config.js`)
Central configuration for:
- Organization details
- Service descriptions
- Care values and principles
- Regulatory compliance info
- Target audience
- Contact information
- Navigation structure
- Projects list

Update this file when changing organizational details, services, or projects.

### Healthcare Constants (`src/constants/healthcare-terms.js`)
- Professional healthcare terminology
- Regulatory standards definitions
- Support needs categories
- Care principles
- Safeguarding principles

## Best Practices

### Component Development
1. Keep components focused and reusable
2. Use custom hooks for stateful logic
3. Implement accessibility from the start
4. Follow consistent naming conventions

### Styling
- Use Tailwind CSS utility classes
- Follow the color palette from `tailwind.config.js`
- Respect motion preferences (`prefersReducedMotion`)
- Test in high contrast mode

### Forms & Interactions
- Use the `useFormState` hook for form management
- Add proper ARIA labels
- Validate on both client and server
- Show clear error messages

## Accessibility Requirements

All pages must:
- Have proper heading hierarchy (h1, h2, h3...)
- Include alt text for images
- Be keyboard navigable
- Support screen readers
- Have sufficient color contrast
- Respect motion preferences

## Service User Privacy & Safety

- Never display real personal information
- Use placeholder/generic names in examples
- Ensure data protection compliance (GDPR)
- No sensitive health information in public content
- Safeguarding information clearly displayed

## Testing

### Before Deployment
- [ ] Lighthouse audit (accessibility, performance, SEO)
- [ ] WAVE accessibility scan
- [ ] Mobile responsiveness test
- [ ] Link validation
- [ ] Form submission testing

## Deployment

Run the build script:
```bash
npm run build
```

Output goes to `dist/apps/web/`

## Support

For questions or updates about:
- **Organization info**: Update `src/config/site.config.js`
- **Services**: Update `SERVICES` in `src/config/site.config.js`
- **Projects**: Add/update project data in `PROJECTS` array
- **Healthcare compliance**: Review `src/constants/healthcare-terms.js`
