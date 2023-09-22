# Social media dashboard

Small project made with:

- [React + TypeScript](https://react.dev/)
- [styled components](https://styled-components.com/)
- [Recharts](https://recharts.org/en-US/)
- [Vite](https://vitejs.dev/)
- [react-toggle](https://www.npmjs.com/package/react-toggle)

:rocket: [View Demo](https://dashboard-ts-chi.vercel.app/)

## Usage

Clone this repository and run the following commands in your terminal.

```
npm i
npm run dev
```

## Development

- Data is hard coded to focus on building the UI.
- `createContext` and `useContext` to open modal from child components.
- Customize `react-toggle` based on design provided.

### styled components

- Create a light and dark theme with `styled components` and add theme provider.
- Add modern css reset by [Andy Bell](https://andy-bell.co.uk/a-more-modern-css-reset/) to global styles.
- Added definition file for `styled components` for theme file.

### Recharts

- Customize chart based on design provided.
- Add custom tooltip component to display number of followers.
- Use `themeContext` to use colors from theme

### Modal

- Added reusable modal component with native `<dialog>` element.
- Use react modal to display stats chart.
- Hide close button label with css.

### Accessibility

Replaced green and red colors for better color contrast based on report made with [Axe DevTools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)

- green: hsl(163, 73%, 28%)
- red: hsl(356, 69%, 49%)

## Pending

- Store dark mode state in localStorage.
- Add loading skeleton.
- Add breakpoints list in styled components.
