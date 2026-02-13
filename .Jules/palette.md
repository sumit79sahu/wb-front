## 2026-02-13 - Layout Navigation Accessibility & Clarity
**Learning:** Icon-only buttons in the main navigation (sidebar collapse, user menu) lack descriptive labels and visual feedback for keyboard users. Ant Design's Dropdown items are more accessible when using the `onClick` property rather than nesting buttons in the `label`.
**Action:** Always add `aria-label` and `Tooltip` to icon-only buttons. Use `role="button"`, `tabIndex={0}`, and `onKeyDown` for custom triggers. Refactor Dropdown items to use the built-in `onClick` prop.
