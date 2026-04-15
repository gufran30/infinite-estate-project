import Navbar from "@/components/navbar/Navbar";
import ToggleMode from "@/components/toggleMode";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="text-neutral-700 dark:text-neutral-300">Hey there</div>
      <div>
        <ToggleMode />
      </div>
    </div>
  );
}
