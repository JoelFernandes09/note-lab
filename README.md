# 📚 Note Labs

A sleek, local-first note-taking web app built using **Next.js**, **TailwindCSS**, and **HeroUI**.  
Easily create, view, delete, import, and export notes — all stored locally in your browser!

Check out the live version [here](https://notelab.joelfernandes.co.in)!

---

## 📦 Project Structure

| Path | Description |
|------|-------------|
| `.eslintignore`, `.eslintrc.json` | ESLint configuration for code quality |
| `.gitignore` | Files to exclude from Git tracking |
| `.npmrc` | Custom npm settings |
| `next.config.js` | Next.js app configuration |
| `package.json` | Project dependencies and scripts |
| `postcss.config.js`, `tailwind.config.js` | TailwindCSS setup |
| `tsconfig.json` | TypeScript configuration |
| `.vscode/settings.json` | Editor config (VSCode specific) |
| `app/layout.tsx` | Root layout shared across pages |
| `app/page.tsx` | Main page rendering the entire app |
| `app/providers.tsx` | Wrapper for context/theme providers |
| `components/Header.tsx` | Top navigation and branding |
| `components/Note.tsx` | UI for individual note cards |
| `components/NoteCreator.tsx` | Interface for adding new notes |
| `components/NotesDisplay.tsx` | Renders list of all saved notes |

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/JoelFernandes09/note-lab.git
cd note-lab
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Visit **[http://localhost:3000](http://localhost:3000)** to view the app in your browser.

---

## ✨ Features

- 📝 Create, edit, and delete notes
- 💾 Persistent storage with **localStorage**
- 📥 Import notes from a JSON file
- 📤 Export all notes to JSON
- ⚡ Fast & responsive

---

## 🛠 Upcoming Features

- 🏷 **Labels** — Tag your notes for better organization  
- 🔍 **Filtering with Labels** — Quickly filter notes by selected tags  
- 🔐 **Supabase Auth** — Secure login and user sessions  
- ☁️ **Supabase Storage** — Sync notes across devices

---

## 🤝 Contributing

Pull requests are welcome!  
If you find any bugs or want to suggest new features, feel free to [open an issue](https://github.com/JoelFernandes09/note-lab/issues).

---

## 📄 License

Licensed under the **MIT License** — free to use, modify, and distribute.

---

> Built with 💙 by [Joel Fernandes](https://github.com/JoelFernandes09)
