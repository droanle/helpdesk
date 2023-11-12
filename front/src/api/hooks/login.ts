import Connection from '../Connection';
import access from '../settings/access';

export default (login: string, pass: string) => {
   const config = access.login(login, pass);

   return Connection.useApiResult(...config);
} 