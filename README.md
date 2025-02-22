# Next.js & NextUI Template

This is a template for creating applications using Next.js 14 (app directory) and NextUI (v2).

[Try it on CodeSandbox](https://githubbox.com/nextui-org/next-app-template)

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## How to Use

### Use the template with create-next-app

To create a new project based on this template using `create-next-app`, run the following command:

```bash
npx create-next-app -e https://github.com/nextui-org/next-app-template
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@nextui-org/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

For the single-page and larger view, you can implement it in your CSS or Tailwind configuration by adjusting margins, padding, and widths for the main content.

For example, you can apply a full-screen layout by adding a wrapper that ensures the page takes the full viewport height and width. Here's an example of what the styling could look like:

```html
<div
  class="w-full h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800"
>
  <h1 class="text-4xl font-bold mb-6">Next.js & NextUI Template</h1>
  <p class="text-lg max-w-3xl text-center mb-8">
    This is a template for creating applications using **Next.js 14** (app
    directory) and **NextUI v2**.
  </p>
  <a
    href="https://githubbox.com/nextui-org/next-app-template"
    class="text-blue-500 underline"
    >Try it on CodeSandbox</a
  >
</div>
```
