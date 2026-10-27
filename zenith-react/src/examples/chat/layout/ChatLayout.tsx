import { Outlet } from 'react-router';

export const ChatLayout = () => {
  return (
    <div className="h-screen w-full bg-slate-50 dark:bg-slate-950 flex flex-col">
      <Outlet />
    </div>
  );
};
