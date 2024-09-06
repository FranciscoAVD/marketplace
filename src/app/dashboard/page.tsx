import Link from "next/link";
type TItem = {
  itemName: string;
  category: string;
  price: number;
  description: string;
  seller: string;
};
export default async function DashboardPage() {
  const res = await fetch("http://localhost:4000/api/example-items");
  const { items }: { items: TItem[] } = await res.json();

  return (
    <main className="bg-neutral-100 p-4 space-y-8 overflow-y-scroll">
      <h1 className="text-xl font-bold">Today's picks</h1>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {/*@ts-ignore*/}
        {items.map((item, idx) => (
          <li key={idx}>
            <Link href="/dashboard">
              <div className="flex flex-col rounded-lg shadow-md overflow-hidden">
                <div className="h-[200px] bg-neutral-200" />
                <div className="p-2 space-y-4">
                  <div>
                    <span className="block text-lg font-semibold">
                      {item.itemName}
                    </span>
                    <div className="text-sm font-light flex justify-between">
                      <span>Seller: {item.seller}</span>
                      <span>San Juan, PR</span>
                    </div>
                  </div>

                  <p className="text-justify">{item.description}</p>
                  <span className="block font-semibold">${item.price}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
