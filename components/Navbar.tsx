'use client'

import Link from 'next/link'

export function Navbar() {
  const categories = [
    { label: 'Home', href: '/' },
    { label: 'Resume', href: '/resume' },
    { label: 'Projects', href: '/projects' },
    { label: 'Music', href: '/music' },
    { label: 'Geography Logs', href: '/glogs' },
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
