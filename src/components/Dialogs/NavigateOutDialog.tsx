import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export function NavigateOutDialog({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>You are leaving https://diversifi.tech</DialogTitle>
          <DialogDescription>Are you sure you want to leave?</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <button onClick={() => setOpen(false)}>Cancel</button>

          <a href={href}>
            <button onClick={() => setOpen(false)}>Continue</button>
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
