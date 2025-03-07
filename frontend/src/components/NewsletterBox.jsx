const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-red-950 ">
        Subscribe now & get 20% off
      </p>
      <p className="text-red-950 mt-3">
      **"Subscribe now and enjoy an exclusive 20% off on your first purchase! Stay updated with the latest trends, special deals, and new arrivals. Sign up today and elevate your shopping experience!"**
      </p>
      <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
        />
        <button
          onSubmit={onSubmitHandler}
          className="bg-white text-black text-xs px-10 py-4"
          type="submit"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
