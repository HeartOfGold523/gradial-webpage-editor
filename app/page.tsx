import { PageEditor, Sidebar } from "@/components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <div>
        <Sidebar />
      </div>
      <div className={`${styles.pageEditor}`}>
        <PageEditor />
      </div>
    </main>
  );
}
