# Cuci-Pesawat Next.js Project

## Deskripsi

Ini adalah proyek website sederhana untuk layanan cuci pesawat yang dibangun menggunakan Next.js 14 dengan pendekatan App Router. Website ini dirancang dengan gaya modern dan bersih menggunakan Tailwind CSS. Fokus utamanya adalah menampilkan layanan, harga, dan informasi kontak dalam satu halaman.

## Fitur

- Halaman utama dengan tampilan responsif
- Routing bawaan dari Next.js App Router
- Komponen modular untuk Hero, Layanan, Kontak, dan Footer
- Styling menggunakan Tailwind CSS
- Siap untuk di-deploy ke Vercel atau platform lainnya

## Struktur Folder
```
cuci-pesawat/
├── app/
│ ├── page.tsx
│ ├── layout.tsx
│ └── components/
│ ├── Hero.tsx
│ ├── Layanan.tsx
│ ├── Harga.tsx
│ ├── Kontak.tsx
│ └── Footer.tsx
├── public/
│ └── img/
├── styles/
│ └── globals.css
├── package.json
├── tailwind.config.js
└── next.config.js
```
## Cara Menjalankan

1. Clone repo:
```bash
git clone https://github.com/jiichiro/cuci-pesawat.git
cd cuci-pesawat
```

2. Instalasi dependency:
```bash
#npm
npm install
#pnpm
pnpm install
#yarn
yarn install
#bun
bun install
```

3. Jalankan development server:
```bash
#npm
npm run dev
#pnpm
pnpm dev
#yarn
yarn dev
#bun
bun dev
```

4. Buka `http://127.0.0.1:3000` di browser

## Build Production

```bash
#npm
npm run build
npm run start
#pnpm
pnpm run build
pnpm run start
#yarn
yarn run build
yarn run start
#bun
bun run build
bun run start
```

## Teknologi yang Digunakan

- Next.js 14 (App Router)
- React
- Tailwind CSS
- HTML dan JSX
- CSS modular
- Deployment-ready untuk Vercel

## Lisensi
Proyek ini menggunakan lisensi MIT. Silakan digunakan dan dimodifikasi sesuai kebutuhan.