import { useState } from "react";
import LoginImage from "../../assets/login/login_image.svg?react";
import LogoImage from "../../assets/login/lendsqr_logo.svg?react";
import "../../styles/login-mobile.scss";
import { useLogin } from "../../hooks/useLogin";

export default function LoginMobile() {
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin, isLoading } = useLogin();

  return (
    <div className="login-mobile">
      <div className="login-mobile__header">
        <LogoImage />
      </div>

      <div className="login-mobile__image">
        <LoginImage />
      </div>

      <div className="login-mobile__form">
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>

        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <span
              className="password-field__toggle"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "HIDE" : "SHOW"}
            </span>
          </div>

          <span className="forgot">FORGOT PASSWORD?</span>

          <button type="submit" disabled={isLoading}>
              {isLoading ? "LOGGING IN..." : "LOG IN"}
          </button>
        </form>
      </div>
    </div>
  );
}
