import * as yup from 'yup';
import { Request, Response, NextFunction } from 'express';

export const validatePatientPayload = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required(),
    city: yup.string().required(),
    state: yup.string().required(),

  });

  try {
    await schema.validate(req.body, { abortEarly: false });
    return next();
  } catch (error) {

    if (error instanceof yup.ValidationError) {
      const errors = error.inner.map((err) => ({
        field: err.path,
        message: err.message,
      }));
      return res.status(400).json({ errors });
    }

    return res.status(500).json({ error: 'Ocorreu um erro ao validar os campos.' });
  }
};
