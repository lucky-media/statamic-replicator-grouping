This is a [Statamic](https://www.statamic.dev/) project bootstrapped with TailwindCSS and AlpineJS.

## Getting Started

To start you need first to install the required composer packages by running:

```bash
composer install
```

After that you need to run the following commands:

```bash
cp .env.example .env
php artisan key:generate
```

The folling command makes a new user (make sure its super admin)

```bash
php please make:user
```

To install the required node packages first do an install:

```bash
npm install
```

To run the development server

```bash
npm run watch
```

## Fonts

This project uses @fontsource to install Google Fonts as NPM packages in order to avoid penalties in Google Lighthouse.
To browse the fonts you can [go here](https://fontsource.github.io/search-directory/), or you can checkout the [@fontsource](https://github.com/fontsource/fontsource) on Github.

After you have installed your preffered font you can import it to `_app.js`:

```js
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'
```

## Isues

If you have cloned an existing project, and you can't open the website run the following command:

```bash
php artisan optimize:clear
```


## Learn More

To learn more about Statamic, Tailwindcss or Alpine take a look at the following resources:

- [Statamic Documentation](https://statamic.dev)
- [Tailwindcss Documentation](https://tailwindcss.com)
- [Alpine.js Documentation](https://github.com/alpinejs/alpine)

