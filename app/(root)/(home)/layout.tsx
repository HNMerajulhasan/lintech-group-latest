import Header from "@/components/header/Header";


const layout = ({children}: {children: React.ReactNode } ) => {
    return (
    <>
    <Header />
    <main className="bg-black relative h-auto w-full mx-auto rounded-3xl z-0  pt-48 md:pt-60">
    {children}
    </main>
    </>
    )
  }
  
  export default layout;



 