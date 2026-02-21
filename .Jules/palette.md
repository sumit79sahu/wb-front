## 2025-05-14 - Sidebar Tooltips and Accessibility
**Learning:** Collapsed sidebars with only icons lack clarity; tooltips are essential for usability. Icon-only buttons also need aria-labels for screen readers. Replacing Next.js `redirect` with `useRouter().push` in event handlers provides a smoother client-side navigation experience.
**Action:** Always add tooltips and aria-labels to icon-only buttons. Use `useRouter` for client-side navigation in event handlers.

## 2025-05-14 - PR Hygiene
**Learning:** Running `pnpm install` can generate a massive `pnpm-lock.yaml` if only `package-lock.json` exists. This lockfile should not be committed if it wasn't part of the original repo.
**Action:** Ensure temporary files like `dev_server.log` and newly generated lockfiles are deleted before submission.
