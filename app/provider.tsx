"use client";

import { ClerkProvider } from '@clerk/nextjs';
import { HeroUIProvider } from '@heroui/react';
import React from 'react';
import Header from './_components/Header';

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
    <HeroUIProvider>
         {/* Header */}
         <Header />
      {children}
    </HeroUIProvider>
    </ClerkProvider>
  );
}

export default Provider;
