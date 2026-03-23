# nownownow

個人 /now 頁面，以月報形式記錄近況。

## 開發

```sh
pnpm dev      # 本地開發 localhost:4321
pnpm build    # 建置至 ./dist/
pnpm preview  # 預覽建置結果
```

---

## TODO

### 高優先級 — SEO

- [ ] 新增 `public/robots.txt`
- [ ] `BaseHead.astro` 加入 JSON-LD 結構化資料（`BlogPosting` / `Article`）
- [ ] `BaseHead.astro` 加入 `og:locale`（`zh_TW`）
- [ ] `[...slug].astro` 傳入 `pubDate` 給 `BaseHead`，輸出 `article:published_time`
- [ ] `BaseHead.astro` 加入 `twitter:site` / `twitter:creator`

### 中優先級 — 效能 / 可訪問性

- [ ] 壓縮 `src/assets/` 內的 PNG 圖片（目前每張約 5.7 MB）
- [ ] `MonthlyReport.astro` 的 `photo.alt` 若為空應有 fallback 或警告
- [ ] `MonthlyReport.astro` `<article>` 內補上 `<time datetime="...">` 元素
- [ ] `global.css` 加入 `@media (prefers-reduced-motion: reduce)`
