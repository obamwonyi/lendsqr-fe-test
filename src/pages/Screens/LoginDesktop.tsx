import LoginImage from "../../assets/login/login_image.svg?react";
import LogoImage from "../../assets/login/lendsqr_logo.svg?react";
import "../../styles/login-desktop.scss";
import { useState } from "react";

export default function LoginDesktop() {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-desktop">
      {/* Left */}
      <div className="login-desktop__left">
        <div className="login-desktop__logo">
          <LogoImage />
        </div>

        <div className="login-desktop__image">
          <LoginImage />
        </div>
      </div>

      {/* Right */}
      <div className="login-desktop__right">
        <div className="login-form">
          <h1 className="login-form__title">Welcome!</h1>
          <p className="login-form__subtitle">
            Enter details to login.
          </p>

          <form className="login-form__fields">
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

            <p className="login-form__forgot">
              FORGOT PASSWORD?
            </p>

            <button type="submit">
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
