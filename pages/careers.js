import Nav from '../components/nav';
import Footer from '../components/Footer';
import React from 'react';
import Head from 'next/head';

export default function CareersPage() {
  return (
    <div>
      <div className="mx-4 sm:mx-16">
        <Nav />
        <div>
          <Head>
            <title>Temporal.io Careers</title>
            <meta property="title" content="Temporal.io Careers: Help Us Build Invincible Apps" />
            <meta
              property="og:title"
              content="Temporal.io Careers: Help Us Build Invincible Apps"
            />
            <meta
              property="description"
              content="Temporal is the open source platform for mission critical code that interacts with unreliable, distributed services."
            />
            <meta
              property="og:description"
              content="Temporal is the open source platform for mission critical code that interacts with unreliable, distributed services."
            />
            <meta property="og:image" content="https://temporal.io/logo-font-straight-dark.svg" />
            <meta property="og:url" content="http://temporal.io" />
            <meta
              property="twitter:title"
              content="Temporal.io Careers: Help Us Build Invincible Apps"
            />
            <meta
              property="twitter:description"
              content="Temporal is the open source platform for mission critical code that interacts with unreliable, distributed services."
            />
            <meta
              property="twitter:image"
              content="https://temporal.io/logo-font-straight-dark.svg"
            />
            <meta property="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@temporaltech" />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.leverJobsOptions = {accountName: 'temporal', includeCss: true};`
              }}
            />
            <script
              async
              type="text/javascript"
              src="https://andreasmb.github.io/lever-jobs-embed/index.js"></script>
          </Head>
          <h1 className="text-3xl sm:w-800 leading-lg sm:text-4xl sm:leading-4xl font-bold mb-4">
            Help us deliver a new way to build scalable and reliable applications!
          </h1>
          <h2 className="text-xl leading-tight">
            If none of these positions are a fit, email careers@temporal.io describing your dream
            job.
          </h2>
        </div>
        <div className="container sm:p-8 rounded-lg my-16 sm:ml-16">
          <div id="lever-jobs-container"></div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
}
