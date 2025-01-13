## What is this project?

This is a sample UI for what a webpage editor might look like, such as WordPress or Wix. Similar to Shadcn UI [examples](https://ui.shadcn.com/examples), this is just a sample UI and there is no functionality for anything on the screen. It is nonetheless responsive and I've added a few interactions already for if/when functionality is added, such as draggable widgets from the sidebar and edit buttons appearing on the page editor canvas portion of the webpage editor.

## Live Application Link

The live webapp can be found [here](https://gradial-webpage-editor.vercel.app/)

## High Level Decisions

| Decision                      | Reasoning                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Next.js**                   | There is no need for Next for this project - as stated before, this is just a sample UI, any React framework would work. I have recently been using Next for other projects, so I'm already comfortable with its folder structure and some of its nuances, though this project is using the recently released latest version, Next 15, which supports React 19.                                                                                                                                       |
| **TypeScript**                | I love TypeScript - I try to use it whenever possible. For rapid prototyping projects, it may seem unwarranted as using JavaScript would likely cross the finish line of such a project sooner, but using TypeScript has made me into a better Software Engineer by being much more vigilant about the types of all code I write. It has prevented many unnecessary errors, breaking changes, or unintended side effects of code I've written in the past, and I opt to use it whenever possible now. |
| **MaterialUI**                | For rapid prototyping of interfaces, MaterialUI is my go-to. It has just about every component already I'd generally want to use in a given application. I combined the components' `sx` attributes along with my preferred CSS solution, CSS modules, to achieve the desired layouts and effects.                                                                                                                                                                                                    |
| **Vercel Deployment/Hosting** | It's no secret that Next, a Vercel product, mingle together seamlessly. Deploying Next projects is extremely easy on Vercel's platform, simply at the click of a button. Since this is a project with only static content, another option would be to build and host the static files on GitHub Pages, but I opted for Vercel as it's significantly quicker and easier to do so.                                                                                                                      |
| **No Unit Tests**             | As mentioned before, this project is just a samaple UI without any functionality. Therefore, integrating unit tests for this project felt a little unnecessary as the tests would just affirm the presence, or lack thereof, of elements on the screen.                                                                                                                                                                                                                                               |

## How to Run the App?

General instructions for running the project can be found below in the `create-next-app`'s default generated README:

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
