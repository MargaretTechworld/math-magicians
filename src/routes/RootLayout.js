import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
      <header>
        <h1 className="logo">Math Magicians</h1>
        <nav>
          <NavLink style={{ borderRight: '1px solid black', padding: '0 10px' }} to="/">Home</NavLink>
          <NavLink style={{ borderRight: '1px solid black', padding: '0 10px' }} to="calculator"> Calculator</NavLink>
          <NavLink to="quote"> Quotes</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
