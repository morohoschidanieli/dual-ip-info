# Contribution guide

Thank you for your interest in contributing to this project! All types of contributions are welcome — from fixing bugs and improving documentation to developing new features or handling maintenance tasks.

This guide outlines how to contribute effectively and in alignment with this monorepo’s structure and guidelines.

---

## 📦 Project structure

This repository is organized as a **monorepo**, containing multiple applications and packages.  
Each app/package has its own folder and a dedicated `CHANGELOG.md` file.

---

## ✍️ Commit message convention

We use **conventional commits** with **emojis** to keep the commit history clean and meaningful.

### Recommended format:

`<emoji> <type>: short description`


### Examples:

- ✨ feat: add user login form with validation  
- 🐛 fix: correct navbar layout on mobile devices  
- 📚 docs: update README with setup instructions  
- 🔧 chore: update dependencies in shared-utils  

### Common commit types:

- 🎉 `feat`: A new feature  
- 🐛 `fix`: A bug fix  
- 🔧 `chore`: Maintenance (e.g., dependency updates)  
- 📚 `docs`: Documentation changes  
- ♻️ `refactor`: Code changes without changing behavior  
- ✅ `test`: Adding or updating tests  
- 💄 `style`: Formatting, spacing, etc. (no code logic changes)  

---

## 📜 Changelog management

Each application/package must maintain its own `CHANGELOG.md`.

### Format:

## [1.0.0] - 2025-06-29

- ✨ feat: added new homepage design  
- 🐛 fix: fixed login issue

---

## 🚀 How to contribute

We use **conventional commits** with **emojis** to keep the commit history clean and meaningful.

### Fork & Clone

```
git clone https://github.com/morohoschidanieli/dual-ip-info.git
cd dual-ip-info
```

 #### Create a new branch

 ```
 git checkout -b feat/feature-name
```

#### Make your changes and test them locally
 #### Update the version and changelog in the modified project
 - Edit the **CHANGELOG.md** file in the affected app/package:
    - Add a new version section using semantic versioning (e.g. ## [1.0.1] - 2025-08-13)
    - List your changes using the conventional commit format with emojis.
 - Update the version.txt file in the same project to match the new version number (e.g. 1.0.1)
 - If the app/package has a package.json, update the version field accordingly.
 #### Commit your changes using the conventional commit format
 
 ```
 git commit -m "✨ feat: add user login form with validation"
 ```

 #### Open a Pull Request targeting the main branch
 - Make sure the PR description includes
    - What has been changed and why
    - Which app/package was affected
    - The new version number (if applicable)

## 🧪 Code style & practices

- Follow the existing code style and structure.
- If your contribution includes new logic, please include relevant tests.
- Avoid mixing unrelated changes in a single PR.
- Don’t commit generated or temporary files (e.g. .env, node_modules, .log files).

## 🧭 Versioning guidelines

### We follow Semantic Versioning (SemVer):

`MAJOR.MINOR.PATCH`

- **MAJOR** — Breaking changes
- **MINOR** — New features, backward-compatible
- **PATCH** — Bug fixes or improvements

### Examples:
- **1.0.0** — Initial stable release
- **1.1.0** — Adds a new feature
- **1.1.1** — Fixes a bug

Please increment the version appropriately when making changes.
Each app/package manages its own version.

## 📬 Other ways to contribute
- Report bugs or request features via **[issues](https://github.com/morohoschidanieli/dual-ip-info/issues)**
- Improve project documentation (including this file!)
- Review and comment on open **[PRs](https://github.com/morohoschidanieli/dual-ip-info/pulls)**
- Propose ideas for **CI/CD, automation, or tooling improvements**

## 🙌 Thank You!
We appreciate every contribution. Whether it's your first PR or you're a regular collaborator, your effort helps improve this project for everyone.

