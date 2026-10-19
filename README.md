# Bureau Graphics Website

A multi-page Bureau Graphics website built with Next.js, React, TypeScript and Tailwind CSS.

## Run it in VS Code

Requirements: Node.js 20.9 or newer. Node.js 24 works.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production checks

```bash
npm run lint
npm run build
npm run start
```

## Project structure

```text
app/
  page.tsx                    Home
  services/page.tsx           Services overview
  services/[slug]/page.tsx    Individual service pages
  aviation-printing/page.tsx  Aviation printing
  work/page.tsx               Work categories
  about/page.tsx              About
  contact/page.tsx            Contact and quotations
components/                   Shared layout and UI components
data/site.ts                  Services, aviation items and client data
lib/contact.ts                Phone, email, WhatsApp and Maps links
public/                       Logo, hero image and client logos
```

## Updating contact links

Edit `lib/contact.ts`. WhatsApp messages are generated automatically and individual service pages include the service name in their quotation message.

## Adding photos

Place website images in `public/photos/`, then use Next.js `Image`:

```tsx
import Image from "next/image";

<Image src="/photos/example.jpg" width={1200} height={800} alt="Describe the image" />
```

Normal website photos are deployed with the code and do not require a database. A future customer file-upload form would require separate storage.

## Deploying on Vercel

Vercel detects Next.js automatically. Connect this GitHub repository and deploy the selected branch. Keep the live production domain on the approved production branch until the redesign is reviewed.
