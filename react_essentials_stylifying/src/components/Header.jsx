import logo from "../assets/logo.png";

const headerStyle = "flex flex-col items-center mt-8 mb-16 ";
const headerImgStyle = "mb-8 w-44 h-44 object-contain ";
const headerH1Style = "text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title ";
const headerPStyle = "text-stone-500"; 

export default function Header() {
  return (
    <header className={headerStyle} >
      <img src={logo} alt="A canvas" className={headerImgStyle} />
      <h1 className={headerH1Style}>ReactArt</h1>
      <p className={headerPStyle} >A community of artists and art-lovers.</p>
    </header>
  );
}
