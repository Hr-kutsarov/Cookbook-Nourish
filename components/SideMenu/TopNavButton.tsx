import { Button, buttonVariants } from "@/components/ui/button"
import { RxDoubleArrowRight } from 'react-icons/rx'
import useSideMenu from "@/hooks/sideMenu";

export default function TopNavButton() {
  const handler = useSideMenu();
  return (
      <Button variant='ghost' onClick={() => handler.onClose()}><RxDoubleArrowRight /></Button>
  )
}
