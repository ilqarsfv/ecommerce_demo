"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="space-y-4">
      <Image
        src={images[currentIndex]}
        width={1000}
        height={1000}
        alt="product photo"
        className="min-h-[300px] object-cover"
      />
      <div className="flex">
        {images.map((img, index) => (
          <div
            key={img}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "border mr-2 cursor-pointer hover:border-orange-600",
              currentIndex === index && "border-orange-500",
            )}
          >
            <Image src={img} alt={"product photo"} width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
