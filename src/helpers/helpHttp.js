export const httpHelp = () => {
  const customFetch = async (url, options) => {
    const controller = new AbortController();

    options.signal = controller.signal;

    let headersDefault = { accept: "application/json" };
    options.headers = options.headers
      ? { ...headersDefault, ...options.headers }
      : headersDefault;

    options.method = options.method || "GET";

    options.body = options.body ? JSON.stringify(options.body) : false;

    if (!options.body) delete options.body;
    //  console.log(options);
    setTimeout(() => controller.abort(), 3000);

    /*     let fetchError = { //  la respuesta del servidor manda el ststus y statusText lo encierro en un objeto y lo mando al error
      err: true,
      status: res.status || "no regreso status status 000",
      statusText: res.status || "el servidor no mando el estado del error Ocurrio un error "
} */

    return fetch(url, options) //l que regresa la funcion es res.json
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "no regreso status status 000",
              statusText:
                res.statusText ||
                "el servidor no mando el estado del error Ocurrio un error ",
            })
      )
      .catch((err) => err); // si hay error regresa el error que es el objetos que mandamos en el rejet
  };
  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    options.method = options.method || "POST";
    return customFetch(url, options);
  };

  const put = (url, options = {}) => {
    options.method = options.method || "PUT";
    return customFetch(url, options);
  };

  const del = (url, options = {}) => {
    options.method = options.method || "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
