import Link from "next/link";

const posts = [
  {
    id: 1,
    title:
      "Ghid Complet pentru Crearea unui Magazin Online de Succes cu Shopify",
    href: "#",
    description:
      "Cu Shopify, poți profita de numeroasele avantaje pe care această platformă le oferă. De la simpla configurare la personalizarea temelor și securitatea sporită .",
    date: "Mar 16, 2022",
    datetime: "2020-03-16",
    href: "/magazin-online-shopify",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Dorina R",
      role: "Co-Founder / CTO",
      href: "#",
    },
  },
  {
    id: 2,
    title: "Website-urile Custom sunt Opțiunea Ideală ?",

    description:
      "Controlul total asupra fiecărui aspect al website-ului, de la funcționalități la design , de la SEO la integrari. Nu există limite rigide sau șabloane standard .",
    date: "Apr 26, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    href: "/website-custom",
    author: {
      name: "Dorina R",
      role: "Co-Founder / CTO",

      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },

  {
    id: 3,
    title: "De Ce Este Important să Fii Prezent Online?",
    href: "#",
    description:
      "Dacă nu ești prezent online, nu esti relevant în ochii publicului și a potențialilor clienți. O prezență digitală solidă și bine gestionată aduce credibilitate și acces la o audiență  extinsă.",
    date: "Oct 16, 2023",
    datetime: "2020-03-16",
    href: "/marketing-digital",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Dorina R",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

export default function Example() {
  return (
    <div className="py-24 sm:py-32 bg-[#eef0f5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Blogul nostru
          </h2>
          <p className="mt-2 text-lg leading-8 ">
          Descoperă secretele pentru extinderea afacerii tale cu îndrumările specializate ale experților noștri.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <Link href={post.href} passHref>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="">
                    {post.date}
                  </time>
                  <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {post.category.title}
                  </p>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600">
                    {post.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4 text-white">
                  {/* <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  /> */}
                  <div className="text-sm leading-6 text-white">
                    <p className="font-semibold text-white">
                      {post.author.name}
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
