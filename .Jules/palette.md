## 2025-05-15 - Navigation Polish & A11y
**Learning:** Icon-only buttons (like sidebar toggles) and collapsed menu items need both visual tooltips and screen-reader accessible labels. Custom interactive elements (using roles like "button") must also handle keyboard events (Enter/Space) to be fully accessible.
**Action:** Always wrap icon buttons in Ant Design `Tooltip` and provide `aria-label`. For custom interactive components, ensure `tabIndex={0}`, `role="button"`, and an `onKeyDown` handler.
