import Link from "next/link";
import Image from "next/image";

export default function ThreeColumnSection() {
  return (
    <section className="py-16 bg-[#F5FAFC]">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 text-center space-y-5">
          <div className="group flex flex-col items-center">
            <div className="flex gap-2">
              <Image
                src="/demonmt-logo.svg"
                alt="Partner 1"
                width={100}
                height={70}
                className="object-contain"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="68"
                height="68"
                viewBox="0 0 68 68"
                fill="none"
                className="overflow-visible"
              >
                <circle
                  cx="34"
                  cy="34"
                  r="33"
                  stroke="#ECA22D"
                  strokeWidth="2"
                  className="group-hover:scale-110 transition duration-500 origin-center"
                />
                <path
                  className="group-hover:-rotate-12 transition duration-500 origin-center"
                  d="M26.9609 15.2023C28.0362 14.8888 29.19 14.9409 30.2303 15.3498C31.2707 15.7587 32.1348 16.4998 32.6788 17.4496L32.8606 17.8036L34.4873 21.2981C34.9809 22.3588 35.1412 23.5363 34.9481 24.6844C34.755 25.8324 34.2171 26.9002 33.4012 27.755L33.0744 28.0686L30.5116 30.38C30.0496 30.8029 30.3961 32.4397 32.067 35.2382C33.5707 37.7563 34.7944 38.9323 35.3964 38.9964H35.5021L35.6323 38.9726L40.6695 37.4831C41.3465 37.2824 42.069 37.2745 42.7505 37.4602C43.432 37.646 44.0438 38.0177 44.5126 38.5308L44.7362 38.804L48.0706 43.2701C48.724 44.1455 49.0497 45.21 48.9939 46.2882C48.938 47.3664 48.5041 48.3941 47.7634 49.202L47.4636 49.5014L46.1318 50.7224C44.9359 51.8174 43.4399 52.5573 41.8217 52.8542C40.2035 53.1511 38.5311 52.9925 37.0034 52.3972C32.2488 50.5442 27.9291 46.3109 24.005 39.74C20.0735 33.1524 18.4394 27.4105 19.1692 22.493C19.3901 21.0065 20.0232 19.6056 21.0014 18.439C21.9796 17.2725 23.2663 16.3838 24.7249 15.8674L25.1991 15.7154L26.9609 15.2023Z"
                  fill="#ECA22D"
                />
              </svg>
            </div>

            <div className="space-y-3.5 mt-5">
              <h3 className="text-xl font-medium">
                Got question? Let&apos;s talk!
              </h3>
              <p className="font-light">+971 4 580 4285</p>
              <Link
                href={"tel:+971 4 580 4285"}
                className="group-hover:!text-accent font-medium transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="group flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="95"
              height="72"
              viewBox="0 0 95 72"
              fill="none"
              className="overflow-visible"
            >
              <path
                d="M2 2H80.2646M2 33.4341H23.5228M2 64.8683H23.5228"
                stroke="#0C2D46"
                strokeWidth="4"
                strokeLinecap="round"
                className="group-hover:-translate-x-1 transition duration-500 origin-center"
              />
              <path
                d="M61.2736 57.4657C66.8689 57.4657 72.2349 55.243 76.1914 51.2866C80.1478 47.3302 82.3705 41.9641 82.3705 36.3688C82.3705 30.7736 80.1478 25.4075 76.1914 21.4511C72.2349 17.4947 66.8689 15.272 61.2736 15.272C55.6784 15.272 50.3123 17.4947 46.3559 21.4511C42.3995 25.4075 40.1768 30.7736 40.1768 36.3688C40.1768 41.9641 42.3995 47.3302 46.3559 51.2866C50.3123 55.243 55.6784 57.4657 61.2736 57.4657Z"
                stroke="#ECA22D"
                strokeWidth="4"
                className="group-hover:translate-y-1 transition duration-500 origin-center"
              />
              <path
                d="M74.9243 52.502L92.2982 69.9999"
                stroke="#ECA22D"
                strokeWidth="4"
                strokeLinecap="round"
                className="group-hover:translate-y-1 transition duration-500 origin-center"
              />
            </svg>
            <div className="space-y-3.5 mt-5">
              <h3 className="text-xl font-medium">Want to know more?</h3>
              <p className="font-light">Let&apos;s find out!</p>
              <Link
                href={"tel:+971 4 580 4285"}
                className="group-hover:!text-accent font-medium transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="group flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="73"
              height="72"
              viewBox="0 0 73 72"
              fill="none"
              className="overflow-visible"
            >
              <path
                d="M17.0336 64.8376L16.2695 62.5562L17.3304 62.2104L18.2891 62.782L17.0336 64.8376ZM7.30025 55.232L9.34911 53.9352L9.97691 54.9054L9.60705 55.9908L7.30025 55.232ZM2.43361 69.5923L3.19767 71.8784C2.76859 72.0186 2.30845 72.038 1.86882 71.9345C1.42919 71.831 1.02745 71.6087 0.708626 71.2926C0.389801 70.9765 0.166504 70.579 0.063736 70.1446C-0.0390244 69.7103 -0.0171814 69.2563 0.126816 68.8335L2.43361 69.5923ZM18.2891 62.782C22.9417 65.5436 30.3828 67.1957 36.5001 67.1957V71.9985C29.7598 71.9985 21.3843 70.2215 15.778 66.8932L18.2891 62.782ZM36.5001 67.1909C53.9714 67.1909 68.1334 53.2244 68.1334 35.9921H73C72.9987 40.7211 72.0536 45.4036 70.2186 49.7722C68.3836 54.1408 65.6947 58.11 62.3054 61.4531C58.9161 64.7961 54.8927 67.4476 50.465 69.2562C46.0374 71.0648 41.2921 71.995 36.5001 71.9937V67.1909ZM68.1334 35.9921C68.1295 27.7159 64.7947 19.7849 58.8624 13.935C52.9302 8.08516 44.8864 4.80024 36.5001 4.80278V1.28371e-06C46.1771 -0.00254681 55.4588 3.78838 62.3037 10.539C69.1486 17.2895 72.9961 26.4421 73 35.9921H68.1334ZM36.5001 4.80278C19.0289 4.80278 4.86693 18.7693 4.86693 35.9969H0.000282288C0.00415802 26.4469 3.85168 17.2895 10.6966 10.539C17.5415 3.78838 26.8232 -0.00254681 36.5001 1.28371e-06V4.80278ZM4.86693 35.9969C4.86693 42.3894 6.30746 49.2429 9.34911 53.9352L5.2514 56.5288C1.52841 50.7894 0.000282288 42.9225 0.000282288 35.9969H4.86693ZM17.7976 67.1189L3.19767 71.8784L1.66955 67.3158L16.2695 62.5611L17.7976 67.1189ZM0.126816 68.8335L4.99346 54.4732L9.60705 55.9908L4.7404 70.356L0.126816 68.8335Z"
                fill="black"
                className="group-hover:rotate-12 transition duration-500 origin-center"
              />
              <path
                d="M24 30H49"
                stroke="#ECA22D"
                strokeWidth="4"
                strokeLinecap="round"
                className="group-hover:translate-x-1 transition duration-500 origin-center"
              />
              <path
                d="M24 42H40"
                stroke="#ECA22D"
                strokeWidth="4"
                strokeLinecap="round"
                className="group-hover:-translate-x-1 transition duration-500 origin-center"
              />
            </svg>
            <div className="space-y-3.5 mt-5">
              <h3 className="text-xl font-medium">We are here to guide you</h3>
              <p className="font-light">+971 58 625 0566</p>
              <Link
                href={"tel:+971 4 580 4285"}
                className="group-hover:!text-accent font-medium transition duration-300 max-w-[200px] inline-block"
              >
               Chat with an Admission Counselor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
