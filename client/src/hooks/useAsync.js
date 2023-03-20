import { useCallback, useEffect, useState } from "react";

export function useAsync(func, dependecies = []) {
    const { execute, ...state } = useAsyncInternal(func, dependecies, true)

    useEffect(() => {
        execute()
    }, [execute])

    return state
}

export function useAsyncFn(func, dependecies = []) {
    return useAsyncInternal(func, dependecies, false)
}

function useAsyncInternal(func, dependecies, initialLoading = false) {
    const [loading, setLoading] = useState(initialLoading)
    const [error, setError] = useState()
    const [value, setValue] = useState()

    const execute = useCallback((...params) => {
        setLoading(true)
        return func(...params).then(data => {
            setValue(data)
            setError(undefined)
            return data
        }).catch(error => {
            setValue(undefined)
            setError(error)
            return Promise.reject(error)
        }).finally(() => {
            setLoading(false)
        })
    }, dependecies)
    
    return { loading, error, value, execute }
}