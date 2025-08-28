export default function Aboutus() {
  return (
    <div className="min-h-screen bg-[#F2E8C6] text-[#800000]">
      {/* Hero Section */}
      <section className="bg-[#800000] text-[#F2E8C6] py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About YouBloom</h1>
        <p className="max-w-2xl mx-auto text-lg">At YouBloom, we believe that growth starts with community. Our mission is to empower individuals and businesses to connect, learn, and thrive together.</p>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-[#982B1C] mb-4">Our Story</h2>
          <p className="text-[#800000] leading-relaxed">
            Founded with a passion for innovation, YouBloom brings together creativity and technology to help people achieve more. From humble beginnings, we have grown into a platform trusted by communities and organizations worldwide.
          </p>
        </div>
        <div className="bg-[#DAD4B5] p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-3 text-[#982B1C]">What We Value</h3>
          <ul className="list-disc pl-6 space-y-2 text-[#800000]">
            <li>Community-driven collaboration</li>
            <li>Innovation with purpose</li>
            <li>Integrity in everything we do</li>
            <li>Growth for people and businesses</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#982B1C] text-[#F2E8C6] py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us in Growing Together</h2>
        <p className="max-w-xl mx-auto mb-6">Be part of the YouBloom community and unlock opportunities to connect, learn, and thrive with others.</p>
      </section>
    </div>
  );
}
