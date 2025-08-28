export default function Dashboard() {
  return (
    <div className="bg-[#dad4b5] min-h-screen">
      <section className="flex flex-col md:flex-row justify-between items-center px-6 py-12 gap-8">
        <div className="flex-1 space-y-6">
          <img src="/images1.png" alt="dashboard images" className="h-40" />
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">“The global stage for local connections.”</h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              Founded with a vision to bring people closer to live music, youbloom has grown from a grassroots song contest into an international platform spanning Dublin, Los Angeles, and beyond. Today, through youbloomConnect, artists,
              fans, and show creators collaborate to bring music into neighborhoods and venues worldwide. With a community of 200+ shareholders and thousands of connected artists, youbloom continues to be fueled by creativity, passion, and
              the belief that music is best when shared.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img src="Photo2.png" alt="dashboard images" className="rounded-2xl shadow-lg" />
        </div>
      </section>

      <div className="border-t border-gray-300 mx-6" />

      <section className="flex flex-col md:flex-row-reverse justify-between items-center px-6 py-12 gap-8">
        <div className="flex-1 space-y-6">
          <img src="/images2.png" alt="dashboard images" className="h-30 mx-auto md:mx-0" />
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">“Because live music should belong to everyone.”</h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              youbloom exists to make live events more accessible, equitable, and sustainable. Unlike traditional models that favor a few stars, youbloom empowers fans, artists, and show creators to shape the live music experience. By
              connecting communities directly, youbloom creates more opportunities for artists, fairer shows for creators, and unforgettable experiences for fans—all while growing a healthier live music ecosystem.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img src="images3.png" alt="dashboard images" className="rounded-2xl shadow-lg" />
        </div>
        <div></div>
      </section>
    </div>
  );
}
