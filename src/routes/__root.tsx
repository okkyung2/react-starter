import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Header from '../Components/Header'
import { useState } from 'react';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export const Route = createRootRoute({
  component: RootComponent
})

function RootComponent() {
  const isLogin = false;
  if (isLogin) {
    return <Outlet/>
  }
  else {
    return <>
      <MantineProvider theme={theme}>
        <Header />
        <Outlet />
        <TanStackRouterDevtools />
      </MantineProvider>
    </>
  }
}