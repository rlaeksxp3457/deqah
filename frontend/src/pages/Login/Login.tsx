export default function Login() {
  const login_btn = [
    {
      name: '네이버',
      platform_type: 'naver',
      src: '/img/sns_logo/naver.png',
    },
    {
      name: '카카오',
      platform_type: 'kakao',
      src: '/img/sns_logo/kakao.png',
    },
    {
      name: '구글',
      platform_type: 'google',
      src: '/img/sns_logo/google.png',
    },
    {
      name: '깃허브',
      platform_type: 'github',
      src: '/img/sns_logo/github.png',
    },
  ];
  return (
    <div className="w-full px-10 text-center xl:text-left max-w-xl xl:max-w-lg mx-auto xl:me-auto xl:mx-0">
      <p className="text-2xl font-bold mb-10">Login</p>
      {login_btn.map((button) => {
        return (
          <button
            className="rounded-md bg-white border-2 border-gray-200 w-full mb-4 py-3 font-semibold hover:shadow-lg shadow-gray-100 transition-all duration-300 grid place-items-center"
            onClick={() => (window.location.href = `/api/auth/member/${button.platform_type}`)}
          >
            <div className="flex items-center justify-center w-full">
              <div className="img_box w-4/12 xl:w-3/12 text-right">
                <img src={button.src} alt={button.name} className="w-8 h-8 flex-shrink-0 ml-auto" />
              </div>
              <span className="text-left w-6/12 ml-3">{button.name}로 로그인하기</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
