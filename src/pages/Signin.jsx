import SigninForm from "../components/SigninForm";
import Slider from "react-slick";

export default function Signin() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // remove arrows
    pauseOnHover: true,
  };

  return (
    <main className="flex min-h-screen items-center gap-10 p-8 bg-[#982B1C]">
      {/* LEFT IMAGE CAROUSEL */}
      <div className="flex-1 h-[calc(90vh-3rem)] rounded-2xl flex items-center justify-center bg-[#F2E8C6] shadow-lg">
        <figure className="hidden lg:flex items-center justify-center w-full h-full p-8">
          <Slider {...settings} className="w-[900px]">
            {["/Photo1.png", "/Photo2.png", "/Photo3.png"].map((src, idx) => (
              <div key={idx} className="flex justify-center">
                <img src={src} alt={`Slide ${idx + 1}`} className="rounded-2xl object-cover w-[900px] h-[550px] shadow-md transition-transform duration-500 hover:scale-[1.02]" />
              </div>
            ))}
          </Slider>
        </figure>
      </div>

      {/* RIGHT LOGIN FORM */}
      <div className="w-[450px] h-[calc(90vh-3rem)] bg-[#F2E8C6] p-8 rounded-2xl shadow-xl">
        <SigninForm />
      </div>
    </main>
  );
}
