import React from "react";

import Layout from "../layouts";
import ArticleDate from "../components/ArticleDate";
import Separator from "../components/Separator";

const Home = () => (
  <Layout
    meta={{
      title: "Flavien Pensato - Frontend développeur",
      description:
        "Salut, je m'appelle Flavien Pensato. Je suis un développeur passionné et enthousiaste ! J'habite à Lyon et je travaille actuellement chez Unow.",
    }}
  >
    <section>
      <h1>
        Salut,
        <br />
        Je m&apos;appelle Flavien&nbsp;Pensato
      </h1>
      <p>
        Je suis un développeur passionné et enthousiaste !
        <br />
        J&apos;habite à Lyon et je travaille actuellement chez Unow.
      </p>
    </section>
    <Separator />
    <section>
      <h2>Chronologie</h2>
      <ol>
        <li>
          <h3>Unow</h3>
          <p>
            Unow est une startup parisienne et lyonnaise créée en 2013.
            C&apos;est un organisme de formation digital spécialisé sur le
            format{" "}
            <a
              href="https://fr.wikipedia.org/wiki/SPOC"
              target="_blank"
              rel="noreferrer"
              title="SPOC (Small Private Online Course)"
            >
              SPOC
            </a>{" "}
            (Small Private Online Course) et les soft-skills.
          </p>
          <p>
            Je travaille actuellement en tant que développeur front-end sur un
            ensemble de projets (plateforme de formation, backoffice, etc.).
          </p>
          <ArticleDate from="2019-03-01"></ArticleDate>
        </li>
        <li>
          <h3>Peaks</h3>
          <p>
            <a
              href="https://www.peaks.fr"
              target="_blank"
              rel="noreferrer"
              title="Peaks"
            >
              Peaks
            </a>{" "}
            est une ESN lyonnaise en plus d&apos;être une agence numérique.
          </p>
          <p>
            J&apos;ai pu y travailler pendant deux ans. J&apos;étais en mission
            chez un de leurs prestigieux clients,{" "}
            <a
              href="https://www.bedrockstreaming.com/"
              target="_blank"
              rel="noreferrer"
              title="Bedrock streaming"
            >
              M6 Web
            </a>{" "}
            (bedrock srteaming), en tant que développeur front-end.
          </p>
          <ArticleDate from="2017-03-9" to="2019-03-09"></ArticleDate>
        </li>
        <li>
          <h3>Freelance</h3>
          <p>
            Pendant ma scolarité, j&apos;ai créé ma micro-entreprise et proposé
            mon expertise{" "}
            <a
              href="https://www.meteor.com/"
              target="_blank"
              rel="noreferrer"
              title="Meteor"
            >
              Meteor
            </a>{" "}
            à des particuliers et des startups.
          </p>
          <ArticleDate from="2013-01-01" to="2017-01-01"></ArticleDate>
        </li>
        <li>
          <h3>Epitech</h3>
          <p>Bac +5. Expert en Technologies de l’Information. Niveau 1.</p>
          <p>
            En <time dateTime="2016-10-01">2016</time>, j&apos;ai étudié dans
            l&apos;
            <a
              href="https://fr.wikipedia.org/wiki/Universit%C3%A9_Tongji"
              target="_blank"
              rel="noreferrer"
              title="Meteor"
            >
              Univeristé de Tongji
            </a>
            .
            <br />
            Cela a été une des meilleures années de ma vie où j&apos;ai pu y
            découvrir une culture, des gens ainsi qu&apos;un pays magnifique.
          </p>
          <ArticleDate from="2012-01-01" to="2017-01-01"></ArticleDate>
        </li>
      </ol>
    </section>
  </Layout>
);

export default Home;
