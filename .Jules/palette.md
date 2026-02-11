# Palette's Journal 🎨

## 2025-05-15 - Improving Custom Trigger Accessibility in Ant Design
**Learning:** Ant Design `Dropdown` and `Flex` components do not automatically provide keyboard accessibility when used as a custom trigger. Interactive elements must have proper ARIA roles, tabIndex, and keyboard event handlers.
**Action:** Always add `role="button"`, `tabIndex={0}`, and `aria-label` to custom dropdown triggers. Implement `onKeyDown` to handle 'Enter' and 'Space' keys, and use Tailwind's `focus-visible` for clear focus indicators.

## 2025-05-15 - Proper Menu Item Configuration in Ant Design
**Learning:** Nesting interactive elements like `<button>` inside an Ant Design `Menu` item `label` can lead to poor accessibility and inconsistent hover/click behaviors.
**Action:** Use the `onClick` property directly on the menu item object instead of wrapping the label in a button. This ensures the entire menu item is correctly treated as the interactive element.
