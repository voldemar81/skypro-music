import { Nav } from '../navComponent/nav';
import { СenterBlock } from '../centerblockComponent/centerblock';
import { MainSidebar } from '../mainSidebarComponent/mainSaidebar';
import styles from './main.module.css';

export function Main() {
  return (
    <main className={styles.main}>
      <Nav />
      <СenterBlock />
      <MainSidebar />
    </main>
  );
}