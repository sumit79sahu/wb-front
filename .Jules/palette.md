
## 2025-05-14 - Navigation Polish and Accessibility
**Learning:** Icon-only buttons and custom interactive elements (like Flex-based dropdown triggers) lack context and accessibility by default. Conditional tooltips for collapsed sidebars and explicit ARIA roles/keyboard handlers for custom triggers significantly improve UX.
**Action:** Always wrap icon-only buttons in Tooltips and add aria-labels. For custom interactive elements, ensure role="button", tabIndex={0}, and an onKeyDown handler are present.
