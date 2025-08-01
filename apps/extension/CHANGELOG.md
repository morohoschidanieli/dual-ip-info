## [2.2.0] - 20-07-2025

- ✨ feat: add translations for arabic, czech, hindi, hungarian, turkey and ukrainian

## [2.1.1] - 20-07-2025

- 🔧 chore: update application title

## [2.1.0] - 20-07-2025

- 🔧 chore: update extension github actions
- ♻️ refactor: modify build command and adds assets folder to dist
- ✨ feat: add `_locales` folder for internationalization (i18n) of extension title and description in 13 languages

## [2.0.2] - 19-07-2025

- ♻️ refactor: use svg images for flags instead of emojis (system support)

## [2.0.1] - 17-07-2025

- 🔧 chore: update logos(manifest and application)
- 🔧 chore: update changelog and version
- 🐞 fix: sending notifications even if ip is not changed
- ♻️ refactor: background script for checking ip in background

## [2.0.0] - 17-07-2025

- 🔧 chore: update manifest.json permission
- ♻️ refactor: change manifest description
- 🔧 chore: update web github actions to use github pages on deploy
- ✨ feat: add envs in github actions
- 🔧 chore: update .env to use shared one
- ✨ feat: add new setting(Check for IP changes in the background)
- 🔧 chore: update translations
- ♻️ refactor: use one query instead of three for getting location, private ip
- ✨ feat: detect and store selected language in chrome.storage.local for use in background notifications
- ✨ feat: use i18n.resolvedLanguage and languageChanged listener to normalize and persist language codes (e.g. en-US → en)
- ✨ feat: auto-sync notification language between UI and service worker via chrome.storage
- ✨ feat: handle private IP insertion from background service worker into persisted history
- 🔧 chore: rename background.ts to notification.ts to reflect purpose of service worker
- 🔧 chore: restructure redux middleware to use clearer naming
- 🔧 chore: refactor useSyncLanguage to only manage background notification localization
- 🔧 chore: simplify and improve IP retrieval middleware using Promise.all
- 🔧 chore: improve localStorage cleanup logic and normalize language detection
- 🔧 chore: cleanup console.log debug output with context tags ([BG], [POPUP], etc.)
- 🔧 chore: change icons for extension
- 🔧 chore: modify manifest file
- 🐞 fix: make font size smaller
- 🐞 fix: translation for `zh` language
- 🔧 chore: add tests for utils
- ✨ feat: detect and display private IPs (v4/v6) using internal-ip
- ✨ feat: detect and display public IP info with geo location, timezone, connection and country flag
- ✨ feat: show flag emoji or fallback icon when country is not detected
- ✨ feat: show local time and timezone info in IP details
- ✨ feat: add clipboard copy button for IPs with i18n feedback message
- ✨ feat: add `ButtonWithTextFeedback` component with feedback timer
- ✨ feat: create UI state for empty history (with image + translated message)
- ✨ feat: display IP history in reverse chronological order
- ✨ feat: prevent duplicate IPs in history and update timestamp instead
- ✨ feat: auto-disable delete option when history has fewer than 2 entries
- ✨ feat: add Redux middleware to sync `allowDeleteFromHistory` based on history length
- ✨ feat: use RTK Query `fakeBaseQuery` for internal IP and local async data
- ✨ feat: persist last location result using localStorage fallback
- ✨ feat: add i18n strings for "Back", "Delete", "Copy to clipboard", "Copied to clipboard", etc.
- ✨ feat: add visibility logic and tooltips for v6-only IP options
- ✨ feat: handle and normalize flags for invalid/missing country codes
- ✨ feat: responsive `Skeleton` loading states for async IP data
- 🐞 fix: properly serialize query errors from internal/public IP detection
- 🔧 chore: optimize `queryFn` structure in RTK Query endpoints
- 🔧 chore: unify fallback logic for missing IP data
- ✨ feat: add persisted storage in redux for history
- ✨ feat: add new setting(`allow deleting IPs from history`) with translations for supported languages
- 🔧 chore: update imports to be sorted and added new package.json commands for lint and lint fix
- 🔧 chore: add rule for eslint for unused variable
- ✨ feat: added `date-fns` for localized date formatting
- ✨ feat: created `DateFnsProvider` to set global locale based on selected language
- ✨ feat: add hardcoded components for last ips section and popover for more details
- ♻️ refactor: split every setting section in component
- 🐞 fix: ensure invalid or unsupported languages (e.g. `mo`, `de-AT`, `pt-BR`) are normalized and fallback language is saved to `localStorage`
- ✨ feat: update application logo
- ✨ feat: updated `developedBy` message with ❤️ and translations
- ✨ feat: added `version` label to translations
- ✨ feat: added `viewOnGitHub` and `buyMeACoffee` translations in all supported languages
- ✨ feat: improved footer text to match dark mode design
- ✨ feat: added dynamic author and version injection using `package.json`
- 🔧 chore: modify `.gitignore` and add `.env.exampe`
- ✨ feat: add new page (`Info`) with static content and footer
- ✨ feat: added support for i18n using `react-i18next`
- ✨ feat: added language selector with flags and native language names
- ✨ feat: added translations for:
  - English (`en`)
  - Romanian (`ro`)
  - German (`de`)
  - French (`fr`)
  - Spanish (`es`)
  - Italian (`it`)
  - Dutch (`nl`)
  - Polish (`pl`)
  - Portuguese (`pt`)
  - Russian (`ru`)
  - Chinese (`zh`)
  - Japanese (`ja`)
  - Korean (`ko`)
- ✨ feat: added version-aware `Footer` component (dark/light mode support)
- ✨ feat: added date/time format options with i18n support
- ✨ feat: restructure imports to use TypeScript `paths` aliasing
- ✨ feat: add new page(Info), content for Settings/Info page and modify imports using typescript paths
- ✨ feat: add routing(home and settings)
- ✨ feat: add functionality for dark/light/system theme
- ✨ feat: add redux/redux-persist and initial state for settings
- 🔧 chore: add Chackra UI
- 🔧 chore: add manifest.json for chrome extension API
- 🔧 chore: add vitest
- 🔧 chore: add monorepo setup, changelog file and version.txt file
  ✨ feat: integrate date-fns with global locale support via DateFnsProvider
