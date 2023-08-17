import { Button, buttonVariants } from "@/components/ui/button"
import { RxDoubleArrowRight } from 'react-icons/rx'
import useSideMenu from "@/hooks/sideMenu";

export default function BottomNavButton() {
    const handler = useSideMenu();

  return (
    <Button variant='destructive' onClick={() => handler.onClose()}><RxDoubleArrowRight /></Button>

  )
}
