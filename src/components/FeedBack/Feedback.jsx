const Feedback = ({ feedBack }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4">
      {feedBack.map((fed) => (
        <div className="card bg-base-100 shadow-xl" key={fed.reviewId}>
          <div className="card-body">
            <div className="flex  justify-start gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={fed.userImage}
                alt=""
              />
              <div className="">
                <h2 className="card-title pb-1">{fed.name}</h2>
                <p className="text-gray-500">{new Date().toLocaleDateString()}</p>
              </div>
            </div>

            <p>{fed.review}</p>
            <div className="card-actions justify-end items-center gap-3">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
