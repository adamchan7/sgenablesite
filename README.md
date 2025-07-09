# SG Enable - Your First Stop

A comprehensive Next.js application that provides an inclusive journey starter kit for organizations seeking to earn the SG Enabling Mark.

## Features

- **Six Pillars Framework**: Complete guidance across leadership, recruitment, workplace accessibility, employment practices, community engagement, and inclusive hiring metrics
- **Interactive Roadmap**: Visual progress tracking through the inclusion journey
- **Accessibility First**: Built-in high contrast mode and font size controls
- **Resource Library**: Downloadable toolkits, templates, and guides
- **Responsive Design**: Optimized for all devices from mobile to desktop

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                    # Next.js app router pages
├── components/            # Reusable UI components
├── lib/                  # Utility functions and data
├── public/assets/        # Downloadable resources
└── README.md
```

## Key Components

### Roadmap Component
The `Roadmap` component shows progress through the six pillars:
- **Props**: `active` (current pillar), `progress` (in-progress pillar), `done` (completed pillars array)
- **States**: done (green), progress (blue with animation), active (orange with glow), todo (gray)

### Accessibility Panel
Floating accessibility controls with:
- High contrast mode toggle
- Font size adjustment (85% - 125%)
- Settings saved to localStorage

### Resource Chip
Versatile component for different resource types:
- **file**: Downloads with file icon
- **link**: External links with link icon  
- **snippet**: Copy-to-clipboard functionality

## Content Management

### Editing Pillar Content
Update pillar information in `/lib/pillars.ts`:

```typescript
export const pillars: Pillar[] = [
  {
    id: 1,
    title: "Your Pillar Title",
    summary: "Brief description of pillar content",
    why: "Why this pillar matters",
    quickLinks: ["Link 1", "Link 2"],
    route: "/your-route"
  }
];
```

### Adding New Pillar Pages
1. Create new page file in `/app/[pillar-name]/page.tsx`
2. Use the placeholder template as starting point
3. Add route to pillar data in `/lib/pillars.ts`

## Accessibility Features

### High Contrast Mode
- Activated via accessibility panel
- CSS custom properties for theming
- Stored in localStorage for persistence

### Font Size Controls
- Adjustable from 85% to 125% of base size
- CSS custom property `--base-font` controls scaling
- Affects all text elements proportionally

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Focus indicators visible in high contrast mode
- Logical tab order throughout the interface

## Deployment

The project is configured for static export and can be deployed to any static hosting service:

```bash
npm run build
```

For Vercel deployment:
```bash
vercel --prod
```

## Assets

Place downloadable resources in `/public/assets/`:
- PDF guides and toolkits
- Document templates (.docx, .xlsx)
- Video content (.mp4)
- Reference materials

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Update content in `/lib/pillars.ts`
2. Add new resources to `/public/assets/`
3. Create new pillar pages following existing patterns
4. Test accessibility features across different devices

## License

This project is licensed under the MIT License.