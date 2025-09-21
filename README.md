# Todo List Interview Project

This project is a **Kanban-style Todo List application** built with React and TypeScript. It was developed as part of an interview process for a company.

## Features

- **Boards & Columns:** Organize tasks into columns (e.g., To Do, In Progress, Done) on a board.
- **Task Cards:** Each task is represented as a card with details, priority, and status.
- **Add/Edit/Delete:** Create, update, and remove tasks and columns.
- **Modals:** All create/edit actions use modal dialogs for a smooth UX.
- **Form Validation:** Uses [`react-hook-form`](https://react-hook-form.com/) and [`zod`](https://zod.dev/) for robust form validation.
- **Priority Selection:** Assign priorities to tasks using a select input.
- **Theme Switch:** Toggle between light and dark themes.
- **Responsive UI:** Built with [`Tailwind CSS`](https://tailwindcss.com/) for modern, responsive design.
- **Reusable Components:** Modular folder structure for maintainability.

## Tech Stack

- **React 19** & **TypeScript 5**
- **Vite** (development/build tool)
- **Tailwind CSS** (styling)
- **clsx** (conditional styling)
- **React Hook Form** & **Zod** (forms & validation)
- **UUID** (unique IDs for tasks/columns)
- **ESLint & Prettier** (code quality & formatting)

## Folder Structure

```
src/
  components/
    Board/           # Board component folder
      Board.tsx      # Board and column logic
      index.ts       # export component form here to have cleaner imports; import only from root folder
    Card/            # Task card UI and details
    Column/          # Column UI
    Modal/           # Modal dialogs for forms
    Form/            # Form elements (Input, Select, etc.)
    ThemeSwitch/     # Theme toggle component
    index.ts         # Consistency with “barrel” exports
    ...
  constants/         # App-wide constants (priorities, etc.)
  contexts/          # React context for global state
  hooks/             # Custom hooks (theme, app state)
  providers/         # Context providers
  reducers/          # State reducers
  utils/             # Utility functions (initial state, etc.)
  App.tsx            # Main app component
  main.tsx           # Entry point
```

## How to Run

1. **Install dependencies:**

   ```
   pnpm install
   ```

2. **Start development server:**

   ```
   pnpm dev
   ```

3. **Build for production:**

   ```
   pnpm build
   ```

4. **Lint and format code:**
   ```
   pnpm lint
   pnpm run format
   ```

## Notes

- This project demonstrates advanced React patterns, modular architecture, and modern UI/UX.
- All state management is handled via React Context and custom hooks.
- The codebase is organized for scalability and easy feature addition.

---

**Author:** Mahdi Mohammadi
**Purpose:** Interview project for a company
