import { useState, useEffect } from 'react';

const useBitly = () => {
    const [shortUrl, setShortUrl] = useState('')

    const getUrl = (longUrl) => {
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`
            },
            body: JSON.stringify({
                domain: "bit.ly",
                long_url: longUrl
            })
        };

        fetch('https://api-ssl.bitly.com/v4/shorten', requestOptions)
            .then(response => response.json())
            .then(data => setShortUrl(data?.link))
            .catch(error => console.log('ERROR fetching shorten url: ', error));
    }        

    return { getUrl, shortUrl, setShortUrl };
}

export default useBitly;
