import { createClient } from '@supabase/supabase-js';

// Supabase設定 - 環境変数から取得
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase環境変数が設定されていません。VITE_SUPABASE_URLとVITE_SUPABASE_ANON_KEYを設定してください。');
}

// 通常のクライアント（認証が必要）
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// サービスロールクライアント（RLSをバイパス）
export const supabaseAdmin = supabaseServiceRoleKey 
  ? createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })
  : null;

export default supabase;
