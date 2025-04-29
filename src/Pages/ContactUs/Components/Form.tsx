// import waveImage from "../../../Assets/images/wave.png";
// import arrowImage from "../../../Assets/images/triangle.png";

// const ContactForm = () => {
//   return (
//     <div className="grid md:grid-cols-1 lg:grid-cols-2 items-center justify-center min-h-screen sm:grid-cols-1 bg-white p-4">
//       {/* Card with blue shadow */}
//       <div
//         className=" bg-white rounded-lg p-6 sm:p-8 w-full  max-w-[1050px]"
//         style={{
//           boxShadow: `-15px 20px 25px #0045B24D`, // Shadow color passed dynamically
//         }}
//       >
//         {/* Form Content */}
//         <div className="rounded-lg z-10">
//           <h2 className="text-xl font-bold mb-2">Contact us</h2>
//           <p className="text-sm text-gray-500 mb-6">
//             “If you need help or have any questions, we are here to serve you!”
//           </p>

//           <form className="space-y-4">
//             {/* Name Input */}
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm mt-1 font-medium text-gray-700"
//               >
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="Enter your name"
//                 className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Email Input */}
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium mt-1 text-gray-700"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Enter your email"
//                 className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Message Field */}
//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium mt-1 text-gray-700"
//               >
//                 Your message
//               </label>
//               <textarea
//                 id="message"
//                 rows={3}
//                 placeholder="Type your message"
//                 className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               ></textarea>
//             </div>

//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 className="w-full mt-2 rounded-md bg-purple-600 px-4 py-2 text-white shadow-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
//               >
//                 Send
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       <div className="grid-cols-1">
//         {/* First Wave Image */}
//         <img
//           src={waveImage} // Replace with your wave image
//           alt="first-wave"
//           className=" top-3/4  ml-56 w-32 sm:max-w-none pointer-events-none hidden sm:block"
//         />

//         {/* Second Wave Image */}
//         <img
//           src={waveImage} // Replace with second wave image
//           alt="second-wave"
//           className=" top-3/4 mt-5 ml-24 left-0 w-32 sm:max-w-none pointer-events-none hidden sm:block"
//         />

//         {/* Arrow Image */}
//         <img
//           src={arrowImage} // Replace with arrow image
//           alt="arrow"
//           className=" mt-28 right-0 w-56 sm:max-w-none pointer-events-none hidden sm:block"
//         />
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

import waveImage from "../../../Assets/images/wave.png";
import arrowImage from "../../../Assets/images/triangle.png";

const ContactForm = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    //const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const mailtoLink = `mailto:smarTmiediea@gmail.com?subject=${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(`${message}\n`)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 items-center justify-center min-h-screen sm:grid-cols-1 bg-white p-4">
      {/* Card with blue shadow */}
      <div
        className=" bg-white rounded-lg p-6 sm:p-8 w-full  max-w-[1050px]"
        style={{
          boxShadow: `-15px 20px 25px #0045B24D`, // Shadow color passed dynamically
        }}
      >
        {/* Form Content */}
        <div className="rounded-lg z-10">
          <h2 className="text-xl font-bold mb-2">Contact us</h2>
          <p className="text-sm text-gray-500 mb-6">
            “If you need help or have any questions, we are here to serve you!”
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm mt-1 font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mt-1 text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mt-1 text-gray-700"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Type your message"
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full mt-2 rounded-md bg-purple-600 px-4 py-2 text-white shadow-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="grid-cols-1">
        {/* First Wave Image */}
        <img
          src={waveImage} // Replace with your wave image
          alt="first-wave"
          className=" top-3/4  ml-56 w-32 sm:max-w-none pointer-events-none hidden sm:block"
        />

        {/* Second Wave Image */}
        <img
          src={waveImage} // Replace with second wave image
          alt="second-wave"
          className=" top-3/4 mt-5 ml-24 left-0 w-32 sm:max-w-none pointer-events-none hidden sm:block"
        />

        {/* Arrow Image */}
        <img
          src={arrowImage} // Replace with arrow image
          alt="arrow"
          className=" mt-28 right-0 w-56 sm:max-w-none pointer-events-none hidden sm:block"
        />
      </div>
    </div>
  );
};

export default ContactForm;
