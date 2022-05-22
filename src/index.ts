import AppSingleton from "./AppSingleton";

const port = Number(process.env.PORT);
const host = process.env.DNS_NAME;

const expressApp = AppSingleton.getInstance().getExpressApp();

if (process.env.NODE_ENV === 'production') {
    expressApp.listen(process.env.PORT, () => {
        console.log(`Server is up and running at http://${host}:${port}/!`);
    });
} else {
    expressApp.listen(port, host, () => {
        console.log(`Server is up and running at http://${host}:${port}/!`);
    });
}