# ubus

## About

IUBAT Bus Tracking System to access live bus locations, schedules, and important updates.

## Quick Start

To get it running, follow the steps below:

### 1. Setup dependencies

```bash
# Install dependencies
pnpm i

# Configure environment variables
# There is an `.env.example` in the root directory you can use for reference
cp .env.example .env

# Push the Drizzle schema to the database
pnpm db:push
```

### 2a. When it's time to add a new UI component

Run the `ui-add` script to add a new UI component using the interactive `shadcn/ui` CLI:

```bash
pnpm ui-add
```

When the component(s) has been installed, you should be good to go and start using it in your app.

### 2b. When it's time to add a new package

To add a new package, simply run `pnpm turbo gen init` in the monorepo root. This will prompt you for a package name as well as if you want to install any dependencies to the new package (of course you can also do this yourself later).

The generator sets up the `package.json`, `tsconfig.json` and a `index.ts`, as well as configures all the necessary configurations for tooling around your package such as formatting, linting and typechecking. When the package is created, you're ready to go build out the package.

## References

The stack originates from [create-t3-app](https://github.com/t3-oss/create-t3-app).

## v1.0.1 (2025-12-29)

### Fix

- **next**: hydration error on test page
- **mqtt**: location parsing
- mobile screen overflow
- text size on mobile device
- console error
- local development font loading problem
- **nextjs**: spacing
- **css-to-twconfig**: fix types
- **nextjs**: hero section image overflow
- **nextjs**: hero section image overflow
- dark  mode colors
- foreground color
- hero section responsibness
- **nextjs**: navbar button spacing
- replace logo icon on theme change
- console error

### Refactor

- rename dashboard route to app
- replace fetch with ofetch
- mobile responsive dashboard
- **auth**: redirect to dashboard after login
- using isError to conditional render instead error
- protected routes
- dashboard link display on landing page
- replace query slate time to infinity
- rename to test route
- rename location query
- typo
- **mqtt**: mqtt topic & add provider
- re-arranged components
- **nextjs**: signin component
- **next**: change bus svg to png to reduce size
- **nextjs**: breaking into inner components
- **@ubus/hooks**: file structure
- shadcn cli add command, style: format code
- change color variable prefix
- move config into another files
