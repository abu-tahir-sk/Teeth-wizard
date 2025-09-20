import banner from "../../assets/banner.png"
const Benner = () => {
  return (
    <div className="hero py-8">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={banner}
          className="max-w-sm rounded-lg "
        />
        <div>
          <h1 className="text-5xl font-bold">🔮 Magical Dental Solutions for a Healthier Smile</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-blue-950 text-white">BOOk NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Benner;
