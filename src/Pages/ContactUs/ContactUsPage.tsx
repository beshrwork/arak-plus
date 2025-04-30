import ContactForm from "./Components/Form";

const ContactUsPage = () => {
  return (
    <div className="bg-[#fff] max-w-[1440px] mx-auto max-h-screen justify-center text-center">
      <h2 className="text-black text-lg font-bold" dir="ltr">
       إذا كنت بحاجة إلى مساعدة أو لديك أي استفسار، نحن هنا لخدمتك  </h2>
      <div className="justify-center text-center ">
        <div className="flex justify-center text-left">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
