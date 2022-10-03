export const handleCopy = (shortUrl, setAnimation) => {
    navigator.clipboard.writeText(shortUrl);
    setAnimation(true);
}