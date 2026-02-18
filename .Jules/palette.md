## 2025-05-14 - Sidebar Tooltips for Collapsed State
**Learning:** When a sidebar is collapsed to show only icons, users lose the cognitive context of what each icon represents. Adding tooltips to these icons provides essential guidance without cluttering the UI.
**Action:** Use Ant Design's `Tooltip` component with a conditional `title` based on the sidebar's collapsed state.

## 2025-05-14 - Correct Key Placement with Tooltip
**Learning:** When wrapping a mapped element with a `Tooltip` in React, the `key` prop must be moved to the outermost component (`Tooltip`) to maintain correct reconciliation and avoid warnings.
**Action:** Always move the `key` from the child component to the `Tooltip` wrapper.
