
export default {
    "login": (login: string, password: string): [Object, Object | null] => [{
          url: '/login/',
          method: 'GET',
          headers:{
             Accept: 'application/json',
             'Content-Type': 'application/json:charset=UTF-8'
          },
          params: {
             login: login,
             password: password
          }
       }, null],
  };