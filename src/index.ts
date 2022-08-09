import app from "./app";

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "localhost";

app.listen(PORT, () => {
  const statusServer =
    process.env.DEVELOPMENT === "true"
      ? `Server running on http://${HOST}:${PORT}`
      : process.env.DEPLOY_URL;

  console.log(statusServer);
});
