# Palette's Journal 🎨

## 2025-05-15 - Improving Custom Interactive Elements Accessibility
**Learning:** Custom interactive elements built with non-semantic tags (like `div` or `Flex`) are invisible to keyboard users and screen readers unless explicitly configured. They require `role="button"`, `tabIndex={0}`, and an `aria-label`. Crucially, they also need an `onKeyDown` handler to simulate clicks for 'Enter' and 'Space' keys, as these are not natively handled by `div`s.
**Action:** Always check custom triggers for `role`, `tabIndex`, `aria-label`, and keyboard event handlers. Use Tailwind's `focus-visible:ring` for a calm but clear focus state that matches the brand.

## 2025-05-15 - Ant Design Dropdown Item Best Practices
**Learning:** Nesting a `<button>` inside an Ant Design `Menu` item label can lead to styling issues and unexpected focus behavior. It also creates invalid HTML (button inside a list item that already acts as a button).
**Action:** Use the `onClick` property on the `items` object itself. This ensures the entire menu item area is clickable and focusable correctly by Ant Design.
