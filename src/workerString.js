import { functionToInstantString } from './util.js';

export default functionToInstantString(() => {
  (function () {
    let currentPost;

    function _sendPost(...args) {
      currentPost.done = args.shift();
      const transfers = Array.isArray(args[args.length - 1]) ? args.pop() : undefined;
      postMessage({ args, post: currentPost }, transfers);
    }

    globalThis.return = _sendPost.bind(this, true);
    globalThis.post = _sendPost.bind(this, false);

    globalThis.addEventListener('message', (e) => {
      currentPost = e.data.post;
      globalThis.receive.apply(e, e.data.args);
    }, false);
  }());

  /* @preserve __MultiWorker_placeholder__ */
});
