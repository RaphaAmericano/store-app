"use client"
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface ProvidersProps {
    children: ReactNode
}

const Providers = (props: ProvidersProps) => {
    const { children } = props;
    return <SessionProvider>{children}</SessionProvider>
}

export default Providers