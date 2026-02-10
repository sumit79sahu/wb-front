## 2025-05-15 - Enhancing Navigation Accessibility and Feedback
**Learning:** Icon-only buttons (like collapsed sidebar items) need both visual tooltips and ARIA labels to be fully accessible. Ant Design's Dropdown items should use the `onClick` prop directly on the menu item for better styling and accessibility compared to nested buttons.
**Action:** Always wrap collapsed sidebar icons in a Tooltip and ensure icon-only buttons have an `aria-label`. Use the `onClick` property in `MenuProps['items']` for Dropdown actions.
