// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

// That's the main route configuration and how the leftbar is generated
// export const ROUTES: EachRoute[] = [
//   {
//     title: "Getting Started",
//     href: "/getting-started",
//     noLink: true,
//     items: [
//       { title: "Introduction", href: "/introduction" },
//       {
//         title: "Installation",
//         href: "/installation",
//       },
//       { title: "Quick Start Guide", href: "/quick-start-guide" },
//       {
//         title: "Project Structure",
//         href: "/project-structure",
//       },
//       {
//         title: "Components",
//         href: "/components",
//         items: [
//           { title: "Stepper", href: "/stepper" },
//           { title: "Tabs", href: "/tabs" },
//           { title: "Note", href: "/note" },
//           { title: "Code Block", href: "/code-block" },
//           { title: "Image & Link", href: "/image-link" },
//           { title: "Custom", href: "/custom" },
//         ],
//       },
//       { title: "Themes", href: "/themes" },
//       {
//         title: "Customize",
//         href: "/customize",
//       },
//     ],
//   },
// ];

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Installation", href: "/installation" },
      // { title: "Adding Features", href: "/adding-features" },
      // {
      //   title: "Understanding The Architecture",
      //   href: "/understanding-the-architecture",
      // },
    ],
  },
  {
    title: "Development Guide",
    href: "/development-guide",
    noLink: true,
    items: [
      { title: "Adding Page", href: "/adding-page" },
      {
        title: "Creating Customizable Components",
        href: "/creating-customizable-components",
      },
      {
        title: "Styling with ShadcnUI & Tailwind",
        href: "/styling-with-shadcnui-and-tailwind",
      },
      { title: "Setting up API Routes", href: "/setting-up-api-routes" },
      { title: "Environment Variables", href: "/environment-variables" },
      {
        title: "Form Handling & Validation",
        href: "/form-handling-and-validation",
      },
      {
        title: "Custom Hooks & Utility Functions",
        href: "/custom-hooks-and-utility-functions",
      },
      { title: "Testing & Debugging", href: "/testing-and-debugging" },
      { title: "Optimazing Performance", href: "/optimizing-performance" },
      {
        title: "Error Handling & Logging",
        href: "/error-handling-and-logging",
      },
      { title: "SEO & Metadata", href: "/configuring-seo-and-metadata" },
      {
        title: "Git & Version Control",
        href: "/working-with-git-and-version-control",
      },
      { title: "CI/CD Vercel", href: "/cicd-with-vercel" },
      { title: "Deploying", href: "/deploying-to-production" },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
