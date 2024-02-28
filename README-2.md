# LAB - 38

Project: Cookie Stand Admin Version 2

Author: Andrea Riley(Thiel)

## Feature Tasks

The specs for lab are screen shots Cookie Stand Admin Version 2 and Cookie Stand Admin No Stands

pages/Index.js should return top level component <CookieStandAdmin>

<CookieStandAdmin> details…

- Will contain the following components:
  - <Head>, <Header>, <main>, <CreateForm>, <ReportTable>, and<Footer> component that matches spec.

Import time slot data from supplied data.js file.

<CreateForm> component details…

- Object should have hourly_sales property with hard coded [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]

<ReportTable> details…

- If reports is empty then render <h2>No Cookie Stands Available</h2>
- If reports is not empty then render a table with thead,tbody and tfoot components.

Components should render to match spec.

Style all components using TailwindCSS utility classes to match spec.

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
