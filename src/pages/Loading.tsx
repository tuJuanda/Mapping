import logo from "@/assets/img/Tujuanda-logo.png";
function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src={logo} alt="Tujuanda Logo" className="w-32 h-32 animate-spin" />
    </div>
  );
}

export default Loading;

