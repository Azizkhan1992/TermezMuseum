// import axios from 'axios';
import { ref } from 'vue';

export default function() {
  const CLIENT_ID = '1060783048197-dmsugoam4mqmsttl4cg1iigq8lv2n7v1.apps.googleusercontent.com'

  const userData = ref()

  const googleOptions = {
		client_id: CLIENT_ID, // required
		auto_select: false, // optional
		cancel_on_tap_outside: true, // optional
		context: 'signin', // optional
	};

  const googleOneTap = ({ client_id, auto_select = false, cancel_on_tap_outside = false, context = 'signin' }, callback) => {
    const contextValue = ['signin', 'signup', 'use'].includes(context) ? context : 'signin';
    const googleScript = document.createElement('script');
    googleScript.setAttribute('src', 'https://accounts.google.com/gsi/client');
    document.head.appendChild(googleScript)
    // googleScript.onload instead of window.onload because window.onload can be triggered by other libraries and or just missed while googleScript.onload is more consistent
    googleScript.onload = () => {
      if (client_id) {
        window.google.accounts.id.initialize({
          client_id: client_id,
          callback: callback,
          auto_select: auto_select,
          cancel_on_tap_outside: cancel_on_tap_outside,
          context: contextValue
        });
        window.google.accounts.id.prompt();
      } else {
        console.error('client_id is missing');
      }
    };
  }

	const oneTapSignin = (options) => {
    googleOneTap(options, (res) => {console.log(res);});
  }

  return { googleOptions, oneTapSignin, userData }
}
