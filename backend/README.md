# CariGo Backend API

SendGrid APIを使用した問い合わせ・寄付・投資フォームのメール送信システム

## 機能

- 問い合わせフォームの送信と確認メール
- 寄付フォームの送信と確認メール  
- 投資フォームの送信と確認メール
- アプリケーションフォームの送信と確認メール
- Supabaseデータベースとの連携
- ファイルアップロード機能
- 管理者への内部通知メール
- レート制限とセキュリティ機能

## セットアップ

### 1. 依存関係のインストール

```bash
cd backend
npm install
```

### 2. 環境変数の設定

`.env`ファイルを作成し、以下の変数を設定：

```env
# SendGrid Configuration
SENDGRID_API_KEY=your_sendgrid_api_key_here
SENDGRID_FROM_EMAIL=noreply@carigo.com
SENDGRID_FROM_NAME=CariGo Support

# Server Configuration
PORT=3001
NODE_ENV=development

# CORS Configuration
FRONTEND_URL=http://localhost:5173

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=5

# Admin Email (optional)
ADMIN_EMAIL=admin@carigo.com

# Supabase Configuration
SUPABASE_URL=https://gxcundsccsvsvlmsxinr.supabase.co
SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 3. Supabaseの設定

1. [Supabase](https://supabase.com/)でプロジェクトを作成
2. プロジェクトのURLとanon keyを取得
3. 以下のテーブルを作成：

```sql
-- ベンダー問い合わせテーブル
create table public.vendor_inquiries (
    id bigint generated always as identity primary key,
    name text not null,
    email text not null,
    phone text,
    category text,
    title text not null,
    message text not null,
    created_at timestamp with time zone default now()
);

-- ベンダー申請フォームテーブル
create table public.vendor_applications (
    id bigint generated always as identity primary key,
    last_name text not null,
    first_name text not null,
    email text not null,
    phone text not null,
    business_name text not null,
    business_type text,
    registration_number text,
    address text,
    description text,
    product_category text,
    average_sales numeric(12,2),
    free_note_1 text,
    free_note_2 text,
    free_note_3 text,
    business_cert_file text,
    id_doc_file text,
    bank_info_file text,
    created_at timestamp with time zone default now()
);
```

4. ストレージバケットを作成：
   - `IC` - 身分証用
   - `1617` - ビジネス証明書用
   - `bank` - 銀行情報用
   - `address` - 請求住所用

### 4. SendGrid APIキーの取得

1. [SendGrid](https://sendgrid.com/)にアカウントを作成
2. APIキーを生成
3. `.env`ファイルに設定

**EU Data Residency設定:**
- EU subuserを使用する場合、`SENDGRID_EU_DATA_RESIDENCY=true`に設定
- これによりEU地域内でのデータ処理が保証されます

### 4. サーバーの起動

```bash
# 開発モード
npm run dev

# 本番モード
npm start
```

## API エンドポイント

### 問い合わせフォーム

**POST** `/api/contact`

```json
{
  "name": "山田太郎",
  "email": "yamada@example.com",
  "phone": "+673 123 4567",
  "subject": "商品についての問い合わせ",
  "message": "商品の詳細について教えてください。"
}
```

### 寄付フォーム

**POST** `/api/donation`

```json
{
  "name": "山田太郎",
  "email": "yamada@example.com",
  "amount": 100,
  "purpose": "災害支援",
  "anonymous": false,
  "message": "微力ですが支援させていただきます。"
}
```

### 投資フォーム

**POST** `/api/investment`

```json
{
  "name": "山田太郎",
  "company": "株式会社山田",
  "email": "yamada@example.com",
  "phone": "+673 123 4567",
  "amount": 10000,
  "type": "equity",
  "experience": "experienced",
  "message": "投資に興味があります。詳細を教えてください。"
}
```

### アプリケーションフォーム

**POST** `/api/application`

```json
{
  "name": "山田太郎",
  "email": "yamada@example.com",
  "phone": "+673 123 4567",
  "businessName": "株式会社山田",
  "businessType": "corporation",
  "businessRegistration": "123456789",
  "businessAddress": "123 Test Street, Bandar Seri Begawan, Brunei",
  "industry": "Technology",
  "yearsInBusiness": 5,
  "numberOfEmployees": 10,
  "annualRevenue": "100k-500k",
  "productCategories": ["Electronics", "Accessories"],
  "estimatedMonthlySales": "5k-10k",
  "hasExistingInventory": true,
  "previousEcommerceExperience": true,
  "platformsUsed": ["Shopify", "Amazon"],
  "marketingChannels": ["Social Media", "Google Ads"],
  "specialRequirements": "特別な要件があれば記入",
  "howDidYouHear": "ウェブサイト",
  "agreeToTerms": true,
  "agreeToMarketing": false
}
```

レスポンス:
```json
{
  "success": true,
  "message": "アプリケーションを受け付けました。確認メールを送信いたしました。",
  "data": {
    "email": "yamada@example.com",
    "businessName": "株式会社山田",
    "databaseSaved": true,
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
}
```

### ファイルアップロード

**POST** `/api/upload/application-files`

アプリケーションフォーム用のファイルをアップロードします。

リクエスト（multipart/form-data）:
- `businessCert`: ビジネス証明書ファイル
- `idDoc`: 身分証ファイル
- `bankInfo`: 銀行情報ファイル

**POST** `/api/upload/address-document`

請求住所証明書をアップロードします。

リクエスト（multipart/form-data）:
- `addressDoc`: 請求住所証明書ファイル

### ヘルスチェック

**GET** `/health` - サーバー全体のヘルスチェック
**GET** `/api/contact/health` - 問い合わせサービスのヘルスチェック
**GET** `/api/donation/health` - 寄付サービスのヘルスチェック
**GET** `/api/investment/health` - 投資サービスのヘルスチェック
**GET** `/api/application/health` - アプリケーションサービスのヘルスチェック

### テストエンドポイント

**POST** `/api/test/sendgrid` - SendGrid基本機能テスト
**GET** `/api/test/sendgrid/status` - SendGrid設定状況確認
**POST** `/api/test/contact` - 問い合わせフォームメールテスト
**POST** `/api/test/donation` - 寄付フォームメールテスト
**POST** `/api/test/investment` - 投資フォームメールテスト
**POST** `/api/test/application` - アプリケーションフォームメールテスト
**GET** `/api/test/supabase` - Supabase接続テスト
**POST** `/api/test/supabase/application` - Supabaseアプリケーション保存テスト
**POST** `/api/test/supabase/inquiry` - Supabase問い合わせ保存テスト

## レスポンス形式

### 成功時

```json
{
  "success": true,
  "message": "お問い合わせを受け付けました。確認メールを送信いたしました。",
  "data": {
    "email": "yamada@example.com",
    "timestamp": "2024-01-01T12:00:00.000Z"
  }
}
```

### エラー時

```json
{
  "success": false,
  "error": "Validation Error",
  "details": ["name is required", "email must be a valid email"]
}
```

## セキュリティ機能

- **レート制限**: IPアドレスあたり15分間に5リクエストまで
- **入力検証**: Joiを使用した厳密なバリデーション
- **CORS**: フロントエンドURLのみ許可
- **Helmet**: セキュリティヘッダーの設定

## メールテンプレート

- HTMLとテキスト形式の両方をサポート
- 日本語と英語の両言語対応
- レスポンシブデザイン
- ブランドカラーを使用したデザイン

## デプロイ

### Heroku

```bash
# Heroku CLIをインストール後
heroku create carigo-backend
heroku config:set SENDGRID_API_KEY=your_api_key
heroku config:set NODE_ENV=production
git push heroku main
```

### Vercel

```bash
# Vercel CLIをインストール後
vercel --prod
```

## テスト方法

### 1. SendGrid基本テスト

```bash
# SendGrid設定状況確認
curl http://localhost:3001/api/test/sendgrid/status

# 基本的なメール送信テスト
curl -X POST http://localhost:3001/api/test/sendgrid \
  -H "Content-Type: application/json" \
  -d '{
    "to": "your-email@example.com",
    "subject": "SendGrid Test",
    "text": "This is a test email from SendGrid"
  }'
```

### 2. フォームメールテスト

```bash
# 問い合わせフォームテスト
curl -X POST http://localhost:3001/api/test/contact \
  -H "Content-Type: application/json" \
  -d '{"email": "your-email@example.com"}'

# 寄付フォームテスト
curl -X POST http://localhost:3001/api/test/donation \
  -H "Content-Type: application/json" \
  -d '{"email": "your-email@example.com"}'

# 投資フォームテスト
curl -X POST http://localhost:3001/api/test/investment \
  -H "Content-Type: application/json" \
  -d '{"email": "your-email@example.com"}'

# アプリケーションフォームテスト
curl -X POST http://localhost:3001/api/test/application \
  -H "Content-Type: application/json" \
  -d '{"email": "your-email@example.com"}'
```

## トラブルシューティング

### よくある問題

1. **SendGrid APIキーエラー**
   - APIキーが正しく設定されているか確認
   - SendGridアカウントがアクティブか確認
   - EU subuserを使用している場合は`SENDGRID_EU_DATA_RESIDENCY=true`に設定

2. **CORSエラー**
   - `FRONTEND_URL`が正しく設定されているか確認

3. **レート制限エラー**
   - 15分間待ってから再試行
   - レート制限の設定を調整

4. **EU Data Residencyエラー**
   - EU subuserを使用している場合は`SENDGRID_EU_DATA_RESIDENCY=true`に設定
   - SendGridアカウントがEU subuserとして設定されているか確認

### ログの確認

```bash
# 開発モードでのログ確認
npm run dev

# 本番環境でのログ確認
heroku logs --tail
```

## ライセンス

MIT License
