import Connection from "../Connection";
import access from "../settings/user";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: (id: string | null) => {
    const config = access.list(id);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    return Connection.useApiResult(...config);
  },
  set: (id: string | null, data: any) => {
    const config = access.set(id, data);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    return Connection.useApiResult(...config);
  },
  delete: (id: string) => {
    const config = access.delete(id);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    return Connection.useApiResult(...config);
  },
};
