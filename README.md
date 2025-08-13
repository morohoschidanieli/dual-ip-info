# 🚀 Monorepo Workflow & Commit Guidelines

This document outlines best practices for managing a monorepo containing multiple applications and packages, including commit message conventions, changelog management, versioning, and CI/CD setup tips.

---

## 1. ✍️ Commit Message Convention

When committing changes, use a clear conventional commit style with emojis to indicate the type of change.

### Format

type: short description

### Examples

Here are some example commit messages following the conventional commit style with emojis:

- ✨ feat: add user login form with validation
- 🐛 fix: correct navbar layout on mobile devices
- 📚 docs: update README with setup instructions
- ⏱️ fix: resolve issue with background script timing

These examples help keep commits clear and understandable.

### Common Types

- 🎉 `feat`: A new feature
- 🐛 `fix`: A bug fix
- 🔧 `chore`: Maintenance tasks (e.g., dependency updates)
- 📝 `docs`: Documentation changes
- ♻️ `refactor`: Code restructuring without behavior change

---

## 2. 📜 Changelog Management

### Per-App Changelogs

- Maintain a separate `CHANGELOG.md` file for each app/package in its own folder.
- Record changes grouped by version and date.
- Example format:

```md
## [1.0.0] - 2025-06-29

- ✨ feat: added new homepage design
- 🐛 fix: fixed login issue
```

## 🤝 Want to Contribute?

Please read our [Contribution Guide](CONTRIBUTING.md) for detailed instructions on:

- Commit conventions
- Versioning & changelogs
- Code style
- Pull request requirements

