import express, { Request, Response } from "express";

const port = 5000;

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("HELLO FROM EXPRESS TYPESCRIPT SERVER");
});
app.get("/about", (req: Request, res: Response) => {
  res.send("about us hii king ragnar say my name");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
