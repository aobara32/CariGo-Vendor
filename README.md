# CariGo Merchant Portal

A React + TypeScript + Vite project using Tailwind CSS and a lightweight shadcn-style UI for the merchant-facing portal.

## Scripts
- dev: Start local dev server
- build: Production build
- preview: Preview production build

## Tech
- React + TypeScript + Vite
- Tailwind CSS
- React Router

## Getting Started
1. Install dependencies
```bash
npm install
```

2. Environment Variables Setup
Create a `.env.local` file in the root directory with the following variables:
```bash
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
VITE_SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here
VITE_API_BASE_URL=http://localhost:3001/api
```

**Note:** The `VITE_SUPABASE_SERVICE_ROLE_KEY` is optional but recommended for bypassing Row Level Security (RLS) policies when inserting data from the frontend.

## Troubleshooting

### Row Level Security (RLS) Errors

If you encounter "new row violates row-level security policy" errors:

1. **Set the Service Role Key** (Recommended):
   ```bash
   VITE_SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
   ```

2. **Alternative: Configure RLS Policies**:
   - Go to your Supabase dashboard
   - Navigate to SQL Editor
   - Run the SQL script from `supabase-simple-rls.sql` (recommended for quick setup)
   - Or run the comprehensive script from `supabase-rls-policies.sql` (includes admin policies)
   - Or manually create INSERT policies for `vendor_inquiries` and `vendor_applications` tables

3. **Debug Connection**:
   The application includes automatic fallback to backend API when RLS errors occur. Check browser console for detailed error information.

4. Start dev server
```bash
npm run dev
```

## i18n
Simple language switcher (EN/MS) via `LanguageContext` with localStorage persistence.
