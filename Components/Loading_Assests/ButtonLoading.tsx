import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

export function ButtonLoading() {
  return (
    <Button
      variant="link"
      disabled
      className="w-full mr-4 mt-8 mb-5 text-white transition-transform transform active:scale-95 bg-[#5271FF]"
    >
      <Loader2 className=" mr-2 h-4 w-4 animate-spin " />
      Please wait
    </Button>
  );
}
