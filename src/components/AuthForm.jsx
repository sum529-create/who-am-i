import { useState } from "react";

// 회원가입인지 로그인인지 구분하기 위해 mode 를 props 로 받습니다.
// onSubmit 도 회원가입과 로그인 페이지에서 각각 구현을 하고 props 로 넘겨줄 겁니다.
const AuthForm = ({ mode, onSubmit }) => {
  
  // 무엇을 formData 에 넣어야 할까요?
  const [formData, setFormData] = useState({
		id: '',
    password: '',
    nickname: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target
    setFormData((pre) => ({
      ...pre,
      [name]: value
    }))
  };

  const handlePwChange = (e) => {
    e.preventDefault();
    setFormData(pre => ({
      ...pre,
      password: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const {id, password} = formData;
    const payload = mode === "signup" ? formData : {id, password}
    onSubmit(payload)
  };

  // id 입력을 위한 input 만 힌트로 만들어 두었습니다. 참고해서 한번 만들어봅시다! 
return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
    <input
      type="text"
      name="id"
      value={formData.id}
      onChange={handleChange}
      placeholder="아이디"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-xl 
                focus:ring-2 focus:ring-[var(--text-primary)] focus:border-transparent 
                outline-none transition-all"
    />
    <input
      type="password"
      name="password"
      value={formData.password}
      onChange={handlePwChange}
      placeholder="비밀번호"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-xl 
                focus:ring-2 focus:ring-[var(--text-primary)] focus:border-transparent 
                outline-none transition-all"
    />
    {mode === "signup" && (
      <input
        type="text"
        name="nickname"
        value={formData.nickname}
        onChange={handleChange}
        placeholder="닉네임"
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-xl 
                  focus:ring-2 focus:ring-[var(--text-primary)] focus:border-transparent 
                  outline-none transition-all"
      />
    )}
    <button
      type="submit"
      className="w-full py-4 bg-[var(--button-primary)] text-white rounded-xl 
               font-medium hover:bg-[var(--button-hover)] 
               transition-all duration-[var(--transition-normal)]
               mt-8"
    >
      {mode === "login" ? "로그인" : "회원가입"}
    </button>
  </form>

  );
};

export default AuthForm;
