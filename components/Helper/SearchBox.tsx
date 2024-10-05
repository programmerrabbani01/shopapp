import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { SearchIcon } from "lucide-react";

export default function SearchBox() {
  return (
    <Dialog>
      <DialogTrigger>
        <SearchIcon size={26} cursor={"pointer"}></SearchIcon>
      </DialogTrigger>
      <DialogContent>
        <form action="">
          <input
            type="search"
            placeholder="Search products..."
            className="block w-full bg-gray-300 outline-none rounded-lg px-6 py-2 mt-4 "
          />
        </form>
      </DialogContent>
    </Dialog>
  );
}
