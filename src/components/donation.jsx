import donation from "@/data/donation";
import kontak from "@/data/kontak";
import Image from "next/image";
import { FaHandsHoldingChild } from "react-icons/fa6";

export default function Donation() {
  return (
    <>
      <h1 className="font-bold text-4xl text-center pt-5 pb-4">Donasi</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center justify-center">
          <FaHandsHoldingChild color={"#13263c"} size={80} />
          <h3 className="font-bold">{donation.jmlAnakAsuh} Anak Asuh</h3>
        </div>
        <div className="flex-col">
          <Image
            className="mb-2"
            src={donation.logo}
            alt={donation.bank}
            width={400}
            height={0}
          />
          <h5 className="font-bold">{donation.bank}</h5>
          <h5 className="font-bold">{donation.noRek}</h5>
          <h5 className="font-bold">a/n. {donation.noRekAtasNama}</h5>
          <p>Konfirmasi ke {kontak.getNationalPhoneNumber()}</p>
        </div>
      </div>
    </>
  );
}
