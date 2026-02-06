import NavBar from "../../components/layout/NavBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <NavBar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
