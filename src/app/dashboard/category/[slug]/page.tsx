import Link from "next/link";

export default function page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  return (
    <div className="bg-blue-500 h-screen grid place-items-center">
        in {params.slug} page
      <Link href="/dashboard" className="block font-black">Back to dashboard</Link>
      
    </div>
  );
}
