# Palette's Journal

## 2025-05-15 - Enhancing Navigation Accessibility and Feedback
**Learning:** Icon-only buttons in navigation (like collapse/expand) often lack aria-labels and tooltips, making them inaccessible for screen readers and confusing for users when labels are hidden. Ant Design Tooltips provide an easy way to restore this context.
**Action:** Always wrap icon-only buttons in `Tooltip` and provide a descriptive `aria-label`. For collapsed sidebars, ensure menu items have tooltips showing their labels.

**Learning:** Custom interactive elements (like `Flex` triggers for Dropdowns) must be manually made accessible.
**Action:** Add `role="button"`, `tabIndex={0}`, `aria-label`, and `onKeyDown` (for Enter/Space) to custom triggers, along with `focus-visible` styles.

**Learning:** Ant Design `Dropdown` items should use the `onClick` property on the item object rather than nesting a `<button>` inside the `label` for better consistency and hit area.
**Action:** Refactor nested buttons in Dropdown items to use the `onClick` prop.
