# 1. React 프로젝트 구축하기
- [1. React 프로젝트 구축하기](#1-react-프로젝트-구축하기)
  - [1.1. vscode extension](#11-vscode-extension)
  - [1.2. 개발 스택](#12-개발-스택)
  - [1.3. 환경 구축](#13-환경-구축)
    - [1.3.1. vite로 새 프로젝트 생성](#131-vite로-새-프로젝트-생성)
    - [1.3.2. tanstack-router 구축](#132-tanstack-router-구축)
    - [1.3.3. Mantine UI](#133-mantine-ui)
      - [프로젝트에 path 설정](#프로젝트에-path-설정)

## 1.1. vscode extension
 - Reactjs code snippets
 - react hooks snippets

## 1.2. 개발 스택
 - vite: 빠르고 간결한 모던 웹 프로젝트 개발 경험에 초점을 맞춰 탄생한 빌드 도구
 - typescript: javascript의 슈퍼셋이며, javascript에 타입을 부여한 언어
 - tanstack-router: routing을 위한 라이브러리
 - tanstack-query: 
 - yup: Form validation을 위한 라이브러리

## 1.3. 환경 구축
### 1.3.1. vite로 새 프로젝트 생성
```
  npm create vite@latest my-project
  cd my-project
  npm install
```
참조: [vite](https://ko.vite.dev/guide/)

### 1.3.2. tanstack-router 구축
1. 설치
```
  npm install @tanstack/react-router
  npm install -D @tanstack/router-plugin @tanstack/router-devtools
```
2. Configure the Vite Plugin
```js
// vite.config.ts
import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    viteReact(),
    // ...,
  ],
})
```
3. Create the following files:
 - src/routes/__root.tsx
```js
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
```
 - src/routes/index.lazy.tsx
```js
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  )
}
```
 - src/routes/about.lazy.tsx
```js
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  return <div className="p-2">Hello from About!</div>
}
```
 - src/main.tsx
 ```js
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
 ```

참조: [TanStack Router](https://tanstack.com/router/latest/docs/framework/react/quick-start#srcmaintsx)

### 1.3.3. Mantine UI
1. 설치
```bash
npm install @mantine/core @mantine/hooks @mantine/form
npm install yup
```

2. 

#### 프로젝트에 path 설정
- 플러그인 설치
```bash
# vite에 alias를 설정하지 않아도 tsconfig의 paths를 적용시켜주는 플러그인
npm install -D vite-tsconfig-paths
```
- tsconfig.json 파일에 적용
```js 
{
  "compilerOptions": {
    ...
    "paths": {
      "@/*": ["./src/*"],
    },
  }
  ...
}
```
- vite.config.ts 파일에 적용
```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
});
```





