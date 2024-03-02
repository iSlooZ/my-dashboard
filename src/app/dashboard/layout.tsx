import { Sidebar } from "../components";


export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return(
    <div className="flex justify-end bg-slate-100 overflow-y-scroll w-full antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex w-full">
        <Sidebar />
        
      </div>
      { children }
    </div>
  );
}