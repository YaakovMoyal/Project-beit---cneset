import { verify, sign } from 'jsonwebtoken';
import { TokenIF } from '../interfaces/tokenIF';

const key = 'my_private_key';

export const generateAuthToken = (user: TokenIF) => sign(user, key);

export const verifyToken = (tokenFromClient: string) =>
  verify(tokenFromClient, key);
