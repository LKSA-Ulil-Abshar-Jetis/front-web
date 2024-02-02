import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#13263c]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-row">
            <Image
              src="/logo.svg"
              alt="Logo Panti"
              width={50}
              height={50}
              priority
            />
            <div>
              <h1>Panti Asuhan Putra Muhammadiyah Ulil Abshar</h1>
              <h2>Jl. Margo Basuki No.58 B, Jetis</h2>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
