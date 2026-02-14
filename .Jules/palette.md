# Palette's Journal

## 2025-02-14 - Navbar Dropdown Accessibility & Ant Design Best Practices
**Learning:** Custom interactive elements used as Ant Design `Dropdown` triggers (like `Flex` or `div`) lack native keyboard accessibility and focus indicators. Additionally, nesting buttons inside `Dropdown` menu labels can lead to focus management issues.
**Action:** Always add `role="button"`, `tabIndex={0}`, `aria-label`, and `onKeyDown` handlers to custom triggers. Use Tailwind's `focus-visible` for indicators. For menu items, use the `onClick` property in the item object instead of nesting a `<button>` in the `label`.
