import { ReactNode } from "react";

export const commands: Record<string, ReactNode> = {

  help: `
about      who am i
skills     tech stack
projects   my projects
contact    reach me
clear      clear terminal
`,

  about: `
Hi I'm Siddharth
Fullstack Developer
React • Next.js • Node.js
`,

  skills: `
React
Next.js
Node.js
Express
Docker
`,

  projects: `
1. Terminal Portfolio
2. Crypto Dashboard
3. Web3 NFT Marketplace
`,

  contact: `
Email: siddharth@email.com
GitHub: github.com/siddharth
`

}