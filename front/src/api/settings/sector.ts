// eslint-disable-next-line import/no-anonymous-default-export
export default {
  sectorList: (id: string | null): [Object, Object | null] => [
    {
      url: "/sector" + (id == null ? "" : "/" + id),
      method: "GET",
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json:charset=UTF-8",
      },
    },
    null,
  ],
};
