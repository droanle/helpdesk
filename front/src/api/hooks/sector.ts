import Connection from "../Connection";
import access from "../settings/sector";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: (id: string | null) => {
    const config = access.sectorList(id);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    return Connection.useApiResult(...config);
  },
};
