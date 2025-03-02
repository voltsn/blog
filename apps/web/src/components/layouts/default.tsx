import Footer from "../footer";

interface DefaultLayoutProps {
  header?: React.ReactNode;
  children: React.ReactNode;
}

const DefaultLayout = ({header, children}: DefaultLayoutProps) => {
  return (
    <div className="h-screen flex flex-col">
      {header}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default DefaultLayout;
