import { authOptions } from "@/libs/auth"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function MainLayout({ children }: any) {
    const responce = await getServerSession(authOptions)

    if (!responce) {
        redirect('/login')
    }

    if (responce && responce?.user?.name === 'admin') {
        redirect('/admin/dashboard')
    }

    return <>
     
        {children}
    </>
}