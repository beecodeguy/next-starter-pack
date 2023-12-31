import styles from "app/page.module.css";
import ThemeSwitch from "components/common/ThemeSwitch/ThemeSwitch";
import { Input } from "shad/components/ui/input";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-center text-3xl underline">All the pages here</h1>
      <ThemeSwitch />
      <Input placeholder="from shadcn/ui (Type here...)" />
    </main>
  );
}
