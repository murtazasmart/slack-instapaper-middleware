import { NextFunction, Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(req.params);
  res.json({
    apiVersion: "1.0",
  });
});

router.post("/", (req, res) => {
  console.log(req.body.challenge);
  res.status(200);
  res.type('application/json');
  res.json({
    "challenge": req.body.challenge
  });
});

export { router };
