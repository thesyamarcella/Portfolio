// src/components/ContactForm.tsx
export const ContactForm = () => {
    return (
      <section id="contact" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <form className="max-w-md mx-auto bg-gray-200 p-6 rounded">
            <input type="text" placeholder="Your Name" className="w-full mb-4 p-2 rounded" />
            <input type="email" placeholder="Your Email" className="w-full mb-4 p-2 rounded" />
            <textarea placeholder="Your Message" className="w-full mb-4 p-2 rounded"></textarea>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Send Message</button>
          </form>
        </div>
      </section>
    );
  };
  