export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
export const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
export const supabaseHostname = supabaseUrl.split("//")[1] || "";

export const xenditApiKey = process.env.XENDIT_API_KEY || "";
export const xenditRedirectUrl = process.env.NEXT_PUBLIC_XENDIT_REDIRECT_URL || "";
export const xenditWebhookToken = process.env.XENDIT_WEBHOOK_TOKEN || "";
