
const Button = ({
  children,         // 버튼 안의 내용
  onClick,         // 클릭 이벤트 핸들러
  type = "button", // 버튼 타입 (기본값: button)
  variant = "primary", // 스타일 종류
  size = "medium", // 크기 종류
  disabled = false, // 비활성화 여부
}) => {
  const baseStyles = "rounded-lg font-medium transition-all duration-200";
  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-gray-500 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
