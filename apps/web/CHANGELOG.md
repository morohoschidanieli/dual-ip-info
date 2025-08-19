## [2.0.1] - 19-08-2025

- 🔧 chore: use `createHashRouter` instead of `createBrowserRouter` to avoid 404 error code while refreshing on a specific route
- ✨ feat: integrate Google Analytics
- 🔧 chore: use local Encode Sans Semi Expanded font instead of `fontsource-variable` package

## [2.0.0] - 23-07-2025

- ✨ feat: add new site design with background pattern and responsive layout
- ✨ feat: add Footer section with external links and app info
- ✨ feat: add Privacy Policy page with structured i18n content
- ✨ feat: add About Privacy section with icons and responsive cards
- ✨ feat: extract privacy content into `en.ts` translation file
- ✨ feat: map privacy sections dynamically in PrivacyPage
- ✨ feat: add section containers for Contribute and Donate
- 🔧 chore: restructure StyleProvider using Chakra `createSystem`
- 🔧 chore: separate theme logic into `@theme/system.ts`
- 🔧 chore: remove invalid Theme wrapper and fix fast-refresh error
- 🔧 chore: optimize layout with consistent Flex + Box structure
- 🔧 chore: update font setup with `Encode Sans Semi Expanded`

## [1.0.0] - 18-07-2025

- 🔧 chore: update margins and paddings
- 🔧 chore: update logo
- 🔧 chore: add html for google site verification
- 🔧 chore: update vite base for custom domain
- 🔧 chore: update pages artifact to v4
- ✨ feat: add envs in github actions
- ✨ feat: add meta tags for index.html
- ✨ feat: add Features section
- ✨ feat: add Reviews section
- ✨ feat: add Description section
- ✨ feat: add customer review components and data
- ✨ feat: responsive layout with Chakra UI
- 🔧 chore: add favicon via shared static logo
- 🔧 chore: configure path alias for `@shared/assets`
- 🔧 chore: define `VITE_APP_TITLE` in env and use in HTML `<title>`
- 🔧 chore: update translations and metadata
- ✨ feat: integrate dynamic environment loading from `.env.shared`
- ✨ feat: setup shared asset support with `vite-plugin-static-copy`
- 🔧 chore: add workflows on pull requests
- 🔧 chore: add vitest
- 🔧 chore: add monorepo setup, changelog file and version.txt file
