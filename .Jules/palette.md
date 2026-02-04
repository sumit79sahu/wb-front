## 2025-05-14 - Tooltips and ARIA labels for Sidebar Navigation
**Learning:** Icon-only buttons and collapsed sidebars without tooltips can be frustrating for users and are less accessible. Adding tooltips provides immediate clarity, and ARIA labels ensure screen readers can describe the action.
**Action:** Always provide tooltips for icon-only buttons and collapsed navigation items. Use Ant Design's `Tooltip` component for a consistent feel.

## 2025-05-14 - Professional Transitions and Visual Affordances (Canvas 🎨)
**Learning:** Subtle transitions (like sidebar width) and standard visual affordances (like red asterisks for required fields) significantly elevate the professional feel of an application.
**Action:** Use Tailwind `transition-all` with appropriate durations for state changes. Use standard UI patterns like `*` for required fields instead of text labels.

## 2025-05-14 - Responsive Table and Search (Canvas 🎨)
**Learning:** Tables often break layout on mobile if columns are fixed. Providing horizontal scroll and ensuring search inputs adapt to screen width is crucial for a professional responsive experience.
**Action:** Use Ant Design `scroll={{ x: 'max-content' }}` for tables and Tailwind breakpoints (e.g., `sm:!w-auto !w-full`) for inputs.
