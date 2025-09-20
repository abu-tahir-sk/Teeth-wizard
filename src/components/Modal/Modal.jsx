const Modal = () => {
      const handleSubmit =(e)=>{
            
      }
  return (
    <>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control text-start">
                <label className="label text-gray-600">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control text-start">
                <label className="label text-gray-600">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control text-start">
                <label className="label text-gray-600">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control text-start">
                <label className="label text-gray-600">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control text-start">
                <label className="label text-gray-600">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control text-start">
                <label className="label">
                  <span className="label-text text-gray-600">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-gray-600"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-950 text-white">Login</button>
              </div>
            </form>
            <div className="modal-action w-full flex flex-col btn">
            <form method="">
              <button className="">Close</button>
            </form>
          </div>
          </div>

          
        
      </dialog>
    </>
  );
};

export default Modal;
