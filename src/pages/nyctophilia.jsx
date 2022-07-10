import Heading from '../components/Heading';
import HeadMeta from '../components/HeadMeta';
import BookList from '../content/BookList.mdx';
import Nyctophilia from '../content/Nyctophilia.mdx';
import styles from './nyctophilia.module.css';

function NyctophiliaPage() {
  return (
    <>
      <Heading
        title="Nyctophilia"
        subtitle="nyc•to•phil•i•a (nĭk′tə-fĭl′ē-ə)"
      />
      <HeadMeta
        title="Nyctophilia"
        description="My little night garden of dark and creepy books. The bloody fairy tales, the vengeful fairies and the abject dark magic is what gets my blood pumping."
      />
      <div className={styles.nyctophilia}>
        <div className={styles.grid}>
          <div className={styles.intro}>
            <div className={styles.introInner}>
              <Nyctophilia />
            </div>
          </div>
          <BookList />
        </div>
      </div>
    </>
  );
}

export default NyctophiliaPage;
