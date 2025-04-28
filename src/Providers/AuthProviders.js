"use client"
import { SessionProvider } from 'next-auth/react';
import React from 'react';

const NexAuthSessionProvider = ({children}) => {
    return <SessionProvider> {children} </SessionProvider>
};

export default NexAuthSessionProvider;