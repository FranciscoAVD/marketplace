import Link from "next/link";

export default function page() {
  return (
    <main className="bg-neutral-100 p-4 space-y-8 overflow-y-scroll">
      <h1 className="text-xl font-bold">Today's picks</h1>
      <ul className="flex justify-center flex-wrap gap-4">
        {Array.from({ length: 49 }, (_, idx) => (
          <li key={idx}>
            <Link href="/dashboard">
              <div className="w-[200px] h-[250px] bg-neutral-200 rounded-lg"></div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
