import { redirect } from 'next/navigation';
import {getServerSession}from 'next-auth'
import React from 'react';

export default async function ProtectedRote(){

    const session = await getServerSession();
    if (!session || !session.user) {
        redirect("/api/auth/signin")
    }
    return (
        <React.Fragment>
            this is a protected route 
            <br />
            you will see this only if you are authenticated
        </React.Fragment>
    )
}