# Palette's Journal 🎨

## 2025-05-15 - Improving Sidebar Navigation Accessibility and Clarity
**Learning:** In collapsed sidebars, icon-only buttons lack immediate semantic meaning for users and are inaccessible to screen readers without proper labeling. Ant Design's `Tooltip` and `aria-label` provide an easy way to restore this context without increasing visual noise.
**Action:** Always wrap collapsed sidebar icons in `Tooltip` components using the menu's label, and ensure `aria-label` is present on all icon-only buttons. Use `placement="right"` for sidebar tooltips to avoid obscuring other menu items.
