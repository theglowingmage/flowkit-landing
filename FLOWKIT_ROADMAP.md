# FlowKit AI — Strategic Roadmap
## Public Marketplace for AI Workflows & Prompts

---

## 🎯 POSITIONING
**The GitHub + Shopify for AI Workflows**
- PromptBase = Etsy for prompts (single-use)
- FlowGPT = TikTok for AI chat (entertainment)
- **FlowKit = Professional workflow marketplace (business outcomes)**

**Tagline:** "Prompts are single-use. Workflows are your new team member."

---

## 📊 PHASE 1: MVP (Complete by March 15)
**Goal:** Functional marketplace with core features

### Week 1 (March 5-8) — Foundation
| Task | Status | Notes |
|------|--------|-------|
| ✅ Upload form with live preview | Done | Deployed |
| 🔄 Add Platform tags | In Progress | ChatGPT, Claude, Gemini, Midjourney, Cursor, etc. |
| 🔄 Add Example output upload | Blocked | Image preview before/after |
| ⬜ Expand categories to 12+ | Todo | Break "Marketing" into Content, SEO, Ads, Email |
| ⬜ Homepage redesign | Todo | Trending workflows, search, filters |

### Week 2 (March 9-12) — Backend
| Task | Status | Notes |
|------|--------|-------|
| ⬜ Set up Supabase | Todo | Free tier, run schema SQL |
| ⬜ Connect upload form | Todo | Save workflows to database |
| ⬜ User auth | Todo | Signup/login with Supabase Auth |
| ⬜ File storage | Todo | Supabase Storage for uploads |
| ⬜ Browse page with filters | Todo | Pull from database |

### Week 3 (March 13-15) — Polish
| Task | Status | Notes |
|------|--------|-------|
| ⬜ Rating system | Todo | 1-5 stars |
| ⬜ Seller profiles | Todo | Public profile pages |
| ⬜ Payment integration | Todo | LemonSqueezy (Phase 1) |
| ⬜ Mobile optimization | Todo | Test all pages |

**Phase 1 Success:** Someone can upload → browse → buy → download workflow

---

## 📊 PHASE 2: Growth (March 16-31)
**Goal:** Make it discoverable and social

### Features
- [ ] Trending section (algorithm: views + sales + ratings)
- [ ] Search with filters (platform, category, price range, rating)
- [ ] Collections ("Best Marketing Workflows", "Beginner Friendly")
- [ ] Affiliate program (20% commission for referrers)
- [ ] Analytics dashboard (seller stats: views, conversions, earnings)
- [ ] Follow creators
- [ ] Comments/reviews with photos

---

## 📊 PHASE 3: Scale (April 1+)
**Goal:** Enterprise-ready + revenue optimization

### Features
- [ ] Stripe Connect (instant payouts to sellers)
- [ ] Premium/featured listings ($5 boost)
- [ ] Subscription model (unlimited downloads monthly)
- [ ] API for enterprise buyers
- [ ] Zapier/Make.com integrations
- [ ] White-label option
- [ ] Mobile app (React Native)

---

## 🎨 COMPETITIVE FEATURES (Steal These)

### From PromptBase
- ✅ Platform badges (visible on every card)
- ⭐ Creator profiles with stats
- ⭐ Clean, minimal card design

### From PromptHero
- ✅ Example outputs (before/after images)
- ⭐ View counts on cards
- ⭐ Full prompt preview (tease with "...")

### From AIPRM
- ⭐ For teams (business use cases)
- ⭐ Categories by outcome (not just topic)

### From FlowGPT
- ✅ Trending section
- ⭐ Emoji categories (visual scanning)
- ⭐ Mobile-first

---

## 🏗️ TECHNICAL STACK

**Frontend:** HTML/CSS/JS (vanilla for MVP, migrate to React later)
**Backend:** Supabase (PostgreSQL + Auth + Storage)
**Payments:** LemonSqueezy Phase 1 → Stripe Connect Phase 2
**Hosting:** GitHub Pages (frontend) + Supabase (backend)
**Domain:** Custom domain (flowkit.ai or flowkitmarketplace.com)

---

## 💰 MONETIZATION

**Current Model:**
- 10% platform fee (you keep 90%)
- Sellers set price: $5-500
- Payout: LemonSqueezy (manual) → Stripe Connect (instant)

**Future Models:**
- Featured listings: $5/day
- Subscription: $29/month unlimited downloads
- Enterprise: $500/month API access
- Affiliate: 20% commission

---

## 📈 SUCCESS METRICS

**Month 1:**
- 10+ workflows uploaded
- 50+ registered users
- First sale

**Month 3:**
- 100+ workflows
- $1,000+ GMV
- 5 active sellers

**Month 6:**
- 1,000+ workflows
- $10,000+ GMV
- 50 active sellers
- Featured on Product Hunt

---

## 🔥 PRIORITY ORDER (Do This Week)

### Must Have (This Weekend)
1. Add platform tags to upload form
2. Add "example output" image upload
3. Expand categories
4. Set up Supabase (15 min)
5. Redesign homepage with trending

### Should Have (Next Week)
1. Fix browse page filtering
2. Add rating system
3. Create seller profile page
4. Add search bar

### Nice to Have (Later)
1. Collections feature
2. Affiliate program
3. Mobile app

---

## 🎬 IMMEDIATE ACTION ITEMS

**Tonight (if you have 30 min):**
- [ ] Create Supabase account
- [ ] Run SQL schema from `flowkit-backend/README.md`
- [ ] Get anon key, paste into upload form

**Tomorrow:**
- [ ] Add platform dropdown to upload form
- [ ] Add "example result" image upload
- [ ] Deploy and test

**Weekend:**
- [ ] Redesign homepage with trending workflows
- [ ] Add search functionality
- [ ] Polish mobile experience

---

## 🎨 DESIGN SYSTEM

**Colors:**
- Background: #0a0a0f (deep black)
- Primary: #667eea → #764ba2 (purple gradient)
- Success: #10b981 (green)
- Error: #ef4444 (red)
- Text: #ffffff (white) / #94a3b8 (muted)

**Cards:**
```
- Platform badge (top left, colored)
- Preview image (center)
- Title + creator (below)
- Rating stars
- Price (gradient text)
- View count (subtle)
```

**Platform Badge Colors:**
- ChatGPT: #10a37f (green)
- Claude: #cc785c (orange)
- Gemini: #8e7cc3 (purple)
- Midjourney: #0f0f0f (black)
- Cursor: #2563eb (blue)
- DALL-E: #3b82f6 (blue)

---

## 🚀 NEXT STEPS

**You said:** Change direction to public marketplace ✓

**My recommendation:**
1. Start with Supabase setup (15 min)
2. Add platform tags to upload form
3. Redesign homepage with trending/cards
4. Launch on Product Hunt

**Want me to:**
- Set up Supabase now?
- Redesign homepage with cards?
- Add platform tags to upload form?

Ready when you are! 🎯
