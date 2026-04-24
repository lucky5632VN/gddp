import { ethnicities } from "@/data/ethnicities";
import { EthnicityDetailClient } from "@/components/custom/ethnicity-detail-client";
import { notFound } from "next/navigation";


interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function EthnicityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const ethnicity = ethnicities.find((e) => e.slug === slug);

  if (!ethnicity) {
    notFound();
  }

  return <EthnicityDetailClient ethnicity={ethnicity} />;
}

// Generate static params for all ethnicities to enable static export/optimization
export async function generateStaticParams() {
  return ethnicities.map((ethnicity) => ({
    slug: ethnicity.slug,
  }));
}
