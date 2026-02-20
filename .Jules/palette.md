## 2026-02-20 - Sidebar Navigation Polish
**Learning:** Collapsed sidebars with icon-only buttons create UX dead-ends for both sighted users (who may not know the icon meaning) and screen-reader users (who lack textual description). Ant Design's `Tooltip` and standard `aria-label` attributes are the standard solution.
**Action:** Always wrap icon-only sidebar/navbar buttons in `Tooltip` and provide descriptive `aria-label`. For collapsed menu items, use the menu label as the tooltip title and aria-label.

**Learning:** Playwright verification in this app requires mocking the `/user/me` endpoint and setting a `token` cookie. The `/user/me` response should have a `status: true` field (not `success: true`) to be correctly processed by the `AdminPanelLayout`.
**Action:** Use `context.add_cookies` for the token and `page.route` for mocking the user API.
