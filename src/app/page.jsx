import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>

      <section class="bg-center bg-cover bg-no-repeat bg-[url('/tampak_depan.png')] bg-gray-700 bg-blend-multiply">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <div className="justify-items-center items-center">
            <h1 className="text-center text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#7af885] to-[#eaf558]">
              Lembaga Kesejahteraan Sosial Anak <br /> Panti Asuhan Putra
              Muhammadiyah Ulil Abshar
            </h1>
          </div>
        </div>
      </section>

      <main>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.98392562424092!2d112.58761879919062!3d-7.921910315713548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788189c825d8cf%3A0x2bc090a74badbdfe!2sPesantren%20Panti%20Asuhan%20Putra%20Muhammadiyah%20Ulil%20Abshar!5e0!3m2!1sen!2sid!4v1706897292887!5m2!1sen!2sid"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </main>
      <WhatsAppButton />
    </>
  );
}
