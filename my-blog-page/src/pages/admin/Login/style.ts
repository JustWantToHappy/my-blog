import styled from "styled-components";
const LoginBox = styled("div")`
.wrapper {
  margin: 0 auto;
  width: 100%;
  max-width: 1140px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.container {
  position: relative;
  width: 100%;
  max-width: 600px;
  height: auto;
  display: flex;
  background: var(--main-bg);
  box-shadow: 0 0 5px #999999;
}

.credit {
  position: relative;
  margin: 25px auto 0 auto;
  width: 100%;
  text-align: center;
  color: #666666;
  font-size: 16px;
  font-weight: 400;
}

.credit a {
  color: #222222;
  font-size: 16px;
  font-weight: 600;
}

.col-left,
.col-right {
  padding: 30px;
  display: flex;
}

.col-left {
  width: 60%;
  -webkit-clip-path: polygon(0 0, 0% 100%, 100% 0);
  clip-path: polygon(0 0, 0% 100%, 100% 0);
  background: var(--admin-button-color);
}

.col-right {
  padding: 60px 30px;
  width: 50%;
  margin-left: -10%;
}

@media(max-width: 575.98px) {
  .container {
    flex-direction: column;
    box-shadow: none;
  }

  .col-left,
  .col-right {
    width: 100%;
    margin: 0;
    -webkit-clip-path: none;
    clip-path: none;
  }

  .col-right {
    padding: 30px;
  }
}

.login-text {
  position: relative;
  width: 100%;
  color: var(--main-bg);
}

.login-text h2 {
  margin: 0 0 15px 0;
  font-size: 30px;
  font-weight: 700;
}

.login-text p {
  margin: 0 0 20px 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
}

.login-text .btn {
  display: inline-block;
  padding: 7px 20px;
  font-size: 16px;
  letter-spacing: 1px;
  text-decoration: none;
  border-radius: 30px;
  color: var(--main-bg);
  outline: none;
  border: 1px solid var(--main-bg);
  box-shadow: inset 0 0 0 0 var(--main-bg);
  transition: .3s;
  -webkit-transition: .3s;
}

.login-text .btn:hover {
  color: var(--admin-button-color);
  box-shadow: inset 150px 0 0 0 var(--main-bg);
}

.login-form {
  position: relative;
  width: 100%;
}

.login-form h2 {
  margin: 0 0 15px 0;
  font-size: 22px;
  font-weight: 700;
}

.login-form p {
  margin: 0 0 10px 0;
  text-align: left;
  font-size: 15px;
}

.login-form p:last-child {
  margin: 0;
  padding-top: 3px;
}

.login-form p a {
  color: var(--admin-button-color);
  font-size: 14px;
  text-decoration: none;
}

.login-form label {
  display: block;
  width: 100%;
  margin-bottom: 2px;
  letter-spacing: .5px;
}

.login-form p:last-child label {
  width: 60%;
  float: left;
}

.login-form label span {
  color: #ff574e;
  padding-left: 2px;
}

.login-form input {
  display: block;
  width: 100%;
  height: 35px;
  padding: 0 10px;
  outline: none;
  border: 1px solid #cccccc;
  border-radius: 30px;
}

.login-form input:focus {
  border-color: #ff574e;
}

.login-form button,
.login-form input[type=submit] {
  display: inline-block;
  width: 100%;
  margin-top: 5px;
  color: var(--admin-button-color);
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  background: transparent;
  border: 1px solid var(--admin-button-color);
  border-radius: 30px;
  box-shadow: inset 0 0 0 0 var(--admin-button-color);
  transition: .3s;
  -webkit-transition: .3s;
}

.login-form button:hover,
.login-form input[type=submit]:hover {
  color: var(--main-bg);
  box-shadow: inset 250px 0 0 0 var(--admin-button-color);
}
`;
export default LoginBox;