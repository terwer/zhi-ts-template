#!/bin/sh
pnpm install
pnpm build
pnpm vitepress:api 
pnpm vitepress:prepare
vitepress build docs
echo "vercel build theme done."