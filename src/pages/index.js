import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

import Translate  from '@docusaurus/Translate';

const features = [
  {
    title: 'Any Registry',
    imageUrl: '/img/registry.png',
    description: (
      <>
        Works with any Docker Registry API v2 implementation such as DockerHub, GitHub, GitLab, Quay, Google, Azure and Amazon Container Registries.
      </>
    ),
  },
  {
    title: 'Any Artifacts',
    imageUrl: '/img/artifacts.png',
    description: (
      <>
        Saves any artifacts you want (e.g. protobuf files, source files, binaries, etc.) as a container image.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout description={siteConfig.title}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              <Translate id="homepage.getStarted">
                Get Started
              </Translate>
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                <div className="col col--2"></div>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
                <div className="col col--2"></div>
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
