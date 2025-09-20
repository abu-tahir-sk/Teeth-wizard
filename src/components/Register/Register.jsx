import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { handleRegister } = useContext(AuthContext);
  const [error, setError] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("")
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conpassword = e.target.conPassword.value;
    if(password !== conpassword){
      setError("Password didn't match")
      return;
    }
    console.log(name, photo, email, password, conpassword);
    handleRegister(email, password);
  };
  return (
    <div className="flex justify-center items-center py-8">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label">Name</label>
            <input
              type="type"
              className="input"
              name="name"
              placeholder="Name"
            />
            <label className="label">Photo URL</label>
            <input
              type="photo"
              name="photo"
              className="input"
              placeholder="Photo URL"
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <label className="label">Conform Password</label>
            <input
              type="password"
              name="conPassword"
              className="input"
              placeholder="Password"
            />

            <button className="btn btn-neutral mt-4">Register</button>
          </form>
          {
            error && <p className="text-red-500 font-bold">{error}</p>
          }
          <p>
            Already login{" "}
            <Link to="/login" className="btn">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
