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
    href: "/website/getting-started",
    noLink: true,
    items: [
      { title: "Overview", href: "/README" },
      { title: "Project Structure", href: "/project-structure" },
    ],
  },
  {
    title: "Project Architecture",
    href: "/website/project-structure",
    noLink: true,
    items: [
      { title: "Project Structure", href: "/overview" },
      { title: "Architecture", href: "/architecture" },
    ],
  },
  {
    title: "Authentication",
    href: "/website/authentication",
    noLink: true,
    items: [
      { title: "Overview", href: "/overview" },
      { title: "Architecture", href: "/architecture" },
      { title: "Components", href: "/components" },
      { title: "Services", href: "/services" },
      { title: "Session Management", href: "/session" },
      { title: "Security", href: "/security" },
    ],
  },
  {
    title: "Components",
    href: "/website/components",
    noLink: true,
    items: [{ title: "Overview", href: "/overview" }],
  },
  {
    title: "API Services",
    href: "/website/api-services",
    noLink: true,
    items: [{ title: "Overview", href: "/overview" }],
  },
  {
    title: "Development",
    href: "/website/development",
    noLink: true,
    items: [
      { title: "Overview", href: "/overview" },
      { title: "Configuration", href: "/configuration" },
    ],
  },
  {
    title: "UI & UX",
    href: "/website/ui-ux",
    noLink: true,
    items: [
      { title: "Design System", href: "/design-system" },
      { title: "Loading UX", href: "/loading-ux" },
      { title: "Navigation", href: "/navigation" },
    ],
  },
  {
    title: "Advanced Features",
    href: "/website/advanced-features",
    noLink: true,
    items: [
      { title: "Course Management", href: "/course-management" },
      { title: "Quiz System", href: "/quiz-system" },
      { title: "File Processing", href: "/file-processing" },
      { title: "Forms", href: "/forms" },
      { title: "Hooks", href: "/hooks" },
      { title: "State Management", href: "/state-management" },
    ],
  },
  {
    title: "Development Tools",
    href: "/website/development-tools",
    noLink: true,
    items: [
      { title: "TypeScript", href: "/typescript" },
      { title: "Testing", href: "/testing" },
      { title: "Performance", href: "/performance" },
      { title: "Deployment", href: "/deployment" },
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
