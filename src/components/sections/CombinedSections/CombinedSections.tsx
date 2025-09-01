import Explainer2Section from "../Explainer2/Explainer2Section";
import Explainer3Section from "../Explainer3/Explainer3Section";
import styles from "./CombinedSections.module.scss";

export default function CombinedSections() {
  return (
    <div className={styles.container}>
      <Explainer2Section />
      <Explainer3Section />
    </div>
  );
}
