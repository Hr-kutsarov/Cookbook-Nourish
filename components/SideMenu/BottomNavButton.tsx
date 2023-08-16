import { Button, buttonVariants } from "@/components/ui/button"
import { RxExit } from 'react-icons/rx'
import useSideMenu from "@/hooks/sideMenu";

export default function BottomNavButton() {
    const handler = useSideMenu();

  return (
    <Button variant='ghost' onClick={() => handler.onClose()}><RxExit /></Button>

  )
}
