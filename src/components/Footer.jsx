export const Footer = () => {
  return (
    <div className="w-full bg-darkGray p-6">
      <footer className="flex flex-col sm:flex-row justify-between gap-10 text-white">
        <div className="flex flex-col gap-5">
          <h1 className="bg-orange w-[200px] text-center py-2 rounded-lg">
            About Us
          </h1>
          <hr></hr>
          <h1>
            Our Shop is a community bringing a fresh and modern look to the
            modest fashion scene.
          </h1>
          <h1 className="bg-orange w-[200px] text-center py-2 rounded-lg">
            Contact Us
          </h1>
          <hr></hr>
          <p>Address : 28 km by Cairo /Alexanrdria Desert Road/6october</p>
          <p>Phone:1234567890</p>
          <p>Email: iti@gov.eg.org</p>
        </div>
        <div className="flex flex-col gap-2 justify-center align-middle">
          First Name:{" "}
          <input
            type="text"
            className="w-[300px] p-2 text-darkGray outline-none"
          />
          Last Name:{" "}
          <input
            type="text"
            className="w-[300px] p-2 text-darkGray outline-none"
          />
          Email:{" "}
          <input
            type="email"
            className="w-[300px] p-2 text-darkGray outline-none"
          />
          <button className="text-white bg-orange px-4 py-2 rounded-lg w-[100px] hover:opacity-75">
            Submit
          </button>
        </div>

        <div className="flex flex-col gap-4 justifiy-center">
          <h1 className="bg-orange w-[200px] text-center py-2 rounded-lg mb-4">
            Follow Us
          </h1>
          <hr></hr>
          <div className="flex justify-center items-center gap-4">
            <button className="bg-orange px-4 py-2 rounded-lg hover:opacity-75">
              Facebook
            </button>
            <button className="bg-orange px-4 py-2 rounded-lg hover:opacity-75">
              Twitter
            </button>
            <button className="bg-orange px-4 py-2 rounded-lg hover:opacity-75">
              Youtube
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
