export type Language = "id" | "en";

export const translations = {
  id: {
    // Navigation
    nav: {
      home: "Beranda",
      howItWorks: "Cara Kerja",
      startChat: "Coba Demo",
      login: "Masuk",
    },
    // Hero Section
    hero: {
      badge: "Asisten AI untuk Kualifikasi Lead WhatsApp",
      title: "Otomatis Saring Lead Berkualitas dari Chat WhatsApp Anda",
      subtitle: "KOSMARA adalah asisten AI yang membantu bisnis Anda menyaring, mengkualifikasi, dan menyimpan lead potensial secara otomatis. Fokus ke closing, biarkan AI yang handle screening.",
      cta: "Coba Demo Gratis",
      ctaSub: "Tanpa registrasi • Langsung coba",
    },
    // Problem Section
    problem: {
      title: "Masalah yang Sering Dialami UMKM",
      subtitle: "Kehilangan lead berkualitas karena proses manual yang tidak efisien",
      items: [
        {
          title: "Chat Menumpuk",
          description: "Ratusan chat masuk setiap hari, sulit membedakan calon pembeli serius dengan yang hanya bertanya-tanya.",
        },
        {
          title: "Lead Hilang",
          description: "Tanpa sistem penyimpanan terstruktur, informasi lead potensial menghilang begitu saja setelah chat berakhir.",
        },
        {
          title: "Follow-up Tidak Terorganisir",
          description: "Tidak ada catatan lengkap, tim sales kesulitan melakukan follow-up yang efektif dan tepat waktu.",
        },
      ],
    },
    // Insight Section
    insight: {
      title: "Fakta Bisnis",
      stat: "67%",
      description: "lead potensial hilang karena tidak ada sistem kualifikasi dan penyimpanan yang terstruktur.",
      source: "Berdasarkan riset konversi digital UMKM Indonesia 2024",
    },
    // Solution Section
    solution: {
      title: "Solusi KOSMARA",
      subtitle: "Sistem AI yang bekerja 24/7 untuk bisnis Anda",
      features: [
        {
          title: "Penyaringan Otomatis",
          description: "AI mengajukan pertanyaan terstruktur untuk mengidentifikasi dan mengkualifikasi lead yang benar-benar berpotensi.",
        },
        {
          title: "Penyimpanan Terorganisir",
          description: "Semua informasi lead tersimpan aman dengan persetujuan, siap untuk ditindaklanjuti tim sales Anda.",
        },
        {
          title: "Integrasi WhatsApp",
          description: "Lead berkualitas langsung terhubung ke WhatsApp Business Anda dengan summary lengkap kebutuhan mereka.",
        },
        {
          title: "Dashboard Simpel",
          description: "Pantau, kelola, update status, dan export data lead dengan mudah dari satu tempat.",
        },
      ],
    },
    // How It Works Section
    howItWorks: {
      title: "Cara Kerja",
      subtitle: "Proses otomatis dalam 4 langkah sederhana",
      steps: [
        {
          step: "01",
          title: "Pengunjung Memulai Chat",
          description: "Calon klien mengklik tombol chat di website dan memulai percakapan dengan AI kami.",
        },
        {
          step: "02",
          title: "AI Mengajukan Pertanyaan",
          description: "Sistem bertanya secara terstruktur tentang bisnis, kebutuhan, masalah, dan tingkat urgensi mereka.",
        },
        {
          step: "03",
          title: "Lead Disimpan",
          description: "Dengan persetujuan eksplisit, ringkasan lengkap lead tersimpan aman di database untuk follow-up.",
        },
        {
          step: "04",
          title: "Follow-up via WhatsApp",
          description: "Lead berkualitas mendapat link WhatsApp dengan pesan berisi ringkasan kebutuhan mereka.",
        },
      ],
    },
    // Trust Section
    trust: {
      title: "Kenapa Pilih KOSMARA?",
      items: [
        "Privasi Terjamin - Data hanya disimpan dengan izin eksplisit dari lead",
        "AI Profesional - Percakapan natural tanpa terkesan bot atau pushy",
        "Setup Mudah - Tidak perlu coding, langsung bisa digunakan",
        "Export Data - Download semua lead dalam format CSV untuk analisis",
      ],
    },
    // CTA Section
    cta: {
      title: "Siap Tingkatkan Kualitas Lead Anda?",
      subtitle: "Coba demo sekarang dan rasakan bagaimana KOSMARA bisa membantu bisnis Anda.",
      button: "Coba Demo Gratis",
    },
    // Footer
    footer: {
      copyright: "© 2025 KOSMARA. Semua hak dilindungi.",
      tagline: "Asisten AI untuk Kualifikasi Lead WhatsApp",
    },
    // Chat
    chat: {
      title: "Demo Chat dengan KOSMARA",
      placeholder: "Ketik pesan Anda...",
      send: "Kirim",
      whatsappCta: "Lanjut ke WhatsApp",
      typing: "KOSMARA sedang mengetik...",
      welcome: "Halo! Saya KOSMARA, asisten AI yang akan membantu memahami kebutuhan bisnis Anda. Boleh saya tahu, apa tujuan bisnis Anda saat ini?",
    },
    // Dashboard
    dashboard: {
      title: "Dashboard Lead",
      subtitle: "Kelola dan pantau semua lead Anda dalam satu tempat",
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
      startChat: "Try Demo",
      login: "Login",
    },
    // Hero Section
    hero: {
      badge: "AI Assistant for WhatsApp Lead Qualification",
      title: "Automatically Filter Quality Leads from Your WhatsApp Chats",
      subtitle: "KOSMARA is an AI assistant that helps your business filter, qualify, and store potential leads automatically. Focus on closing deals, let AI handle the screening.",
      cta: "Try Free Demo",
      ctaSub: "No registration • Try instantly",
    },
    // Problem Section
    problem: {
      title: "Common SME Challenges",
      subtitle: "Losing quality leads due to inefficient manual processes",
      items: [
        {
          title: "Chat Overload",
          description: "Hundreds of chats daily, difficult to distinguish serious buyers from casual inquiries.",
        },
        {
          title: "Lost Leads",
          description: "Without a structured storage system, potential lead information disappears after chats end.",
        },
        {
          title: "Unorganized Follow-up",
          description: "No complete records, sales team struggles with effective and timely follow-ups.",
        },
      ],
    },
    // Insight Section
    insight: {
      title: "Business Fact",
      stat: "67%",
      description: "of potential leads are lost due to lack of structured qualification and storage systems.",
      source: "Based on Indonesian SME digital conversion research 2024",
    },
    // Solution Section
    solution: {
      title: "KOSMARA Solution",
      subtitle: "AI system working 24/7 for your business",
      features: [
        {
          title: "Automatic Filtering",
          description: "AI asks structured questions to identify and qualify truly potential leads.",
        },
        {
          title: "Organized Storage",
          description: "All lead information stored securely with consent, ready for your sales team to follow up.",
        },
        {
          title: "WhatsApp Integration",
          description: "Quality leads connect directly to your WhatsApp Business with complete needs summary.",
        },
        {
          title: "Simple Dashboard",
          description: "Monitor, manage, update status, and export lead data easily from one place.",
        },
      ],
    },
    // How It Works Section
    howItWorks: {
      title: "How It Works",
      subtitle: "Automatic process in 4 simple steps",
      steps: [
        {
          step: "01",
          title: "Visitor Starts Chat",
          description: "Potential clients click the chat button on your website and start conversation with our AI.",
        },
        {
          step: "02",
          title: "AI Asks Questions",
          description: "System asks structured questions about their business, needs, problems, and urgency level.",
        },
        {
          step: "03",
          title: "Lead Stored",
          description: "With explicit consent, complete lead summary is securely stored in database for follow-up.",
        },
        {
          step: "04",
          title: "Follow-up via WhatsApp",
          description: "Quality leads get WhatsApp link with message containing their needs summary.",
        },
      ],
    },
    // Trust Section
    trust: {
      title: "Why Choose KOSMARA?",
      items: [
        "Privacy Guaranteed - Data only stored with explicit consent from leads",
        "Professional AI - Natural conversation without feeling like a bot or pushy",
        "Easy Setup - No coding required, ready to use immediately",
        "Data Export - Download all leads in CSV format for analysis",
      ],
    },
    // CTA Section
    cta: {
      title: "Ready to Improve Your Lead Quality?",
      subtitle: "Try the demo now and experience how KOSMARA can help your business.",
      button: "Try Free Demo",
    },
    // Footer
    footer: {
      copyright: "© 2025 KOSMARA. All rights reserved.",
      tagline: "AI Assistant for WhatsApp Lead Qualification",
    },
    // Chat
    chat: {
      title: "Demo Chat with KOSMARA",
      placeholder: "Type your message...",
      send: "Send",
      whatsappCta: "Continue to WhatsApp",
      typing: "KOSMARA is typing...",
      welcome: "Hello! I'm KOSMARA, an AI assistant that will help understand your business needs. May I know, what is your current business goal?",
    },
    // Dashboard
    dashboard: {
      title: "Lead Dashboard",
      subtitle: "Manage and monitor all your leads in one place",
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
