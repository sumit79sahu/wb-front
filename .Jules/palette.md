## 2025-02-09 - Sidebar Icon Tooltips & ARIA Labels
**Learning:** Icon-only navigation elements in a collapsed sidebar significantly hinder usability if tooltips are missing. Users cannot distinguish between menu items without expanding the sidebar. Adding tooltips that only appear in the collapsed state maintains a clean look while providing necessary guidance.
**Action:** Always wrap icon-only navigation buttons with Ant Design's `Tooltip` and provide an `aria-label` for screen readers. Use conditional titles like `title={collapsed && !drawer ? label : ""}` to avoid redundant tooltips in the expanded state.

## 2025-02-09 - Accessibility for Custom Triggers
**Learning:** Custom components (like `Flex` or `div`) used as interactive triggers for dropdowns or buttons need explicit `role="button"` and `aria-label` to be accessible via keyboard and screen readers.
**Action:** When using non-semantic elements as triggers, ensure they have proper ARIA roles and labels.
