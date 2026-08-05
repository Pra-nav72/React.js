# tailwind css

# installation
npm install tailwindcss @tailwindcss/vite

# configure the vite plugin

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

# import tailwindcss to your main css file(index.css)

@import "tailwindcss";

# Now USE 😇