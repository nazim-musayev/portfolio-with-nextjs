import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <div className="h-full">
      <p className="text-center text-gray-300 mb-1">
        Feel free to contact me anytimes
      </p>
      <h2 className="text-3xl text-center font-bold mb-12">
        Get in Touch
      </h2>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-5">
        <div>
          <p className="text-2xl mb-7">Send Email</p>
          <ContactForm />
        </div>
        <div className="lg:pl-10">
          <p className="text-2xl mb-7">Contact Info</p>
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
