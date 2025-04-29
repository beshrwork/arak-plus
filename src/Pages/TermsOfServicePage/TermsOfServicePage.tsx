// import { data } from "./Helper/index";
import dataPrivacy from "./Helper/PrivacyData.json";
const TermsOfServicePage = () => {
  return (
    <div className="bg-gray-300 mx-auto min-h-screen mt-20">
      <div className="flex justify-center text-left">
        <div className="m-4 p-8 rounded-lg grid w-3/4 bg-white shadow-lg shadow-[#020A16] overflow-scroll">
          <div className="">
            <h1 className="mt-2 mb-5 text-[#020A16] text-2xl font-bold">
              Terms of Service
            </h1>
            <h1 className="text-black text-md font-bold">
              Last Updated December 2024
            </h1>
            <h1 className=" text-black font-bold">1.Acceptance of Terms</h1>
            <p className="">{dataPrivacy.overview}</p>
            <h1 className=" text-black font-bold">
              2. Changes to Terms
            </h1>
            <p className="">{dataPrivacy["second-part1"]}</p>
            <h1 className=" text-black font-bold">
              3. Privacy Policy
            </h1>
            <p className="">{dataPrivacy["third-part2"]}</p>
            <h1 className=" text-black font-bold">
              4. User Accounts
            </h1>
            <p className="mb-2">{dataPrivacy["four-part1"]}</p>
            <p className="mb-2">{dataPrivacy["four-part2"]}</p>
            <h1 className=" text-black font-bold">
              5. Acceptable Use
            </h1>
            <p className="">{dataPrivacy["five-part1"]}</p>
            <p className="">{dataPrivacy["five-part2"]}</p>
            <p className="">{dataPrivacy["five-part4"]}</p>
            <p className="">{dataPrivacy["five-part5"]}</p>
            <p className="">{dataPrivacy["five-part6"]}</p>
            <h1 className=" text-black font-bold">
              6. Intellectual Property
            </h1>
            <p className="">{dataPrivacy["six-part1"]}</p>
            <p className="">{dataPrivacy["six-part2"]}</p>
            <h1 className=" text-black font-bold">
              7. Payments and Subscriptions (If Applicable)
            </h1>
            <p className="">{dataPrivacy["seven-part1"]}</p>
            <p className="">{dataPrivacy["seven-part2"]}</p>
            <h1 className=" text-black font-bold">8.Third-Party Services </h1>
            <p className="mb-2">{dataPrivacy.track}</p>
            <h1 className=" text-black font-bold">9. Disclaimers</h1>
            <p className="">{dataPrivacy["nine-part1"]}</p>
            <p className="">{dataPrivacy["nine-part2"]}</p>
            <h1 className=" text-black font-bold">
              10. Limitation of Liability
            </h1>
            <p className="">{dataPrivacy["ten"]}</p>
            <h1 className=" text-black font-bold">
              11. Governing Law and Dispute Resolution
            </h1>
            <p className="">{dataPrivacy["elven-part1"]}</p>
            <p className="">{dataPrivacy["elven-part2"]}</p>
            <h1 className=" text-black font-bold">
              12. Termination
            </h1>
            <p className="mb-2">{dataPrivacy.framwork}</p>

            <h1 className=" text-black font-bold">
              13. Contact Information
            </h1>
            <p className="mb-2">{dataPrivacy["third13-part3"]}</p>

            <h1 className=" text-black font-bold">
              14. Entire Agreement
            </h1>
            <p className="mb-2">{dataPrivacy.colorado}</p>
            <h1 className=" text-black font-bold">Sign up</h1>
            <p className="mb-2">{dataPrivacy.signUp} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
