import { Outlet } from 'react-router-dom';

export default function AuthBase() {
  return (
    <div className="container mx-auto grid gap-20 xl:grid-cols-2 h-screen place-items-center">
      <div className="hidden xl:block">
        <img src="/img/auth_left_ex.png" alt="" />
      </div>
      <Outlet></Outlet>
    </div>
  );
}
