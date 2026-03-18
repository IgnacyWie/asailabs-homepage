"use client";

import { BrandsGrid } from "@/components/ui/brands";

const brands = [
  {
    name: "Summit Labs",
    logo: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Coastline",
    logo: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Northwind",
    logo: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Aurora",
    logo: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Waypoint",
    logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Harbor",
    logo: "https://images.unsplash.com/photo-1520607162513-22c83e02e7f5?auto=format&fit=crop&w=400&q=80",
  },
];

export function BrandsGridDemo() {
  return (
    <BrandsGrid
      brands={brands}
      className="min-w-[800px]"
      title="Engineering and operational pedigree from:"
    />
  );
}
