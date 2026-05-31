import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IoIosLogOut } from "react-icons/io";
import ModeToggleTheme from "./mode-toggle-theme";
const Header = () => {
  return (
    <header className="border-b border-[#E5E7EB]">
      <div className="flex justify-between items-center p-5">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.svg" alt={`${APP_NAME} logo`} width={48} height={50} priority={true} />
          <span className="text-xl font-bold lg:block hidden">Ecommerce</span>
        </Link>
        <div className="flex items-center gap-2">
            <ModeToggleTheme />
            <Button asChild variant="outline" className="hover:bg-zinc-100">
              <Link href="/cart">
                 <ShoppingCart className="w-5 h-5" />
                 <span>Cart</span>
              </Link>
            </Button>
            <Button asChild className="bg-black text-white hover:bg-gray-800 duration-300 ease-in-out" variant="default">
              <Link href="/login">
                 <IoIosLogOut className="w-5 h-5" />
                 <span>Sign in</span>
              </Link>
            </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
