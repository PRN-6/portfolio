# Simple Portfolio (React + Vite)

A free, open-source portfolio website template built with React and Vite. Use it to
showcase your work, services, and contact information.

## Features

- Responsive single-page portfolio layout
- Sections: Hero, About, Services, Projects, Contact, Footer
- Tabbed About section (Skills / Experience / Education)
- Smooth scrolling navigation
- Easy to customize data files

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Scripts

- `npm run dev` - start the development server
- `npm run build` - build for production
- `npm run preview` - preview the production build
- `npm run lint` - run ESLint

## Customizing

- Personal name/intro: `src/components/hero/Hero.jsx`
- About text, skills, experience, education: `src/components/about/About.jsx`
- Services: `src/assets/services_data.js`
- Projects: `src/assets/mywork_data.js` (add your images to `src/assets`)
- Contact details: `src/components/contact/Contact.jsx`
- Replace images in `src/assets/` (profile picture, project screenshots, logo)
- Resume link: `src/components/hero/Hero.jsx` and `src/components/about/About.jsx`

## Deploying

Run `npm run build`. The output in `dist/` can be deployed to any static host
(Vercel, Netlify, GitHub Pages, etc.).

## License

Free to use for personal and commercial portfolios.
