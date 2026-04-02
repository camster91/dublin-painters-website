# Task: Fix Next.js Subdirectory Deployment (basePath)

## Context
The application is being deployed to a subdirectory on Hostinger: `https://ashbi.ca/dublin-painters`.
Currently, the live site is broken because Next.js is looking for static assets (`/_next/...`) at the root domain (`https://ashbi.ca/_next/...`).

## Requirements
1. Modify `next.config.ts`.
2. Add `basePath: '/dublin-painters'` to the Next.js config object.
3. Keep the existing `output: "export"` and `images` settings.
