async function fetchWithTimeoutAndFallback(primaryUrl, fallbackUrl, timeoutMs) {

    const abort = new AbortController()
    const { signal } = abort
    const primaryTimeout = setTimeout(() => {
        abort.abort()
    }, timeoutMs)

    try {

        const response = await fetch(`${primaryUrl}`, { signal })
        clearTimeout(primaryTimeout)
        const data = await response.json()
        console.log(data)

    } catch (error) {
        if (error.name === 'AbortError') {
            console.log('Fetch request was programmatically canceled.');
        } else {
            console.error('A different network error occurred:', error);
        }
        try {
            const abort = new AbortController()
            const { signal } = abort
            const response = await fetch(`${fallbackUrl}`, { signal })
            const data = await response.json()
            console.log(data)
        } catch (fallBackerror) {
            if (fallBackerror.name === 'AbortError') {
                console.log('fallback Fetch request was programmatically canceled.');
            } else {
                console.error('A different network error occurred in fallback fetching:', fallBackerror);
            }
        }
    }

}



