## 2025-05-15 - Improved Navigation Accessibility and Clarity
**Learning:** Icon-only buttons and collapsed sidebars lack immediate affordance for sighted and screen-reader users. Ant Design `Tooltip` combined with `aria-label` provides a robust solution for both.
**Action:** Always wrap icon-only triggers in `Tooltip` and provide descriptive `aria-label` attributes. Use `placement="right"` for sidebar-related tooltips to avoid overlap.
