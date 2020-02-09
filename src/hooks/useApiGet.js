// https://dev.to/pallymore/clean-up-async-requests-in-useeffect-hooks-90h
import { useReducer, useEffect } from 'react';
import { requestStarted, requestSuccess, requestFailure } from './action';
import { reducer } from './reducer';
import { useCookies } from 'react-cookie';

export const useApiGet = ({ url, headers }) => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    data: null,
    error: null,
  });

  const [cookies, setCookie] = useCookies(['csrf']);
  console.log(cookies);
  Object.assign(headers, {'X-CSRF-TOKEN': cookies.csrf})
  console.log(headers);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      dispatch(requestStarted());

      try {
        const response = await fetch(url, { headers, credentials: 'include', signal: abortController.signal });
        console.log(response);
        if (!response.ok) {
          throw new Error(
            `${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        console.log(data);
        dispatch(requestSuccess({ data }));  
      } catch (e) {
        // only call dispatch when we know the fetch was not aborted
        if (!abortController.signal.aborted) {
          console.log(e.message);
          dispatch(requestFailure({ error: e.message }));
        }        
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  return state;
};
