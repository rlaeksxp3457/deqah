import { useEffect, useState } from 'react';

export default function SignUp() {
  const [data, setData] = useState({
    sns_id: 'b23ab277958b1d2783b8b27e417db0c57b71340b0c17ffacecd861deecb66e5e',
    email: 'rlaeksxp3457@naver.com',
    nickname: 'rlaeksxp3457',
    profile: { initial: 'R', color: 'red', shade: 500 },
  });
  const [form, setForm] = useState({
    user_email: '',
    user_nickname: '',
    sns_id: '',
    profile: {},
  });
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      user_email: data.email,
      user_nickname: data.nickname,
      sns_id: data.sns_id,
      profile: data.profile,
    }));
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <div className="w-full px-10 text-center xl:text-left max-w-xl xl:max-w-lg mx-auto xl:me-auto xl:mx-0">
      <div className="flex justify-between align-center">
        <p className="text-2xl font-bold mb-10">Sign Up</p>
        <div
          className={`rounded-full bg-${data.profile.color}-${data.profile.shade} text-white w-14 h-14 grid place-items-center`}
        >
          <p className="text-xl">{data.profile.initial}</p>
        </div>
      </div>

      <form>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700 text-left">이메일</span>
          <input
            type="text"
            value={data.email}
            disabled
            className="mt-2 block w-full p-3 bg-white border border-slate-300 rounded-md text-md shadow-sm placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
          />
        </label>
        <label className="block mt-6">
          <span className="block text-sm font-medium text-slate-700 text-left">닉네임</span>
          <input
            onChange={onChange}
            type="text"
            name="user_nickname"
            value={form.user_nickname}
            maxLength={30}
            className="mt-2 block w-full p-3 bg-white border border-slate-300 rounded-md text-md shadow-sm placeholder-slate-400 
            invalid:border-pink-500 invalid:text-pink-600
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
        </label>
      </form>

      <div className="inline-flex items-center w-full pt-8">
        <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="link">
          <input
            type="checkbox"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
            id="link"
          />
          <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </label>
        <label className="ms-2 text-gray-700 cursor-pointer select-none" htmlFor="link">
          <p className="flex font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            이용 약관 동의
            <a
              href="#"
              className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-500 transition-colors hover:text-blue-700"
            >
              &nbsp;(약관 보기)
            </a>
          </p>
        </label>
      </div>
      <button
        type="submit"
        className="grid place-items-center rounded-md mt-16 mb-4 py-4 mx-auto xl:mx-0 bg-teal-600 text-white w-full max-w-lg font-medium hover:shadow-lg shadow-gray-100 transition-all duration-300"
      >
        가입하기
      </button>
    </div>
  );
}
// 색상 400~900(100단위)
