"use client";

import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-zinc-600 mb-6">
      <Link href="/" className="flex items-center hover:text-primaryBlue transition-colors">
        <Home className="h-4 w-4" />
        <span className="ml-1">Home</span>
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="h-4 w-4 text-zinc-400" />
          {item.href ? (
            <Link href={item.href} className="hover:text-primaryBlue transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-zinc-900 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}