"use client";

import { motion } from "framer-motion";
import { Ethnicity } from "@/data/types";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

interface EthnicityCardProps {
  ethnicity: Ethnicity;
  index: number;
}

export function EthnicityCard({ ethnicity, index }: EthnicityCardProps) {
  return (
    <motion.div
      id={`ethnicity-card-${ethnicity.slug}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group cursor-pointer"
    >
      <Link href={`/dan-toc/${ethnicity.slug}`} className="block h-full w-full min-h-[44px] min-w-[44px]">
        <Card className="overflow-hidden border-slate-200 bg-white group-hover:border-heritage-turquoise/50 transition-all h-full shadow-md hover:shadow-xl">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <Image
              src={ethnicity.imageUrl || "/images/nghean_nature.png"}
              alt={ethnicity.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl md:text-3xl font-heading text-white font-bold mb-1">
                {ethnicity.name}
              </h3>
              <div className="flex items-center text-heritage-turquoise text-sm">
                <MapPin className="w-3 h-3 mr-1" />
                {ethnicity.location.join(", ")}
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
