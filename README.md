# Create a Test for Login Page 
📌 Assignment

This project is part of the Cypress login test assignment.

**Your task is to:**

Write Cypress tests that attempt to log in to Lazr with both valid and invalid credentials.

Assert whether the login was successful or failed.

✅ Requirements

-  Use Cypress (latest version).

Add two tests:

-  ✅ Valid login (provided email + password).

-  ❌ Invalid login (any wrong credentials).

Make sure the test clearly asserts whether login passed or failed.

** 📂 Project Setup **

1. Clone the repository
git clone [https://github.com/your-username/Login-Lazr-Your-Name.git](https://github.com/lazrfreight/test-qa.git)
cd test-qa

2. Install dependencies
npm install

3. Run Cypress

Open the Cypress Test Runner:

npx cypress open


** Run headless tests: **

npx cypress run

🔑 Credentials

We will provide you with by email

🎯 What to Deliver

Your completed tests inside cypress/e2e/.

Updated README.md if you add any extra instructions.

Push your code to a public GitHub repository named:

Login-Lazr-Your-Name

🌟 Bonus (Optional)

Use Cypress environment variables for credentials (CYPRESS_email, CYPRESS_password).

Add reusable commands in cypress/support/commands.js.

Set up GitHub Actions CI to run Cypress tests automatically.
