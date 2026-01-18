# How to Deploy to GitHub Pages

I have configured your project for automatic deployment to GitHub Pages. Follow these steps to get your website live.

## Prerequisites

1.  **GitHub Repository**: Create a new PUBLIC repository on GitHub named `my_portfolio`.
    *   *Note: If you name it something else, you must update the `base` in `vite.config.js` and `homepage` in `package.json` to match.*

## Deployment Steps

Run the following commands in your terminal ( VS Code terminal is fine):

1.  **Initialize Git** (if you haven't already):
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2.  **Connect to GitHub**:
    Replace `<YOUR_REPO_URL>` with your actual repository URL (e.g., `https://github.com/tahaben401/my_portfolio.git`).
    ```bash
    git branch -M main
    git remote add origin https://github.com/tahaben401/my_portfolio.git
    git push -u origin main
    ```

3.  **Deploy**:
    This command will build your project and push it to a special `gh-pages` branch.
    ```bash
    npm run deploy
    ```

4.  **Verify**:
    - Go to your GitHub repository -> Settings -> Pages.
    - Ensure the source is set to `gh-pages` branch.
    - Your site will be live at: **https://tahaben401.github.io/my_portfolio/**

## Updating the Site

Whenever you make changes:
1.  Commit your changes: `git add . && git commit -m "Update"`
2.  Push to GitHub: `git push`
3.  Deploy again: `npm run deploy`
