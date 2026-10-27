# Playwright Test Automation Portfolio

A modular, maintainable, and scalable end-to-end test automation suite built with **Playwright** and **JavaScript** using the **Page Object Model (POM)** design pattern.

---

## 🛠 Tech Stack & Tools

* **Framework:** Playwright (`@playwright/test`)
* **Language:** JavaScript (Node.js)
* **Design Pattern:** Page Object Model (POM)
* **CI/CD:** GitHub Actions
* **Assertions:** Playwright Built-in Expect Assertions

---

## 📁 Project Structure

```text
playwright-qa-portfolio/
├── .github/workflows/   # CI/CD pipeline automation
│   └── playwright.yml
├── pages/               # Page Object Model classes
│   └── LoginPage.js
├── tests/               # Test suites
│   └── login.spec.js
├── playwright.config.js # Global Playwright configuration
└── package.json         # Dependencies and scripts
