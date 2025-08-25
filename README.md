# 🚀 QA Assignment – Cypress Login Test

Welcome! This project is a short Cypress E2E exercise focused on validating the Lazr login flow.

---

## 📌 Assignment

Your task is to **write Cypress tests** that attempt to log in to **Lazr** with both **valid** and **invalid** credentials.

The tests must clearly assert whether the login was successful or failed.

### ✅ Requirements
- Use **Cypress (latest version)**.
- Add **two tests**:
  - ✅ Valid login (with provided email + password).
  - ❌ Invalid login (with any wrong credentials).
- Make sure each test contains clear assertions.

### ℹ️ **Note:** Login page selectors may vary.  
> If unsure, you can use:  
> - `input[name="email"]`  
> - `input[name="password"]`  
> - `button[type="submit"]`  
> or equivalent.

---

## 📂 Project Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/lazrfreight/test-qa.git
   cd test-qa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run Cypress**
   - Open the Cypress Test Runner:
     ```bash
     npx cypress open
     ```
   - Run Cypress tests headlessly:
     ```bash
     npx cypress run
     ```

---

## 🔑 Credentials
You will receive valid login credentials via email.  

For the invalid login test, you can use any incorrect credentials (e.g., `wrong@example.com / invalid123`).

---

## 📝 What to Deliver

1. Your completed tests inside:
   ```
   cypress/e2e/login.cy.js
   ```

2. Updated `README.md` (if you add extra instructions).

3. Push your solution to a **new public GitHub repository** named:
   ```
   Login-Lazr-Your-Name
   ```
   Example:
   ```
   Login-Lazr-Jane-Doe
   ```

4. Share the GitHub repo link with us.

---

## 🌟 Bonus (Optional)

- Use **Cypress environment variables** for credentials:
  ```bash
  CYPRESS_email=user@example.com CYPRESS_password=secret npx cypress run
  ```
  (access via `Cypress.env("email")` and `Cypress.env("password")`).

- Add **reusable commands** in:
  ```
  cypress/support/commands.js
  ```


---

## ⚙️ Node.js Version

This project uses **Node.js 20.x**.  
If you use [nvm](https://github.com/nvm-sh/nvm), switch with:
```bash
nvm use
```

A `.nvmrc` file is included for convenience.

---

✅ Good luck, and happy testing!
