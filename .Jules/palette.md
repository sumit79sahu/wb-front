## 2025-05-14 - Sidebar Tooltips and Accessibility
**Learning:** Collapsed sidebars should always provide tooltips for icon-only items to maintain clarity. Accessibility labels (aria-label) and focus-visible indicators are crucial for keyboard users.
**Action:** Use Ant Design `Tooltip` and Tailwind `focus-visible` utility classes for sidebar navigation items and toggle buttons.

## 2025-05-14 - TypeScript Type Safety in Menu Mapping
**Learning:** Destructuring optional properties (like `path`) from inferred types can cause TS errors if the property isn't present in all objects. Using `: any` is a quick fix but defined interfaces are preferred for maintainability.
**Action:** Define a `MenuItem` interface in the component when mapping over a custom menu constant.

## 2025-05-14 - Playwright Verification with Middleware
**Learning:** App Router middleware (proxy.ts) checking for cookies will redirect verification scripts to login.
**Action:** Use `context.add_cookies([{ "name": "token", ... }])` in Playwright scripts to mock an authenticated session.
