import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MiniNavbar() {
  return (
    <div className='w-full bg-white px-4 py-2 flex justify-center'>
      <ul className='flex gap-6 text-center text-[.8rem] md:text-[.9rem] font-[500]'>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? 'bg-[var(--primary-color)] text-white px-3 py-1 rounded-lg'
                : 'text-[var(--primary-color)] px-3 py-1'
            }
          >
            Latest release
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/introducing-creators-platforms"
            className={({ isActive }) =>
              isActive
                ? 'bg-[var(--primary-color)] text-white px-3 py-1 rounded-lg'
                : 'text-[var(--primary-color)] px-3 py-1'
            }
          >
            Introducing Creators Platforms
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/learn-more"
            className={({ isActive }) =>
              isActive
                ? 'bg-[var(--primary-color)] text-white px-3 py-1 rounded-lg'
                : 'text-[var(--primary-color)] px-3 py-1'
            }
          >
            Learn More
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
