import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#13263c] w-full p-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-row items-center">
            <Image
              src="/logo.svg"
              alt="Logo Panti"
              width={50}
              height={50}
              priority
              className="mr-4"
            />
            <h3 className="text-white">&copy; 2024 - Panti Asuhan Putra Muhammadiyah Ulil Abshar</h3>
          </div>
        </div>
      </footer>
    </>
  );
}
