import app from "./app";

import routes from "./routes";

app.use(routes);

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "localhost";

app.listen(PORT, () => {
  const statusServer =
    process.env.DEVELOPMENT === "true"
      ? `Server running on http://${HOST}:${PORT}`
      : `Server running on ${process.env.DEPLOY_URL}`;

  console.log(statusServer);
});
