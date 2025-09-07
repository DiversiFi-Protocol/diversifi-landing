import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/Dialog/dialog";
import { Button } from "../../ui/Button/button";
import styles from "./NavigateOutDialog.module.scss";

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
          <DialogTitle>You are navigating to an external site</DialogTitle>
          <DialogDescription className="sr-only">
            Navigating to {href}
          </DialogDescription>
        </DialogHeader>
        <span>Continue navigating to {href}?</span>
        <DialogFooter className={styles.ctaButtons}>
          <a href={href} target="_blank" rel="noopener noreferrer">
            <Button
              className="w-full"
              buttonColor="accent"
              onClick={() => setOpen(false)}
            >
              Continue
            </Button>
          </a>

          <Button border="black" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
