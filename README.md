# Personal Finance Visualizer

A simple web application for tracking and visualizing personal finances.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
  - [Stage 1: Basic Transaction Tracking](#stage-1-basic-transaction-tracking)
  - [Stage 2: Categories](#stage-2-categories)
  - [Stage 3: Budgeting](#stage-3-budgeting)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Folder Structure](#folder-structure)
- [Design Considerations](#design-considerations)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**Personal Finance Visualizer** is a modern web app for tracking income, expenses, and budgets. Built with responsiveness and usability in mind, it helps individuals understand and visualize their financial activity.

---

## Features

### Stage 1: Basic Transaction Tracking

- Add, edit, and delete transactions (each with amount, date, and description)
- Transaction list view
- Bar chart visualizing monthly expenses
- Basic form validation for transaction inputs
- Responsive design with error states

### Stage 2: Categories

- All Stage 1 features, plus:
- Assign transactions to predefined categories
- Category-wise pie chart of expenses
- Dashboard with summary cards:
  - Total expenses
  - Category breakdown
  - Most recent transactions

### Stage 3: Budgeting

- All Stage 2 features, plus:
- Set monthly budgets for each category
- Budget vs. actual spending comparison chart
- Simple spending insights and trends

---

## Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/), [React](https://react.dev/), [shadcn/ui](https://ui.shadcn.com/), [Recharts](https://recharts.org/)
- **Backend/Database:** [MongoDB](https://www.mongodb.com/)
- **Design:** Responsive, accessible UI with clear error handling

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) instance (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TejasSingh022/finance-visualizer.git
   cd finance-visualizer
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**

   Create a `.env.local` file in the root directory and add your MongoDB connection string:

   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority
   ```

### Running the App

```bash
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Folder Structure

```
finance-visualizer/
├── components/       # Reusable React components (forms, charts, UI)
├── pages/            # Next.js pages & API routes
├── lib/              # Utility functions, database logic
├── styles/           # Global and component-level styles
├── public/           # Static assets
├── ...               # Config and other project files
```

---

## Design Considerations

- **Responsiveness:** Mobile-first layout; works across desktops, tablets, and phones.
- **Error States:** User-friendly error messages for failed actions or invalid inputs.
- **Accessibility:** Keyboard navigable and screen reader friendly.
- **Validation:** Client-side form validation for transaction and budget forms.

---

## Contributing

Contributions are welcome! Please open issues and submit pull requests for bug fixes, improvements, or new features.

---

## License

This project is licensed under the [MIT License](LICENSE).
