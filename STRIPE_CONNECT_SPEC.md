# FlowKit AI — Stripe Connect Integration Spec

## Phase 2: Self-Service Marketplace

### Overview
Migrate from LemonSqueezy (manual vendor approval) to Stripe Connect for true open marketplace where sellers self-onboard.

### Seller Flow (Stripe Connect Express)

```
1. Seller clicks "Start Selling" on /sell.html
2. Redirects to Stripe Connect OAuth
3. Seller creates Stripe Express account (5 min)
4. Returns to FlowKit with account_id
5. Seller uploads workflow via dashboard
6. Product goes live immediately
7. Customer purchases → Stripe handles split (90% seller, 10% platform)
8. Seller gets paid to their bank (2-day rolling)
```

### Technical Implementation

#### Backend Requirements
- Node.js/Express server
- Stripe SDK (`stripe` npm package)
- Database: PostgreSQL or Supabase
- Webhook endpoint for payment events

#### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/connect/onboard` | POST | Create onboarding link |
| `/api/connect/callback` | GET | OAuth callback handler |
| `/api/products` | POST | Create product listing |
| `/api/products` | GET | List all products |
| `/api/products/:id` | GET | Single product details |
| `/api/checkout` | POST | Create payment intent |
| `/webhooks/stripe` | POST | Handle Stripe events |

#### Database Schema

```sql
-- Sellers table
CREATE TABLE sellers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stripe_account_id TEXT UNIQUE NOT NULL,
  email TEXT NOT NULL,
  name TEXT,
  onboarding_complete BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Products table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  seller_id UUID REFERENCES sellers(id),
  title TEXT NOT NULL,
  description TEXT,
  price INTEGER NOT NULL, -- cents
  category TEXT,
  files JSONB, -- array of file URLs
  status TEXT DEFAULT 'pending', -- pending, approved, rejected
  created_at TIMESTAMP DEFAULT NOW()
);

-- Purchases table
CREATE TABLE purchases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES products(id),
  customer_email TEXT,
  stripe_payment_intent_id TEXT,
  amount INTEGER,
  platform_fee INTEGER,
  seller_payout INTEGER,
  status TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### Stripe Connect Setup

1. **Create Platform Account**: Standard Stripe account
2. **Enable Connect**: Dashboard → Settings → Connect
3. **Set Application Fee**: 10% (platform keeps 10%, seller gets 90%)
4. **OAuth Settings**: Add redirect URLs
5. **Webhook Endpoint**: `/webhooks/stripe` for:
   - `account.updated` — seller onboarding status
   - `payment_intent.succeeded` — successful purchase
   - `transfer.created` — payout to seller

#### Pricing

| Component | Cost |
|-----------|------|
| Stripe Connect | Free (0.25% per payout) |
| Payment Processing | 2.9% + $0.30 per transaction |
| Platform Fee | 10% you keep |

### Phased Rollout

**Month 1-2**: Build backend, integrate Stripe Connect
**Month 3**: Beta with 10 manual-approved sellers
**Month 4**: Open marketplace — anyone can signup

### Security Considerations

- Stripe Connect handles PCI compliance
- Seller bank info never touches your servers
- Webhook signature verification required
- Row-level security in database

### Files to Create

1. `/api/connect.js` — onboarding endpoints
2. `/api/products.js` — CRUD for products
3. `/api/checkout.js` — payment handling
4. `/webhooks/stripe.js` — event handlers
5. `seller-dashboard.html` — seller product management
6. `checkout.html` — customer checkout flow

### Next Actions

- [ ] Create backend repo
- [ ] Set up Stripe Connect sandbox
- [ ] Build OAuth flow
- [ ] Create seller dashboard
- [ ] Test end-to-end purchase
