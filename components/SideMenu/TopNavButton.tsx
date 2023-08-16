import { Button, buttonVariants } from "@/components/ui/button"
import { RxCross1 } from 'react-icons/rx'
import useSideMenu from "@/hooks/sideMenu";

export default function TopNavButton() {
  const handler = useSideMenu();
  return (
    <div className="hidden lg:flex">
      <Button variant='ghost' onClick={() => handler.onClose()}><RxCross1 /></Button>
    </div>
  )
}
