import { useState } from 'react';

const useBitly = () => {
    const [input, setInput] = useState('');
    const [animation, setAnimation] = useState();
    const [response, setResponse] = useState({ success: false, text: '' });

    const getUrl = (longUrl) => {
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`
            },
            body: JSON.stringify({ domain: "bit.ly", long_url: longUrl })
        };

        if (longUrl.length > 0) {
            fetch('https://api-ssl.bitly.com/v4/shorten', requestOptions)
                .then(response => response.json())
                .then(data => {
                    data?.errors
                    ? setResponse({ success: false, text: data?.description })
                    : setResponse({ success: true, text: data?.link });
                })
                .catch(error => console.log('ERROR fetching shorten url: ', error));
        }
        setInput('');
        setAnimation(false);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(response?.text);
        setAnimation(true);
        setTimeout(() => {
            setAnimation(false)
        }, 5000);
    };

    return { getUrl, response, input, setInput, handleCopy, animation, setAnimation };
}

export default useBitly;
