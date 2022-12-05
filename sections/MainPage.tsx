import s from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <div className={s.mainPage}>
      <h1>About</h1>

      <p>
        Bespoke solutions are useful if you need to quickly solve a problem and
        don&#39;t want to spend time on running a project on the platform
        itself.
      </p>

      <p>
        Select the problem to solve, fill out an application form for creating a
        project, and upload your data: the service will configure the project
        for you, create a task interface , and find performers.All you have to
        do is run your project and get the labeling results.
      </p>

      <div className={s.gridContainer}>
        <div className={s.gridItem}>
          <h3>
            <a href="https://toloka.ai/en/docs/toloka-apps/concepts/quickstart">
              Getting started
            </a>
          </h3>
          <p>Create your first bespoke project</p>
        </div>
        <div className={s.gridItem}>
          <h3>
            <a href="https://toloka.ai/en/docs/toloka-apps/concepts/add-task">
              Uploading data for labeling
            </a>
          </h3>
          <p>Create a new batch and upload task items to it</p>
        </div>
        <div className={s.gridItem}>
          <h3>
            <a href="https://toloka.ai/en/docs/toloka-apps/concepts/download-results">
              Downloading the results
            </a>
          </h3>
          <p>Download a file with the labeling results</p>
        </div>
        <div className={s.gridItem}>
          <h3>
            <a href="https://toloka.ai/en/docs/toloka-apps/api/ref/index">
              API reference
            </a>
          </h3>
          <p>HTTP API method descriptions</p>
        </div>
        <div className={s.gridItem}>
          <h3>
            <a href="https://toloka.ai/en/docs/toloka-apps/api/concepts/authorization">
              Authorization in the API
            </a>
          </h3>
          <p>Get a token to work with the API</p>
        </div>
        <div className={s.gridItem}>
          <h3>
            <a href="https://toloka.ai/en/docs/toloka-apps/api/concepts/quickstart-api">
              API quick start
            </a>
          </h3>
          <p>Step-by-step instructions for running a sample bespoke project</p>
        </div>
        <div className={s.gridItem}>
          <h3>
            <a href="https://toloka.ai/en/docs/toloka-apps/concepts/troubleshooting">
              Troubleshooting
            </a>
          </h3>
          <p>Frequently asked questions about the service</p>
        </div>
        <div className={s.gridItem}>
          <h3>
            <a href="https://toloka.ai/en/docs/toloka-apps/concepts/support">
              Support
            </a>
          </h3>
          <p>If you have any issues, contact us</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
