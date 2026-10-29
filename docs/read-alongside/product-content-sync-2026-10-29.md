# Product content synchronization — 29 October 2026

## Source and scope

Fetched app origin and confirmed `origin/main` is an ancestor of HEAD at `6f52c3c8`. Fetched website origin/main at `34a51fe`. Both edits use `codex/product-content-sync-20261029`. The unrelated pre-existing Xcode project changes remain untouched and must not be included in the documentation commit.

Reviewed the current PRD, product alignment, approved reader-led diagnostic revision, current data deletion model, form guidance and library action QA, SettingsView, ReadingCheckInSheet/ReadingDiagnostic, ReadingDataSettings, CloudSyncSettings, CloudReadingSync, LocalReadingStore, GoogleBooksAPIClient, AddBookView and the public pages. Earlier proposals were not treated as shipped behavior.

## Findings corrected

- Product details and prepared App Store text now describe a deadline-derived daily target and a pages/day calculator that sets a date. The device-local routine reserves reading opportunities; its weekdays do not change the deadline's page arithmetic.
- Current library On Hold/DNF actions are available without a check-in. Reflection remains optional and reader-led, with no automatic or preselected outcome.
- Support now explains backup merge/rejection, cloud conflict review and recovery copies, account-change confirmation, position correction versus session editing, and retained input after validation errors.
- Privacy no longer claims a remote title-search flow. ISBN lookup contacts Google Books with Open Library fallback; saved-library title/author search is local. Exported preferences/drafts and pre-import copies are distinguished from active CloudKit data.
- Website hosting and its local-only check-in explorer are described separately from app analytics and app data storage. No extra service or dependency added.
- README and current PRD no longer claim the public Privacy/Support pages are unpublished or that a legacy account-recovery service remains.
- Exact App Store fields and current product facts are in `docs/marketing/product-content.json`; a stdlib-only generator renders and optionally checks the website mirror. This is prepared copy, not confirmation of App Store Connect changes.

## Review references and boundaries

Apple metadata limits and App Review 2.1/2.3/5.1 rechecked on 29 October in this workflow. HIG content-only scope and unchanged native test limitations are recorded in the HIG checklist. No new native implementation, build, archive, upload, production CloudKit verification or physical-device accessibility result is claimed. No app name or pricing changes. English metadata only; existing native Simplified Chinese remains unchanged.

## Verification

Metadata sync and all field limits pass: promotion 146 characters, description 2773 characters, keywords 89 UTF-8 bytes. Local rendered checks passed at actual 375×812 and 1422×900 CSS viewports for landing/product, support and privacy; product was also reviewed at 712×893. No horizontal overflow or missing images. New offline/status FAQs expanded and verified at 431×775; product-to-sync support link reached the intended page and anchor. All local assets, page links and anchor destinations passed. Browser viewport override reset. The unchanged check-in explorer retains its five equal, initially unselected choices. Final publication is verified separately after pushing. No App Store Connect session is connected or edited by the repository generator; exact saved fields there remain unverified.
