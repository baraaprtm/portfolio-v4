# Baraa Pratama — Portfolio V4

Personal portfolio website milik **Baraa Pratama**, seorang **Software Developer** yang berfokus pada software development, backend development, REST API, database, system design, dan web development.

Portfolio ini digunakan untuk menampilkan profil, skills, services, pengalaman project, dan berbagai project yang telah dibuat.

---

## 🌐 Live Website

**Portfolio V4:**

https://baraaprtm-portfolio-v4.vercel.app/

**GitHub Repository:**

https://github.com/baraaprtm/portfolio-v4

---

## 👨‍💻 About

Saya adalah **Software Developer** yang tertarik pada pengembangan software, backend systems, API, database, dan system architecture.

Saya berfokus pada bagaimana sebuah software dapat dibangun dengan struktur yang rapi, scalable, maintainable, dan dapat digunakan dengan baik.

Portfolio V4 dibuat sebagai personal website untuk memperkenalkan diri, menampilkan skills, services, dan project yang telah saya kerjakan.

---

## 🎯 Focus

Portfolio ini berfokus pada beberapa area utama:

- Software Development
- Backend Development
- REST API
- Database
- System Design
- Web Development
- Application Architecture
- Performance & Scalability

---

# 🛠️ Tech Stack

Portfolio V4 dibuat menggunakan beberapa teknologi modern dalam ekosistem web development.

### Core

- Next.js
- React
- TypeScript

### Styling

- Tailwind CSS
- CSS

### Animation

- Motion

### Icons

- React Icons

### UI Components

- ShadCN UI

### Project Slider

- Swiper

### Counter Animation

- React CountUp

### Containerization

- Docker

---

# 📚 Technologies

Berikut teknologi yang saya gunakan atau pelajari dalam software development.

## Languages

- JavaScript
- TypeScript
- Java
- Kotlin
- PHP
- Go
- Rust
- Dart

## Frontend

- HTML
- CSS
- JavaScript
- TypeScript
- Vite

## Backend

- Node.js
- NestJS
- Laravel
- Spring
- REST API
- Bun

## Database

- MySQL
- PostgreSQL
- MongoDB
- Redis
- Elasticsearch

## DevOps & Tools

- Git
- Docker
- Jenkins

## Testing & Performance

- k6
- Performance Testing

---

# ✨ Features

Portfolio V4 memiliki beberapa fitur utama.

### 🏠 Home

Menampilkan identitas utama:

**Baraa Pratama**
**Software Developer**

serta informasi singkat mengenai fokus dan bidang yang ditekuni.

---

### 👤 About

Section About digunakan untuk memperkenalkan:

- Identitas
- Role sebagai Software Developer
- Fokus pengembangan software
- Pendekatan terhadap software development
- Minat terhadap backend, database, API, dan system design

---

### ⚙️ Services

Portfolio menampilkan beberapa layanan/area pengembangan:

#### 01 — Backend Development

Pengembangan backend menggunakan teknologi seperti Node.js, NestJS, REST API, dan database.

#### 02 — API Development

Membangun REST API yang terstruktur dan dapat digunakan oleh berbagai aplikasi atau client.

#### 03 — Database Design

Merancang dan mengelola database menggunakan:

- PostgreSQL
- MySQL
- MongoDB
- Redis

#### 04 — System Design

Merancang struktur sistem dengan mempertimbangkan:

- Application architecture
- Scalability
- Caching
- Messaging
- Distributed systems
- Maintainability

---

### 💼 Work / Projects

Portfolio memiliki section untuk menampilkan project-project yang telah dibuat.

Setiap project dapat menampilkan:

- Project name
- Project description
- Technologies
- Project preview
- Project link
- Source code jika tersedia

Project yang ditampilkan merupakan project yang benar-benar dibuat dan dimiliki oleh Baraa Pratama.

---

### 📄 Resume

Portfolio menyediakan halaman Resume untuk menampilkan informasi profesional dan teknologi yang digunakan.

---

### 📩 Contact

Portfolio menyediakan halaman Contact agar pengunjung dapat menghubungi saya.

Email:

**[baraaprtm@gmail.com](mailto:baraaprtm@gmail.com)**

---

# 🔗 Social Media

### GitHub

https://github.com/baraaprtm

### TikTok

https://www.tiktok.com/@baraasoftboy

### Instagram

https://www.instagram.com/baraaprtm_

### Telegram

https://t.me/baraaprtm

---

# 📊 Portfolio Statistics

Portfolio menggunakan beberapa statistik untuk menggambarkan ecosystem development yang dipelajari dan digunakan.

- **10+ Technologies**
- **5+ Backend Tools**
- **10+ Projects**
- **100+ GitHub Commits**

---

# 📁 Project Structure

Portfolio V4 menggunakan **Next.js App Router**.

Struktur utama:

```text
portfolio-v4/
│
├── app/
│   ├── contact/
│   ├── resume/
│   ├── services/
│   ├── work/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── Header.tsx
│   ├── Nav.tsx
│   ├── MobileNav.tsx
│   ├── Socials.tsx
│   ├── Stats.tsx
│   ├── Photo.tsx
│   ├── PageTransition.tsx
│   └── StairTransition.tsx
│
├── public/
│   ├── assets/
│   └── images/
│
├── lib/
│
├── Dockerfile
├── next.config.ts
├── package.json
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
```

> Struktur dapat berkembang seiring pengembangan Portfolio V4.

---

# 🚀 Getting Started

Untuk menjalankan Portfolio V4 secara lokal, pastikan software berikut sudah terinstall:

- Node.js
- npm
- Git

---

## 1. Clone Repository

```bash
git clone https://github.com/baraaprtm/portfolio-v4.git
```

Masuk ke folder project:

```bash
cd portfolio-v4
```

---

## 2. Install Dependencies

Jalankan:

```bash
npm install
```

Command ini akan menginstall seluruh dependency yang diperlukan oleh Portfolio V4.

---

## 3. Jalankan Development Server

Gunakan:

```bash
npm run dev
```

Setelah server berjalan, buka:

```text
http://localhost:3000
```

---

# 🏗️ Production Build

Sebelum melakukan deployment, project dapat di-build menggunakan:

```bash
npm run build
```

Jika build berhasil, jalankan production server:

```bash
npm start
```

Website dapat diakses melalui:

```text
http://localhost:3000
```

---

# 🐳 Docker

Portfolio V4 juga memiliki konfigurasi Docker.

## Build Docker Image

Gunakan:

```bash
docker build -t baraaprtm-portfolio-v4 .
```

---

## Run Docker Container

Gunakan:

```bash
docker run -p 3000:3000 baraaprtm-portfolio-v4
```

Kemudian buka:

```text
http://localhost:3000
```

---

# 📦 Export Docker Image

Docker image disimpan oleh Docker pada sistem internalnya dan bukan sebagai file biasa di folder project.

Untuk mengekspor image menjadi file `.tar`, gunakan:

```bash
docker save -o baraaprtm-portfolio-v4.tar baraaprtm-portfolio-v4
```

File berikut akan dibuat:

```text
baraaprtm-portfolio-v4.tar
```

File tersebut dapat dipindahkan ke:

- External drive
- Flash drive
- Komputer lain
- Storage lainnya

Untuk mengimport kembali image tersebut:

```bash
docker load -i baraaprtm-portfolio-v4.tar
```

---

# 🔄 Development Workflow

Workflow pengembangan Portfolio V4:

```text
Development
     ↓
Local Testing
     ↓
npm run build
     ↓
Git Commit
     ↓
Git Push
     ↓
GitHub
     ↓
Vercel Deployment
```

---

# 🌿 Git Workflow

Setelah melakukan perubahan:

### Check status

```bash
git status
```

### Add changes

```bash
git add .
```

### Commit

```bash
git commit -m "update portfolio"
```

### Push

```bash
git push origin main
```

---

# ☁️ Deployment

Portfolio V4 menggunakan **Vercel** untuk production deployment.

Production website:

https://baraaprtm-portfolio-v4.vercel.app/

Repository:

https://github.com/baraaprtm/portfolio-v4

Setiap perubahan yang berhasil di-push ke repository dapat digunakan sebagai sumber deployment sesuai konfigurasi Vercel.

---

# 🎨 Design Direction

Portfolio V4 menggunakan konsep:

**Modern Dark Developer Portfolio**

Karakter visual:

- Dark theme
- Minimalist
- Clean
- Modern
- Developer/technology aesthetic
- Responsive
- Subtle animations
- Project-focused layout

Portfolio mempertahankan identitas visual dari portfolio sebelumnya tetapi dikembangkan agar lebih modern, clean, responsive, dan maintainable.

---

# 📱 Responsive Design

Portfolio dirancang agar dapat digunakan pada berbagai ukuran layar.

### Mobile

```text
320px – 767px
```

### Tablet

```text
768px – 1023px
```

### Laptop

```text
1024px – 1439px
```

### Desktop

```text
1440px+
```

Layout, navigation, typography, project cards, images, spacing, dan component lainnya disesuaikan dengan ukuran layar.

---

# ✨ Animation

Portfolio menggunakan animation secara subtle untuk meningkatkan user experience.

Contohnya:

- Page transition
- Stair transition
- Hover animation
- Smooth transitions
- Mobile navigation animation
- Project slider animation
- Counter animation

Animation digunakan untuk meningkatkan interaksi tanpa mengganggu readability dan performance website.

---

# 🧩 UI Components

Beberapa UI component menggunakan ShadCN UI.

Dependency yang digunakan antara lain:

- Input
- Button
- Scroll Area
- Select
- Sheet
- Tabs
- Textarea
- Tooltip

Component digunakan sesuai kebutuhan halaman dan interaction pada portfolio.

---

# 🖼️ Assets

Asset portfolio disimpan di dalam folder:

```text
public/
```

Asset dapat berupa:

- Images
- Project previews
- Icons
- Profile images
- Other static resources

Asset yang digunakan dalam portfolio merupakan bagian dari project Portfolio V4.

---

# 📌 Project Principle

Portfolio ini memiliki prinsip:

> **Portfolio ≠ Project**

Portfolio berfungsi sebagai katalog dan showcase.

Project merupakan aplikasi atau website sebenarnya yang memiliki:

- Identitas
- Fungsi
- Struktur
- Teknologi
- Source code
- Deployment

Portfolio digunakan untuk mengarahkan pengunjung menuju project sebenarnya.

---

# 🔐 Ownership

Portfolio ini merupakan personal project milik:

**Baraa Pratama**

Role:

**Software Developer**

GitHub:

https://github.com/baraaprtm

Email:

**[baraaprtm@gmail.com](mailto:baraaprtm@gmail.com)**

---

# 📬 Contact

Untuk menghubungi saya:

**Email:**
[baraaprtm@gmail.com](mailto:baraaprtm@gmail.com)

**GitHub:**
https://github.com/baraaprtm

**Instagram:**
https://www.instagram.com/baraaprtm_

**TikTok:**
https://www.tiktok.com/@baraasoftboy

**Telegram:**
https://t.me/baraaprtm

---

# 📄 License

This project is a personal portfolio website owned and maintained by **Baraa Pratama**.

© Baraa Pratama. All rights reserved.
