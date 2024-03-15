import { Outlet } from 'react-router-dom';

export default function Root(): JSX.Element {
  return (
    <>
      <div className="wrapper">
        <Outlet />
      </div>
    </>
  );
}
