# FlowKit Build Plan
## Last Updated: March 6, 2026

---

## 💸 FEE STRATEGY (DECIDED)

### Final Decision: 10% Platform Fee

**Rationale:**
- Sustainable business model (covers Stripe fees ~2.9% + $0.30 + operating costs)
- Still 2x better than PromptBase (20%) and Etsy (10-15%)
- Strong marketing angle: "Keep 90% — 2x better than competitors"
- Prevents platform death spiral from unsustainable economics

### Implementation:
- **Current homepage badge:** "10% commission for sellers"
- **Messaging:** "You keep 90% — 2x better than PromptBase"
- **No special early adopter pricing** — keep it simple

---

## 🎯 FEATURE ROADMAP

### Phase 1: Foundation ✅ (Week 1 - DONE)
| Feature | Status | Notes |
|---------|--------|-------|
| Upload form with live preview | ✅ | Deployed |
| Platform tags (10 platforms) | ✅ | ChatGPT, Claude, Gemini, etc. |
| 12 categories | ✅ | Content, Social, SEO, Email, etc. |
| Example image upload | ✅ | Before/after previews |
| Trending section | ✅ | 6 workflow cards |

### Phase 2: Conversion 🔥 (This Weekend)
| Feature | Status | Notes |
|---------|--------|-------|
| **Preview tease** | 🔄 IN PROGRESS | Show first 100 chars blurred |
| Supabase backend | ⏳ PENDING | Nick setting up account |
| User auth | ⏳ PENDING | Signup/login |
| Search bar | ⏳ PENDING | Browse page |
| Ratings system | ⏳ PENDING | Week 3 |

### Phase 3: Revenue (Week 3+)
| Feature | Status | Notes |
|---------|--------|-------|
| Payment integration (LemonSqueezy) | ⏳ PENDING | Instant payouts |
| Secure delivery | ⏳ PENDING | Post-purchase download |
| Seller analytics | ⏳ PENDING | Views, conversions, earnings |

---

## 🛠️ TECHNICAL IMPLEMENTATION NOTES

### Preview Tease Feature
**Goal:** Show buyers what they're getting without giving it away

**How it works:**
1. Store full workflow content in database
2. Display "Preview" section on workflow page
3. Show first 120 characters clearly
4. Blur/overlay the rest with "Purchase to unlock"
5. Click unlock button → goes to checkout

**UI Pattern:**
```
[PREVIEW]
"Step 1: Start by analyzing your target audience...
[BLURRED CONTENT]
[PURCHASE BUTTON - $29]
```

**Technical approach:**
- CSS blur filter on text container
- Position absolute "Unlock" overlay
- JavaScript toggle for mobile

---

## 📱 PAGE SPECIFICATIONS

### workflow.html (Individual Workflow Page)
**Sections:**
1. Hero: Title + Creator + Price + Platform badge
2. Preview: Teaser text (120 chars) + blurred content
3. Gallery: Example output images
4. Details: What's included, deliverables
5. Reviews: Rating + comments
6. Related: "You might also like"

### browse.html (Browse/Search)
**Features:**
- Search bar (keyword search)
- Filters: Platform | Category | Price Range | Rating
- Sort: Popular | Newest | Highest Rated | Price
- Grid view of workflow cards

### upload.html (Seller Upload)
**Fields:**
- Title
- Platform dropdown
- Category dropdown
- Price ($5-500)
- Description
- Workflow content (for purchase)
- Preview text (first 120 chars auto-generated)
- Example images (up to 4)
- Tags
- Deliverables list

---

## 🎨 DESIGN SYSTEM

### Colors
- Background: #0a0a0f
- Primary: #667eea → #764ba2 (gradient)
- Success: #10b981
- Muted text: #94a3b8

### Typography
- Font: Inter
- Hero: 48-72px
- Section titles: 32-42px
- Cards: 18px
- Body: 15-16px

---

## 🚀 LAUNCH CRITERIA

### Minimum Viable Product
- [ ] Upload workflow
- [ ] Browse workflows
- [ ] Preview tease
- [ ] Purchase workflow
- [ ] Instant download
- [ ] Rating system

### Success Metrics (Month 1)
- 10+ workflows uploaded
- 50+ registered users
- 1+ sale

---

## 📝 CHANGELOG

**March 6, 2026 - Morning Session**
- Week 1 complete: Platform tags, categories, image upload, trending section
- Fixed CSS bug on homepage
- Decided on 10% fee strategy
- Started preview tease feature

