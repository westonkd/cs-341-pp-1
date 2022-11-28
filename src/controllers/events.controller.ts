import { Request, Response } from "express";

const create = (req: Request, res: Response) => {
  res.json({});
};

const show = (req: Request, res: Response) => {
  res.json({ foo: "bar" });
};

const index = (req: Request, res: Response) => {
  res.send({ foo: "changed" });
};

const update = (req: Request, res: Response) => {
  res.json({});
};

const destroy = (req: Request, res: Response) => {
  res.json({});
};

export { create, show, index, update, destroy };
