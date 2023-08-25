import { Nav } from '../navComponent/nav';
import { СenterBlock } from '../centerblockComponent/centerblock';
import { MainSidebar } from '../mainSidebarComponent/mainSaidebar';
import styles from './main.module.css';

export function Main({ isLoading }) {
  return (
    <main className={styles.main}>
      <Nav />
      <СenterBlock isLoading={isLoading}/>
      <MainSidebar isLoading={isLoading}/>
    </main>
  );
}