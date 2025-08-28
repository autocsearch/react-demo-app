import SigninForm from "../components/SigninForm";
import Slider from "react-slick";

export default function Signin() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-6 bg-[#982B1C] lg:flex-row lg:gap-10 lg:p-10">
      <div className="flex-1 w-full h-[250px] sm:h-[500px] lg:h-[calc(90vh-3rem)] rounded-2xl flex items-center justify-center bg-[#F2E8C6] shadow-lg">
        <figure className="flex items-center justify-center w-full h-full p-4">
          <Slider {...settings} className="w-full max-w-[900px]">
            {["/Photo1.png", "/Photo2.png", "/Photo3.png"].map((src, idx) => (
              <div key={idx} className="flex justify-center">
                <img src={src} alt={`Slide ${idx + 1}`} className="rounded-2xl object-cover w-full h-full max-h-[550px] transition-transform duration-500 hover:scale-[1.02]" />
              </div>
            ))}
          </Slider>
        </figure>
      </div>

      <div className="w-full max-w-[450px] bg-[#F2E8C6] p-8 rounded-2xl shadow-xl">
        <SigninForm />
      </div>
    </main>
  );
}
