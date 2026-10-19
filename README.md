# Bureau Graphics Website

A responsive Bureau Graphics company website built with React, TypeScript, Vite and Tailwind CSS.

## Open it in VS Code

1. Extract the ZIP file.
2. Open VS Code.
3. Select **File > Open Folder** and choose `bureau-graphics-react`.
4. Open the VS Code terminal and run:

```bash
npm install
npm run dev
```

Vite will print a local address such as `http://localhost:5173`. Open it in your browser.

## Production build

```bash
npm run build
npm run preview
```

The finished static website is created inside the `dist` folder.

## Where to edit

- `src/App.tsx` contains the page sections and wording.
- `src/data.ts` contains the services, aviation products, process steps and client names.
- `src/components/Header.tsx` contains the navigation and dropdown menus.
- `src/styles.css` contains the design and responsive layout. It loads Tailwind CSS at the top.
- `public/` contains the logo, hero image and client logos.

## Adding photos

1. Put the image in `public/photos/` (create the folder if needed).
2. Use it in a React component like this:

```tsx
<img src="/photos/your-photo.jpg" alt="Describe the photo" />
```

No database is required for normal website images. They are included in the deployed site files.

## Deploying on Vercel

1. Push this folder to a GitHub repository.
2. In Vercel choose **Add New > Project** and import the repository.
3. Vercel should detect Vite automatically.
4. Confirm the build command is `npm run build` and output directory is `dist`.
5. Deploy, then connect `bureaugraphics.com` under the project's Domains settings.

## Current business details

- Phone and WhatsApp: `0763 333 311`
- Email: `bureaugraphicslimited@gmail.com`
- Address: Wilson Airport, Exit Lane, KAA Building No. 49, Nairobi
