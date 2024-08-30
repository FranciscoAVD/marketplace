import Link from "next/link";

export default function page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  return <div className="grid place-content-center">in {params.slug} page</div>;
}
