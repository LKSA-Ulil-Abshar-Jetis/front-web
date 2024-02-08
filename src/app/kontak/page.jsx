'use client'

import contact from "@/data/kontak";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${contact.phoneNumber}`, "_blank");
  };

  return (
    <>
      <section className="w-6/12 m-auto">
        <h1 className="font-bold text-4xl text-center pb-4">Kontak Kami</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="font-bold">
            <h5>Panti Asuhan Putra Muhammadiyah Ulil Abshar</h5>
            <h6>
              Jl. Margo Basuki No.43, Jetis, Mulyoagung, Kec. Dau, Kabupaten
              Malang, Jawa Timur
            </h6>
            <h6>Kode Pos: 65151</h6>
            <h6>(0341) 464563</h6>
            <br />
            <p>Atau</p>
            <br />
            <h5 className="mb-2">Hubungi kami di WhatsApp</h5>
            <div
              className="bg-green-500 w-[200px] h-[50px] rounded-md text-white flex flex-row justify-center items-center cursor-pointer"
              onClick={handleWhatsAppClick}
            >
              <FaWhatsapp size={20} className="mr-2" />
              <h6>{contact.phoneNumber}</h6>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.98392562424092!2d112.58761879919062!3d-7.921910315713548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788189c825d8cf%3A0x2bc090a74badbdfe!2sPesantren%20Panti%20Asuhan%20Putra%20Muhammadiyah%20Ulil%20Abshar!5e0!3m2!1sen!2sid!4v1706897292887!5m2!1sen!2sid"
            width="100%"
            height={400}
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            className="content-end"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
