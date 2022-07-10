import Degree from '../components/Degree';
import Heading from '../components/Heading';
import HeadMeta from '../components/HeadMeta';
import About from '../content/About.mdx';
import site from '../site.json';
import styles from './index.module.css';

const { imgUrl } = site;

function HomePage() {
  return (
    <>
      <Heading title="About me" />
      <HeadMeta
        title="Cass Frances - Young Adult Fiction Writer"
        description="Official website of Cass Frances, young adult fiction writer. I write about ghosts, creepy sisters, and bad love with some good kissing."
      />
      <div className={styles.about}>
        <div className={styles.body}>
          <About />
        </div>
        <div className={styles.resume}>
          <img
            className={styles.portrait}
            src={`${imgUrl}/w_300,q_90/cassandra-frances-portrait.jpg`}
            alt="Photo portrait of writer Cass Frances"
            width={300}
            height={300}
          />
          <div className={styles.academia}>
            <Degree
              title="Master of Creative Writing, Publishing and Editing"
              uni="The University of Melbourne, 2014–2015"
              text="I graduated with First Class Honours. My thesis was on sisterhood in gothic fiction."
            />
            <Degree
              title="Bachelor of Psychology"
              uni="Swinburne University, 2011–2013"
              text="I went on exchange to Aalborg University in Denmark, where I studied Metafiction and Twentieth-Century Literature."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
