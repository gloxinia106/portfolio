import { useState } from "react";
import { useSwiper } from "swiper/react";
import Alert from "../alert";

export const HomeSection = () => {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const swiper = useSwiper();
  const onClickEmail = async () => {
    try {
      await navigator.clipboard.writeText("gloxinia106@gmail.com");
      setMessage("이메일을 복사했습니다.");
      setSuccess(true);
    } catch (err) {
      setMessage("이메일 복사에 실패했습니다.");
      setSuccess(false);
    }
  };
  return (
    <div className="h-full relative">
      <Alert message={message} success={success} setMessage={setMessage} />
      <img
        src="/home-section/bg.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute top-0 left-0 w-full h-full object-cover bg-black opacity-80 -z-10"></div>
      <div className="flex flex-col items-center text-white mx-10">
        <div className="mt-32 flex flex-col items-center">
          <h4 className="text-2xl md:text-4xl font-bold up-animation">
            만들고 싶어서 배우는 개발자
          </h4>
          <div className="mt-5 up-animation delay-2">
            <h2 className="text-4xl md:text-7xl font-bold inline">최주환</h2>
            <span className="text-xl md:text-4xl font-bold">입니다.</span>
          </div>
          <p className="mt-7 text-center leading-relaxed up-animation text-lg md:text-2xl md:leading-relaxed break-keep delay-3">
            프론트엔드 개발자를 희망합니다. <br />
            재밌어 보이는 아이디어를 구현하는 것을 좋아합니다.
            <br />
            그 과정에서 버그나 문제가 있으면 끝까지 물고 늘어져 해결하는 것이
            장점입니다. <br />
          </p>
        </div>
        <button
          onClick={onClickEmail}
          className="mt-10 space-x-3 flex items-center up-animation delay-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          <span className="relative top-[-3px]">gloxinia106@gmail.com</span>
        </button>
        <button
          onClick={() => {
            swiper.slideNext();
          }}
          className="flex flex-col items-center absolute bottom-[4%] text-white up-animation delay-3"
        >
          <div className="mb-3">더 알아보기</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-7 h-7 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
