import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog/dialog";
import styles from "./SubstackDialog.module.scss";

export const SubstackDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Subscribe for Updates</DialogTitle>
          <DialogDescription>
            Subscribe to our newsletter to get the latest news and updates.
          </DialogDescription>
        </DialogHeader>

        <div className={styles.iframeContainer}>
          <iframe
            src="https://diversifi.substack.com/embed"
            className={styles.iframe}
            title="Substack Newsletter Subscription"
            loading="lazy"
            // Add responsive attributes
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
