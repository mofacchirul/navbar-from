"use client"

import { useSession } from 'next-auth/react';
import React from 'react';

const Userinfo = () => {
    const session = useSession()
    return (
        <div>
            {JSON.stringify(session)}
        </div>
    );
};

export default Userinfo;