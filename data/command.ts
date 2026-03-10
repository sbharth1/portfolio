import { ReactNode } from "react";

export const commands: Record<string, ReactNode> = {

  help: `
Available commands:

about       who am i
skills      tech stack
projects    my work
contact     contact info
github      open github
linkedin    open linkedin
clear       clear terminal
`,

  about: `
Hi 👋
I'm Siddharth Baghel

Fullstack Developer
React • Next.js • Node.js • Express
Learning Web3 & Blockchain
`,

  skills: `
React
Next.js
Node.js
Express
PostgreSQL
Docker
Web3
`,

  projects: `
1. Terminal Portfolio
2. Crypto Dashboard
3. Web3 NFT Marketplace
`,

  contact: `
Email: baghelsiddharth942@gmail.com
Location: India
`
}