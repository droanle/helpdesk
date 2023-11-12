import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import Cookies from "universal-cookie";
import env from "react-dotenv";

/**
 * Function that intercepts errors (401), and returns a promise with the error message
 * @type {Function} errorInterceptor
 */

const errorInterceptor = (error: AxiosError) => {

   if (error.message === 'Network Error') {
      return Promise.reject(new Error('Network Error.'));
   }

   if (error.response?.status === 401) {
      // Do something
   }

   return Promise.reject(error);
};

/**
 * Function that intercepts responses, and returns a promise with the response
 * @type {Function} responseInterceptor
 */
const responseInterceptor = (response: AxiosResponse) => {
   return response;
};

/**
 * Class that creates a connection with the API
 * @class Connection
 */
class Connection {
   private api: AxiosInstance;



   public constructor() {
      this.api = axios.create({
         baseURL: env.API_BASE_URL
      });
   }

   /**
    * Function that returns a promise with the response of the API
    *  @public useApiResult
    *  @returns {Promise<[any, number]>} Promise with the response of the API
    */
   public useApiResult(request: Object, settings: Object | null): Promise<[any, number]> {
      var api = this.api;

      if (settings != null) {
         api = axios.create(settings);
      }

      api.interceptors.response.use(
         (response) => responseInterceptor(response),
         (error) => errorInterceptor(error)
      );

      return new Promise((resolve, reject) => {
         try {
            api(request)
               .then(async (res) => {
                  if (res.data.error) reject([res.data.body, res.data.status]);
                  else resolve([res.data.body, res.data.status]);

                  const cookies = new Cookies();
                  cookies.set('token', res.data.body, {
                     maxAge: env.API_ENV === 'local' ? 30 * 24 * 60 * 60 : 6 * 60 * 60 + 900
                  });
                  // 30 days for local, 6 hours and 15 minutes for production
               }

               ).catch((res) => {

                  reject(["Login Inválido", 500]);
                  console.log(res);

               })
         } catch (error) {
            reject(error);
         }
      }
      );
   }
}

export default new Connection();