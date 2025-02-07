import Link from "next/link";
import { useRouter } from "next/router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const caseStudies = [
  {
    id: "1",
    title: "E-Commerce CRO Case Study",
    description: "Optimized checkout flow to increase conversion rates by 30%.",
    beforeImg: "/before-checkout.png", alt="Before Optimization" width={500} height={300} />
    afterImg: "/after-checkout.png",   alt="After Optimization" width={500} height={300} />
    conversionBefore: "1.5%",
    conversionAfter: "3.2%",
    abTest: {
      variationA: "Get Started CTA - 1.5%",
      variationB: "Start Your Free Trial CTA - 3.2%",
    },
    funnelBefore: "Users → Add to Cart → Checkout → Purchase (Drop-off 50%)",
    funnelAfter: "Users → Add to Cart → Checkout → Purchase (Drop-off 30%)",
    content: "<p>This case study details the changes made to the checkout flow, resulting in a significant improvement in conversion rates.</p>"
  },
];

export default function CaseStudyPage({ caseStudy }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{caseStudy.title}</h1>
      <p className="text-gray-600">{caseStudy.description}</p>

      <h2 className="text-2xl font-semibold mt-4">Before & After</h2>
      <div className="grid grid-cols-2 gap-4">
        <Image src={caseStudy.beforeImg} alt="Before Optimization" width={500} height={300} className="rounded-lg shadow" />
        <Image src={caseStudy.afterImg} alt="After Optimization" width={500} height={300} className="rounded-lg shadow" />
      </div>

      <h2 className="text-2xl font-semibold mt-4">A/B Test Results</h2>
      <p>Variation A: {caseStudy.abTest.variationA}</p>
      <p>Variation B: {caseStudy.abTest.variationB}</p>

      <h2 className="text-2xl font-semibold mt-4">Funnel Optimization</h2>
      <p><strong>Before:</strong> {caseStudy.funnelBefore}</p>
      <p><strong>After:</strong> {caseStudy.funnelAfter}</p>

      <div className="mt-6 p-4 border rounded shadow-lg bg-white">
        <h2 className="text-2xl font-semibold">Full Case Study</h2>
        <div dangerouslySetInnerHTML={{ __html: caseStudy.content }}></div>
      </div>

      <div className="mt-6">
        <Link href="/">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
            ← Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: caseStudies.map((caseStudy) => ({ params: { id: caseStudy.id.toString() } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const caseStudy = caseStudies.find((study) => study.id.toString() === params.id);
  return { props: { caseStudy } };
}
