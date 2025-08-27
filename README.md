# 🚀 QA Assignment – Cypress Login Test

This project contains Cypress E2E tests for verifying the **login functionality** of Lazr.

## 📌 Requirements
- ✅ Test login with **valid credentials**
- ✅ Test login with **invalid credentials**
- ✅ Use Cypress environment variables for credentials
- ✅ Run tests in **headless mode**
- ✅ Updated README with clear setup instructions

---

## ⚙️ Project Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/prachi-shah-3010/Login-Lazr-Prachi-Shah.git
   cd Login-Lazr-Prachi-Shah

2. Install dependencies

   npm install

3. Run Cypress

    Open the Cypress Test Runner:
          npx cypress open
    Run Cypress tests headlessly:
          npx cypress run

4. Run Cypress in headless mode with provided credentials:
  
    Windows PowerShell
         $env:CYPRESS_email="dev+test1@lazr.io"; $env:CYPRESS_password="10203040"; npx cypress run
    Linux / macOS
         CYPRESS_email="dev+test1@lazr.io" CYPRESS_password="10203040" npx cypress run


✅ Test Cases Implemented
1. Valid Login
     Opens /signin
     Enters valid credentials (from Cypress env variables)
     Asserts:
        URL contains /marketplace
        Shipping Details heading is visible

2. Invalid Login
     Opens /signin
     Enters valid email + wrong password
     Asserts:
      URL remains /signin
      Error message “This email / password combination is invalid” is visible

📌 Notes

Base URL configured in cypress.config.js → baseUrl: "https://test3.dev.lazr.io"
                                           defaultCommandTimeout: 15000

Credentials are handled via Cypress environment variables

Cypress version: 12+

Node.js version: 20.x



✅ Thank You!
