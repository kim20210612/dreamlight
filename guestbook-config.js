// 방명록 저장소 설정
// Supabase 프로젝트를 만들고 아래 두 값을 채우면 모든 방문자가 공유하는 방명록이 됩니다.
// 비워두면 "체험 모드"(글이 각자 브라우저에만 저장)로 동작합니다.
window.GUESTBOOK_CONFIG = {
  supabaseUrl: "",      // 예: "https://xxxx.supabase.co"
  supabaseAnonKey: "",  // Supabase → Settings → API → anon public key
};
