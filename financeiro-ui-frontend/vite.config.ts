<<<<<<< HEAD
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
>>>>>>> 36580c7b5045a24cd963c3fea35a7f61069d6dbc

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
})
