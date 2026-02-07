## 2025-05-14 - [Sidebar Accessibility & Tooltips]
**Learning:** Icon-only sidebar items lack affordance when collapsed, and toggle buttons are missing accessibility labels. Custom sidebar implementations often skip these standard polish items.
**Action:** Always add Ant Design `Tooltip` and `aria-label` to sidebar toggle buttons and collapsed menu items to improve both usability and accessibility. Use the `collapsed` state to conditionally enable tooltips.
