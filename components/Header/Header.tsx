import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import SearchBox from "../Helper/SearchBox";
import { HeartIcon, UserIcon } from "lucide-react";
import ShoppingCartButton from "../ShoppingCartButton/ShoppingCartButton";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <div className="h-[12vh] static top-0 z-[1] bg-white shadow-md ">
      <div className="flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full">
        {/* LOGO */}
        <Link href="/">
          <Image src={logo} alt="LOGO" width={140} height={140} />
        </Link>
        {/* icons */}
        <div className="flex items-center space-x-6 ">
          {/* search box */}
          <SearchBox></SearchBox>
          {/* wishlist */}
          <HeartIcon size={26} cursor={"pointer"}></HeartIcon>
          {/* Shopping cart */}
          <ShoppingCartButton></ShoppingCartButton>
          {/* sign in user button */}
          <SignedIn>
            <UserButton></UserButton>
          </SignedIn>
          {/* not sign in */}
          <SignedOut>
            <SignInButton>
              {/* user button */}
              <UserIcon size={26} cursor="pointer" />
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
