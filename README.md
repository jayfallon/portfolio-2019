[![Netlify Status](https://api.netlify.com/api/v1/badges/43e18337-0aa6-4b0f-8341-3d424227693b/deploy-status)](https://app.netlify.com/sites/hopeful-joliot-ccc9fc/deploys)

# Jay Fallon - Portfolio 2019

An update to my portfolio as a device-responsive Progressive Web Application.

## Technologies Used

-   [Next.js PWA Boilerplate](https://next-pwa-boilerplate.now.sh)
-   [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces
-   [Styled Components](https://www.styled-components.com/) - Use the best bits of ES6 and CSS to style your apps without stress
-   [Next.js](https://nextjs.org/) - A minimalistic framework for server-rendered React applications
-   [ZEIT Now 2](https://zeit.co/now) for hosting the app on the web with auto-scaling, auto-renewing of SSL certs, and the ability to add any lambda functions in any other language

## Run locally

### One-Time Setup

Must have [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [Node.js](https://nodejs.org/en/) installed:

1. `git clone https://github.com/jayfallon/portfolio-2019.git`
2. `npm i`
3. Replace all images in `https://s3.amazonaws.com/jayfallon-portfolio-2019/graphics/` with your desired app icons, splash screens, and thumbnail for social sharing. If you have Sketch, you can use the artboards included in `./graphics.sketch`. Ensure that all replacement graphics include the same filenames, file type, and dimensions.

### Run

`npm run dev` and go to http://localhost:3000

## Deploying

### One-Time Setup

1. Make an account on [ZEIT](https://zeit.co).
2. Install Zeit’s Now CLI: `npm install -g now`
3. Change the name and alias on `now.json` to your unique string. If you don’t have a full domain with ZEIT, `yourUniqueString.now.sh` will the domain.
4. Replace the `next-pwa-boilerplate` inside `https://next-pwa-boilerplate.now.sh` in `./pages/_document.js` with the same string as the previous step.

### Deploy

`npm run deploy`
