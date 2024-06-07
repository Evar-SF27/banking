import MobileSideBar from "@/components/sidebar/mobile";
import Sidebar from "@/components/sidebar/sidebar"
import Image from "next/image" 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Evar', lastName: 'Fomuso' }

  return (
    <main>
        <Sidebar user={loggedIn} />
        <div className='flex size-full flex-col'>
          <div className='root-layout'>
            <Image src='/icons/logo.svg' width={30} height={30} alt='menu icon' />
            <div>
              <MobileSideBar user={loggedIn} />
            </div>
          </div>
        {children}
        </div>
    </main>
  );
}