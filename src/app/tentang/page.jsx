import tentang from "@/data/tentang";
import parse from "html-react-parser";

export default function Sejarah() {
  return (
    <>
      <section className="w-6/12 m-auto p-8">
        <div className="mb-8">
          <h1 className="font-bold text-4xl text-center">Sejarah Kami</h1>
          <br />
          <p className="text-justify">
            {parse(tentang.sejarah)}
          </p>
        </div>
        <div className="mb-8">
          <h1 className="font-bold text-4xl text-center">Visi</h1>
          <br />
          <p className="text-center">
            {parse(tentang.visi)}
          </p>
        </div>
        <div className="mb-8">
          <h1 className="font-bold text-4xl text-center">Misi</h1>
          <br />
          <p className="text-center">
            {parse(tentang.misi)}
          </p>
        </div>
        <div className="mb-8">
          <h1 className="font-bold text-4xl text-center">Tujuan</h1>
          <br />
          <p className="text-center">
            {parse(tentang.tujuan)}
          </p>
        </div>
      </section>
    </>
  );
}
