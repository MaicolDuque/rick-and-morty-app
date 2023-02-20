export const apiCall = async (url: string, params?: Record<string, string>) => {
  try {
    const response = await fetch(url, params)
    if(!response.ok) return Promise.reject({ error: 'Error' })
    const data = await response.json()
    return Promise.resolve(data)
  } catch (error) {
    return Promise.reject(error)
  }
}
