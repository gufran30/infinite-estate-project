import Container from "../Container"
import { DesktopNavbar } from "./DesktopNavbar"
import { MobileNavbar } from "./MobileNavbar"


const Navbar = () => {
  return (
    <div
      className="relative border-b border-gray-200 dark:border-gray-700 bg-neutral-50 dark:bg-linear-to-r from-gray-500 to-gray-800 shadow-xs"
    >
      <Container>
        <DesktopNavbar />
        <MobileNavbar />
      </Container>
    </div>
  )
}

export default Navbar