export type Language = "id" | "en";

export const translations = {
  id: {
    // Navigation
    nav: {
      home: "Beranda",
      howItWorks: "Cara Kerja",
      startChat: "Mulai Chat",
      login: "Masuk",
    },
    // Hero Section
    hero: {
      badge: "AI Lead Filter untuk Bisnis",
      title: "Saring Lead. Simpan yang Serius. Follow-up dengan Mudah.",
      subtitle: "Jangan kehilangan calon klien potensial. KOSMARA menyaring chat, menyimpan lead berkualitas dengan izin, dan mengalirkan prospek serius langsung ke WhatsApp Anda.",
      cta: "Mulai Chat Sekarang",
      ctaSub: "Gratis • Tanpa registrasi",
    },
    // Problem Section
    problem: {
      title: "Masalahnya",
      subtitle: "Setiap hari, bisnis Anda kehilangan lead berharga",
      items: [
        {
          title: "Chat Menumpuk",
          description: "Puluhan chat masuk setiap hari, sulit membedakan mana yang serius dan mana yang hanya tanya-tanya.",
        },
        {
          title: "Lead Hilang",
          description: "Tanpa sistem penyimpanan, lead potensial menghilang selamanya setelah chat berakhir.",
        },
        {
          title: "Follow-up Berantakan",
          description: "Tidak ada catatan terstruktur, tim Anda kesulitan menindaklanjuti dengan tepat.",
        },
      ],
    },
    // Insight Section
    insight: {
      title: "Faktanya",
      stat: "67%",
      description: "lead potensial hilang karena tidak ada sistem filter dan penyimpanan yang terstruktur.",
      source: "Berdasarkan riset konversi digital UMKM",
    },
    // Solution Section
    solution: {
      title: "Solusinya",
      subtitle: "KOSMARA: AI Filter Lead yang Bekerja untuk Anda",
      features: [
        {
          title: "AI Filter Cerdas",
          description: "Menyaring setiap chat dengan pertanyaan terstruktur untuk mengidentifikasi lead berkualitas.",
        },
        {
          title: "Penyimpanan Aman",
          description: "Lead yang memberikan izin tersimpan aman dan terorganisir untuk follow-up.",
        },
        {
          title: "WhatsApp Integration",
          description: "Prospek serius langsung terhubung ke WhatsApp Anda dengan ringkasan lengkap.",
        },
        {
          title: "Dashboard Sederhana",
          description: "Pantau, kelola, dan ekspor data lead dengan mudah kapan saja.",
        },
      ],
    },
    // How It Works Section
    howItWorks: {
      title: "Cara Kerja",
      subtitle: "Sederhana, cepat, dan efektif",
      steps: [
        {
          step: "01",
          title: "Pengunjung Mulai Chat",
          description: "Calon klien membuka website dan memulai percakapan dengan AI kami.",
        },
        {
          step: "02",
          title: "AI Menyaring & Merangkum",
          description: "AI bertanya terstruktur tentang bisnis, tujuan, masalah, dan urgensi mereka.",
        },
        {
          step: "03",
          title: "Izin & Penyimpanan",
          description: "Dengan izin eksplisit, ringkasan lead tersimpan aman untuk follow-up.",
        },
        {
          step: "04",
          title: "WhatsApp dengan Context",
          description: "Prospek klik WhatsApp dengan pesan yang sudah berisi ringkasan lengkap.",
        },
      ],
    },
    // Trust Section
    trust: {
      title: "Mengapa KOSMARA?",
      items: [
        "Privasi terjaga - data hanya disimpan dengan izin eksplisit",
        "AI yang profesional dan tidak memaksa",
        "Dashboard sederhana untuk bisnis owner",
        "Export CSV untuk analisis lebih lanjut",
      ],
    },
    // CTA Section
    cta: {
      title: "Siap Menyaring Lead Anda?",
      subtitle: "Mulai chat sekarang dan rasakan bagaimana KOSMARA bekerja untuk bisnis Anda.",
      button: "Mulai Chat",
    },
    // Footer
    footer: {
      copyright: "© 2025 KOSMARA. Semua hak dilindungi.",
      tagline: "AI Lead Filter untuk Bisnis yang Serius",
    },
    // Chat
    chat: {
      title: "Chat dengan KOSMARA",
      placeholder: "Ketik pesan Anda...",
      send: "Kirim",
      whatsappCta: "Lanjut ke WhatsApp",
      typing: "KOSMARA sedang mengetik...",
      welcome: "Halo! Saya KOSMARA, asisten AI yang akan membantu memahami kebutuhan bisnis Anda. Apa tujuan bisnis Anda saat ini?",
    },
    // Dashboard
    dashboard: {
      title: "Dashboard Lead",
      subtitle: "Kelola dan pantau semua lead Anda",
      filters: "Filter",
      export: "Export CSV",
      noLeads: "Belum ada lead tersimpan",
      columns: {
        date: "Tanggal",
        name: "Nama",
        businessType: "Jenis Bisnis",
        problem: "Masalah Utama",
        urgency: "Urgensi",
        language: "Bahasa",
        status: "Status",
        consent: "Izin",
      },
      status: {
        new: "Baru",
        in_progress: "Proses",
        closed_won: "Menang",
        closed_lost: "Kalah",
      },
    },
    // Auth
    auth: {
      login: "Masuk",
      logout: "Keluar",
      email: "Email",
      password: "Password",
      submit: "Masuk",
      error: "Email atau password salah",
    },
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      howItWorks: "How It Works",
      startChat: "Start Chat",
      login: "Login",
    },
    // Hero Section
    hero: {
      badge: "AI Lead Filter for Business",
      title: "Filter Leads. Keep the Serious Ones. Follow-up Easily.",
      subtitle: "Don't lose potential clients. KOSMARA filters chats, stores quality leads with consent, and connects serious prospects directly to your WhatsApp.",
      cta: "Start Chat Now",
      ctaSub: "Free • No registration",
    },
    // Problem Section
    problem: {
      title: "The Problem",
      subtitle: "Every day, your business loses valuable leads",
      items: [
        {
          title: "Chat Overload",
          description: "Dozens of chats come in daily, hard to distinguish serious ones from just window shoppers.",
        },
        {
          title: "Lost Leads",
          description: "Without a storage system, potential leads disappear forever after the chat ends.",
        },
        {
          title: "Messy Follow-up",
          description: "No structured notes, your team struggles to follow up properly.",
        },
      ],
    },
    // Insight Section
    insight: {
      title: "The Fact",
      stat: "67%",
      description: "of potential leads are lost because there's no structured filter and storage system.",
      source: "Based on SME digital conversion research",
    },
    // Solution Section
    solution: {
      title: "The Solution",
      subtitle: "KOSMARA: AI Lead Filter That Works for You",
      features: [
        {
          title: "Smart AI Filter",
          description: "Filters every chat with structured questions to identify quality leads.",
        },
        {
          title: "Secure Storage",
          description: "Leads who give consent are stored safely and organized for follow-up.",
        },
        {
          title: "WhatsApp Integration",
          description: "Serious prospects connect directly to your WhatsApp with a complete summary.",
        },
        {
          title: "Simple Dashboard",
          description: "Monitor, manage, and export lead data easily anytime.",
        },
      ],
    },
    // How It Works Section
    howItWorks: {
      title: "How It Works",
      subtitle: "Simple, fast, and effective",
      steps: [
        {
          step: "01",
          title: "Visitor Starts Chat",
          description: "Potential clients open the website and start a conversation with our AI.",
        },
        {
          step: "02",
          title: "AI Filters & Summarizes",
          description: "AI asks structured questions about their business, goals, problems, and urgency.",
        },
        {
          step: "03",
          title: "Consent & Storage",
          description: "With explicit consent, the lead summary is stored securely for follow-up.",
        },
        {
          step: "04",
          title: "WhatsApp with Context",
          description: "Prospects click WhatsApp with a message containing the complete summary.",
        },
      ],
    },
    // Trust Section
    trust: {
      title: "Why KOSMARA?",
      items: [
        "Privacy protected - data only stored with explicit consent",
        "Professional AI that doesn't push",
        "Simple dashboard for business owners",
        "CSV export for further analysis",
      ],
    },
    // CTA Section
    cta: {
      title: "Ready to Filter Your Leads?",
      subtitle: "Start chatting now and experience how KOSMARA works for your business.",
      button: "Start Chat",
    },
    // Footer
    footer: {
      copyright: "© 2025 KOSMARA. All rights reserved.",
      tagline: "AI Lead Filter for Serious Business",
    },
    // Chat
    chat: {
      title: "Chat with KOSMARA",
      placeholder: "Type your message...",
      send: "Send",
      whatsappCta: "Continue to WhatsApp",
      typing: "KOSMARA is typing...",
      welcome: "Hello! I'm KOSMARA, an AI assistant that will help understand your business needs. What is your current business goal?",
    },
    // Dashboard
    dashboard: {
      title: "Lead Dashboard",
      subtitle: "Manage and monitor all your leads",
      filters: "Filters",
      export: "Export CSV",
      noLeads: "No leads saved yet",
      columns: {
        date: "Date",
        name: "Name",
        businessType: "Business Type",
        problem: "Main Problem",
        urgency: "Urgency",
        language: "Language",
        status: "Status",
        consent: "Consent",
      },
      status: {
        new: "New",
        in_progress: "In Progress",
        closed_won: "Won",
        closed_lost: "Lost",
      },
    },
    // Auth
    auth: {
      login: "Login",
      logout: "Logout",
      email: "Email",
      password: "Password",
      submit: "Login",
      error: "Invalid email or password",
    },
  },
};

export function getTranslation(lang: Language) {
  return translations[lang];
}
