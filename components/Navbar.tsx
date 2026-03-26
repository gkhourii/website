'use client'

import Link from 'next/link'

export function Navbar() {
  const categories = [
    { label: 'Resume', href: '/resume' },
    { label: 'Projects', href: '/about#projects' },
    { label: 'Music', href: '/about#music' },
    { label: 'Geography Logs', href: '/about#geography-logs' },
  ]

  return (
    <nav className="navbar">
      {categories.map((cat) => (
        <Link key={cat.label} href={cat.href} className="navLink">
          {cat.label}
        </Link>
      ))}
    </nav>
  )
}
