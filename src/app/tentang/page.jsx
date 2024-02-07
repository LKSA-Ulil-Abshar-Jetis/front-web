import sejarah from "@/data/sejarah";
import parse from "html-react-parser";

export default function Sejarah() {
  return (
    <>
      <section className="container m-auto p-8">
        <h1 className="font-bold text-4xl text-center">Sejarah Kami</h1>
        <br />
        <p className="text-justify">
          Aute ullamco ex dolore nostrud consequat pariatur anim reprehenderit
          et ad. Ad laborum non mollit esse Lorem est enim tempor sunt. Eiusmod
          voluptate ex occaecat commodo. Adipisicing nulla consequat
          reprehenderit cillum. Ad dolor elit in ullamco enim. Excepteur veniam
          laboris in tempor laboris dolore excepteur. Cupidatat occaecat irure
          cillum id exercitation ut nulla. Quis velit sint sint et elit sint
          aliquip non qui. Minim in eiusmod excepteur officia laboris
          adipisicing in. Est dolor nostrud quis minim ad ea ad ex. Amet tempor
          ea consequat nostrud veniam ea laboris ipsum ullamco ad anim. Veniam
          proident anim ex et excepteur ea consequat consectetur qui
          exercitation culpa consectetur. Occaecat veniam voluptate pariatur
          officia. Elit sit quis consequat officia id dolore aute. Adipisicing
          anim aliquip anim occaecat qui mollit. Consectetur mollit aliqua eu
          tempor et eu amet in consectetur laboris. Anim consectetur
          reprehenderit ut cupidatat irure anim. Ea consequat in eiusmod dolor
          veniam. Do ipsum sit ad reprehenderit nulla. Aliqua dolore sit
          consectetur veniam qui fugiat. Eiusmod culpa incididunt ipsum
          exercitation voluptate in id aute quis. Ullamco nisi eu sunt ut nulla
          culpa non nulla. Ipsum et aliqua dolor nisi exercitation minim qui non
          Lorem ea. Laboris ullamco commodo ut exercitation quis commodo nisi
          magna cupidatat dolor labore in amet. Ipsum incididunt anim sit
          commodo et. Sint reprehenderit aliquip fugiat enim labore. Laboris
          exercitation dolore magna consequat deserunt qui consectetur
          consequat. Magna culpa eu magna quis nulla et.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <h1 className="font-bold text-4xl text-center">Visi</h1>
            <br />
            <p className="text-justify">
              Enim id adipisicing irure voluptate ea culpa voluptate adipisicing
              consequat consectetur incididunt nostrud. Esse velit Lorem non
              officia cupidatat mollit ullamco adipisicing. Excepteur ex eiusmod
              do enim et est sit excepteur anim ut. Reprehenderit cupidatat
              adipisicing duis officia veniam. Aute et commodo nisi eu qui eu
              laboris. In do cillum deserunt laborum reprehenderit adipisicing
              quis enim commodo ex dolore reprehenderit exercitation ad. Esse
              consectetur duis officia duis exercitation duis do ipsum excepteur
              est ullamco enim. Eu sunt non qui deserunt quis do consequat minim
              ipsum reprehenderit quis pariatur.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-4xl text-center">Misi</h1>
            <br />
            <p className="text-justify">
              <ol className="list-decimal ml-8 space-y-4">
                <li>
                  Sunt anim magna proident reprehenderit labore enim enim
                  consequat ipsum ea in minim anim magna. Commodo cupidatat
                  aliqua fugiat culpa sit ipsum ad. Ad pariatur laboris cillum
                  officia ut pariatur est nostrud. Voluptate occaecat fugiat
                  commodo ex nostrud culpa tempor dolor labore aliquip pariatur.
                  Cillum nisi consectetur magna reprehenderit. Ex excepteur
                  dolor consequat enim anim do culpa dolore non excepteur.
                  Consectetur in duis exercitation do et pariatur veniam eu
                  fugiat.
                </li>
                <li>
                  Qui ipsum proident ullamco adipisicing laboris. Excepteur
                  aliquip cupidatat officia culpa aute sit aliqua fugiat ullamco
                  elit excepteur dolor. Laborum deserunt pariatur id voluptate
                  cupidatat et nostrud in incididunt enim sit commodo.
                </li>
                <li>
                  Velit quis velit est laboris ullamco et. Ipsum quis in mollit
                  labore occaecat id irure proident cupidatat nostrud eu dolore
                  ea. Ea occaecat consectetur aute proident velit cupidatat anim
                  eiusmod sunt. Ad ea non Lorem veniam ut adipisicing ad velit
                  laborum laborum ad irure sint officia.
                </li>
                <li>
                  Eu eiusmod duis voluptate reprehenderit. Cupidatat cillum et
                  sit pariatur non voluptate eu. In sit culpa culpa labore
                  deserunt quis in excepteur sint excepteur. Minim nostrud esse
                  aliqua ex sit est aliqua eiusmod ipsum minim voluptate
                  excepteur voluptate. Minim officia ut aliqua ad adipisicing
                  cillum ex occaecat voluptate pariatur enim.
                </li>
                <li>
                  Reprehenderit aliqua excepteur sit magna minim excepteur
                  adipisicing ea ad exercitation irure. Anim velit id
                  adipisicing voluptate nisi mollit cupidatat minim eu.
                  Consequat voluptate anim laboris tempor nulla laborum minim id
                  cillum ad laborum sunt. Aute in reprehenderit mollit ea
                  cupidatat adipisicing proident nulla nulla. Est enim consequat
                  quis qui amet do cupidatat nulla anim enim ullamco commodo.
                </li>
              </ol>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
