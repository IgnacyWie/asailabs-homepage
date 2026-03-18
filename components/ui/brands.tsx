"use client";

import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface Brand {
  name: string;
  logo: string;
}

export interface BrandsGridProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  brands: Brand[];
  imageHeight?: number;
}

export const BrandsGrid = React.forwardRef<HTMLDivElement, BrandsGridProps>(
  (
    {
      className,
      title = "Engineering and operational pedigree from:",
      brands,
      imageHeight = 38,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn("py-24", className)} {...props}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-2">
          {title && (
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground text-center">
              {title}
            </p>
          )}

          <div className="max-w-xs mx-auto grid grid-cols-2 items-center md:grid-cols-3 md:max-w-lg lg:grid-cols-6 lg:max-w-3xl">
            {brands.map((brand) => (
              <div key={brand.name} className="flex items-center justify-center p-4">
                <div className="relative h-8 w-full " style={{ height: imageHeight }}>
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain grayscale"
                    priority={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

BrandsGrid.displayName = "BrandsGrid";
