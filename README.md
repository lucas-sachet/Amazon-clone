<h1  align="center">Amazon Clone</h1>
</br>

This project is a clone of main intention(ecommerce) of Amazon app, it was build mainly with Next.JS/React.JS and Redux, using [firebase](https://firebase.google.com/) and [Next Auth](https://next-auth.js.org/) for login authentication with a custom page file, [Tailwind](https://tailwindcss.com/) to add the css directly on the `class` of each HTML tailwind looks for mobile first, so the site is entirely responsive, with it saving time on `.css` files.
Using the [FakeStore API](https://fakestoreapi.com/) to simulate the products, and process payments with [Stripe](https://stripe.com/) and [StripeCLI](https://stripe.com/docs/stripe-cli)

</br>

![gif](https://github.com/lucas-sachet/Amazon-clone/blob/main/public/videos/amzclone.gif)

</br>

<h2  align="center">Responsive</h2>

<p align="center">
  <img src="https://github.com/lucas-sachet/Amazon-clone/blob/main/public/images/3.png" width="700" title="medium">
  <br>
  <img src="https://github.com/lucas-sachet/Amazon-clone/blob/main/public/images/2.png" width="500" alt="small">
  <br>
  <img src="https://github.com/lucas-sachet/Amazon-clone/blob/main/public/images/mob.png" width="300" alt="mobile">
</p>

</br>

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
Then you need to configure the ```.env.local``` file and add:
- Google auth (need a project on google console).
- Stripe for the checkout page.
- Stripe CLI if you want to simulate the full transaction.

Create a firebase project and get the permissions json to the project root folder.

</br>

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

