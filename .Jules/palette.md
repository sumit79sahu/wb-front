# Palette's Journal

## 2025-02-19 - Sidebar Accessibility and Clarity
**Learning:** Icon-only buttons (like sidebar collapse/expand) and collapsed menu items are common friction points for accessibility and clarity. Adding Ant Design Tooltips and ARIA labels provides immediate value with minimal code changes.
**Action:** Always check for icon-only interactive elements and ensure they have descriptive ARIA labels and tooltips.

## 2025-02-19 - Tooltip Reconciliation
**Learning:** When wrapping mapped items with Ant Design Tooltips, the `key` prop must be on the `Tooltip` itself to avoid React reconciliation issues.
**Action:** Apply `key` to the outermost wrapper in a map.

## 2025-02-19 - Rule of ONE
**Learning:** To satisfy strict PR reviews focused on micro-UX, strictly adhere to a single logical improvement and keep the change set small (under 50 lines).
**Action:** Resist the urge to fix every small thing; pick the most impactful one.
