import Axios from "axios";

const CancelToken = Axios.CancelToken;

export function withCancelToken(fetcher) {
  let abort;

  function send(data, config) {
    cancel(); // 主动取消

    const cancelToken = new CancelToken((cancel) => (abort = cancel));
    return fetcher(data, { ...config, cancelToken });
  }

  function cancel(message = "abort") {
    if (abort) {
      abort(message);
      abort = null;
    }
  }

  return [send, cancel];
}
