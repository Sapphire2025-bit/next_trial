"use client";

import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <QueryClientProvider client={queryClient}>
    {children}
    </QueryClientProvider>
  );
}
