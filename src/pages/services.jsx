import Heading from '../components/Heading';
import HeadMeta from '../components/HeadMeta';
import Service from '../components/Service';
import Services from '../content/Services.mdx';
import ManuscriptAssess, { ma } from '../content/services/ManuscriptAssess.mdx';
import QueryCritique, { qc } from '../content/services/QueryCritique.mdx';
import SubmissionPkg, { sp } from '../content/services/SubmissionPkg.mdx';
import site from '../site.json';
import styles from './services.module.css';

const { contactFormUrl } = site;

function ServicesPage() {
  return (
    <>
      <Heading title="Editorial Services" />
      <HeadMeta
        title="Editorial Services"
        description="Looking for feedback on your first draft, query letter or agent submission package? I can help! I’m a freelance editor and manuscript assessor."
      />
      <div className={styles.root}>
        <div className={styles.body}>
          <Services />
        </div>
        <hr className={styles.separator} />
        <div className={styles.services}>
          <div className={styles.left}>
            <Service {...qc}>
              <QueryCritique />
            </Service>
            <Service {...sp}>
              <SubmissionPkg />
            </Service>
          </div>
          <div className={styles.right}>
            <a className={styles.cta} href={contactFormUrl}>
              Get in touch!
            </a>
            <Service {...ma}>
              <ManuscriptAssess />
            </Service>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesPage;
