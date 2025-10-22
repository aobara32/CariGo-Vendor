-- 修正版：セキュリティ対策強化版RLSポリシー設定
-- このSQLスクリプトをSupabaseダッシュボードのSQL Editorで実行してください

-- ==============================================
-- 1. 既存のポリシーをすべて削除
-- ==============================================

-- vendor_inquiriesテーブルの既存ポリシーを削除
DROP POLICY IF EXISTS "Allow public insert on vendor_inquiries" ON "public"."vendor_inquiries";
DROP POLICY IF EXISTS "Allow authenticated select on vendor_inquiries" ON "public"."vendor_inquiries";
DROP POLICY IF EXISTS "Allow public select on vendor_inquiries" ON "public"."vendor_inquiries";
DROP POLICY IF EXISTS "Allow admin update on vendor_inquiries" ON "public"."vendor_inquiries";
DROP POLICY IF EXISTS "Allow admin delete on vendor_inquiries" ON "public"."vendor_inquiries";

-- vendor_applicationsテーブルの既存ポリシーを削除
DROP POLICY IF EXISTS "Allow public insert on vendor_applications" ON "public"."vendor_applications";
DROP POLICY IF EXISTS "Allow authenticated select on vendor_applications" ON "public"."vendor_applications";
DROP POLICY IF EXISTS "Allow public select on vendor_applications" ON "public"."vendor_applications";
DROP POLICY IF EXISTS "Allow admin update on vendor_applications" ON "public"."vendor_applications";
DROP POLICY IF EXISTS "Allow admin delete on vendor_applications" ON "public"."vendor_applications";

-- ストレージオブジェクトの既存ポリシーを削除
DROP POLICY IF EXISTS "Allow public upload to cv bucket" ON storage.objects;
DROP POLICY IF EXISTS "Allow public download from cv bucket" ON storage.objects;
DROP POLICY IF EXISTS "Allow public upload to ic bucket" ON storage.objects;
DROP POLICY IF EXISTS "Allow public download from ic bucket" ON storage.objects;
DROP POLICY IF EXISTS "Allow public upload to 1617 bucket" ON storage.objects;
DROP POLICY IF EXISTS "Allow public download from 1617 bucket" ON storage.objects;
DROP POLICY IF EXISTS "Allow public upload to bank bucket" ON storage.objects;
DROP POLICY IF EXISTS "Allow public download from bank bucket" ON storage.objects;
DROP POLICY IF EXISTS "Allow public upload to address bucket" ON storage.objects;
DROP POLICY IF EXISTS "Allow public download from address bucket" ON storage.objects;
DROP POLICY IF EXISTS "Secure upload to cv bucket" ON storage.objects;
DROP POLICY IF EXISTS "Secure download from cv bucket" ON storage.objects;
DROP POLICY IF EXISTS "Secure upload to ic bucket" ON storage.objects;
DROP POLICY IF EXISTS "Secure download from ic bucket" ON storage.objects;
DROP POLICY IF EXISTS "Secure upload to 1617 bucket" ON storage.objects;
DROP POLICY IF EXISTS "Secure download from 1617 bucket" ON storage.objects;
DROP POLICY IF EXISTS "Secure upload to bank bucket" ON storage.objects;
DROP POLICY IF EXISTS "Secure download from bank bucket" ON storage.objects;
DROP POLICY IF EXISTS "Secure upload to address bucket" ON storage.objects;
DROP POLICY IF EXISTS "Secure download from address bucket" ON storage.objects;

-- ==============================================
-- 2. vendor_inquiriesテーブルのセキュリティ強化ポリシー
-- ==============================================

-- 制限付きINSERTポリシー（メール形式チェック、スパム防止）
CREATE POLICY "Secure public insert on vendor_inquiries" ON "public"."vendor_inquiries"
AS PERMISSIVE FOR INSERT
TO public
WITH CHECK (
  -- メールアドレスの形式チェック
  email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
  -- 名前の長さ制限
  length(name) >= 2 AND length(name) <= 100 AND
  -- メッセージの長さ制限
  length(message) >= 10 AND length(message) <= 2000 AND
  -- 電話番号の形式チェック（オプション）
  (phone IS NULL OR phone ~* '^[\+]?[0-9\s\-\(\)]{10,20}$')
);

-- 認証されたユーザーのみがSELECTできるようにする
CREATE POLICY "Allow authenticated select on vendor_inquiries" ON "public"."vendor_inquiries"
AS PERMISSIVE FOR SELECT
TO authenticated
USING (true);

-- 管理者のみがUPDATEできるようにする
CREATE POLICY "Allow admin update on vendor_inquiries" ON "public"."vendor_inquiries"
AS PERMISSIVE FOR UPDATE
TO authenticated
USING (auth.jwt() ->> 'role' = 'admin')
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

-- 管理者のみがDELETEできるようにする
CREATE POLICY "Allow admin delete on vendor_inquiries" ON "public"."vendor_inquiries"
AS PERMISSIVE FOR DELETE
TO authenticated
USING (auth.jwt() ->> 'role' = 'admin');

-- ==============================================
-- 3. vendor_applicationsテーブルのセキュリティ強化ポリシー
-- ==============================================

-- 制限付きINSERTポリシー（詳細なバリデーション）
CREATE POLICY "Secure public insert on vendor_applications" ON "public"."vendor_applications"
AS PERMISSIVE FOR INSERT
TO public
WITH CHECK (
  -- メールアドレスの形式チェック
  email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
  -- 名前の長さ制限
  length(first_name) >= 2 AND length(first_name) <= 50 AND
  length(last_name) >= 2 AND length(last_name) <= 50 AND
  -- ビジネス名の長さ制限
  length(business_name) >= 2 AND length(business_name) <= 200 AND
  -- 電話番号の形式チェック
  phone ~* '^[\+]?[0-9\s\-\(\)]{10,20}$' AND
  -- ビジネスタイプの制限
  business_type IN ('individual', 'corporation', 'partnership', 'llc', 'other') AND
  -- 平均売上の範囲チェック
  average_sales >= 0 AND average_sales <= 999999999.99
);

-- 認証されたユーザーのみがSELECTできるようにする
CREATE POLICY "Allow authenticated select on vendor_applications" ON "public"."vendor_applications"
AS PERMISSIVE FOR SELECT
TO authenticated
USING (true);

-- 管理者のみがUPDATEできるようにする
CREATE POLICY "Allow admin update on vendor_applications" ON "public"."vendor_applications"
AS PERMISSIVE FOR UPDATE
TO authenticated
USING (auth.jwt() ->> 'role' = 'admin')
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

-- 管理者のみがDELETEできるようにする
CREATE POLICY "Allow admin delete on vendor_applications" ON "public"."vendor_applications"
AS PERMISSIVE FOR DELETE
TO authenticated
USING (auth.jwt() ->> 'role' = 'admin');

-- ==============================================
-- 4. RLSを有効にする
-- ==============================================

ALTER TABLE "public"."vendor_inquiries" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."vendor_applications" ENABLE ROW LEVEL SECURITY;

-- ==============================================
-- 5. ストレージのセキュリティポリシー（修正版）
-- ==============================================

-- CVバケットのポリシー
CREATE POLICY "Allow public upload to cv bucket" ON storage.objects
AS PERMISSIVE FOR INSERT
TO public
WITH CHECK (bucket_id = 'cv');

CREATE POLICY "Allow public download from cv bucket" ON storage.objects
AS PERMISSIVE FOR SELECT
TO public
USING (bucket_id = 'cv');

-- ICバケットのポリシー
CREATE POLICY "Allow public upload to ic bucket" ON storage.objects
AS PERMISSIVE FOR INSERT
TO public
WITH CHECK (bucket_id = 'ic');

CREATE POLICY "Allow public download from ic bucket" ON storage.objects
AS PERMISSIVE FOR SELECT
TO public
USING (bucket_id = 'ic');

-- 1617バケットのポリシー
CREATE POLICY "Allow public upload to 1617 bucket" ON storage.objects
AS PERMISSIVE FOR INSERT
TO public
WITH CHECK (bucket_id = '1617');

CREATE POLICY "Allow public download from 1617 bucket" ON storage.objects
AS PERMISSIVE FOR SELECT
TO public
USING (bucket_id = '1617');

-- Bankバケットのポリシー
CREATE POLICY "Allow public upload to bank bucket" ON storage.objects
AS PERMISSIVE FOR INSERT
TO public
WITH CHECK (bucket_id = 'bank');

CREATE POLICY "Allow public download from bank bucket" ON storage.objects
AS PERMISSIVE FOR SELECT
TO public
USING (bucket_id = 'bank');

-- Addressバケットのポリシー
CREATE POLICY "Allow public upload to address bucket" ON storage.objects
AS PERMISSIVE FOR INSERT
TO public
WITH CHECK (bucket_id = 'address');

CREATE POLICY "Allow public download from address bucket" ON storage.objects
AS PERMISSIVE FOR SELECT
TO public
USING (bucket_id = 'address');

-- ==============================================
-- 6. 設定確認
-- ==============================================

-- テーブルポリシーの確認
SELECT 
    schemaname, 
    tablename, 
    policyname, 
    permissive, 
    roles, 
    cmd
FROM pg_policies 
WHERE tablename IN ('vendor_inquiries', 'vendor_applications')
ORDER BY tablename, policyname;

-- ストレージポリシーの確認
SELECT 
    schemaname, 
    tablename, 
    policyname, 
    permissive, 
    roles, 
    cmd
FROM pg_policies 
WHERE tablename = 'objects' 
AND schemaname = 'storage'
ORDER BY policyname;
