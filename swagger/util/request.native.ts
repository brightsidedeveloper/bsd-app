/**
 * Auto-generated File - BSD
 */
// @ts-expect-error - don't need module in this file
import * as SecureStore from 'expo-secure-store'

export interface FetchOptions extends RequestInit {
  queryParams?: Record<string, unknown>
}

const BASE_URL = ''

const buildQueryString = (params: Record<string, unknown> = {}): string => {
  const query = Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
    .join('&')
  return query ? `?${query}` : ''
}

export const get = async <T = unknown>(
  endpoint: string,
  queryParams: Record<string, unknown> = {},
  options: FetchOptions = {}
): Promise<T> => {
  const token = await SecureStore.getItemAsync('token')
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    }
  }

  const url = `${BASE_URL}${endpoint}${buildQueryString(queryParams)}`
  const response = await fetch(url, {
    ...options,
    method: 'GET',
  })
  if (!response.ok) {
    let errorMessage = response.statusText
    try {
      const errorResponse = await response.json()
      if (errorResponse.error) {
        errorMessage = errorResponse.error // Extract the custom error message
      }
    } catch (err) {
      console.warn('Failed to parse error response:', err)
    }

    throw new Error(errorMessage)
  }

  return response.json() as Promise<T>
}

export const post = async <T = unknown>(endpoint: string, body: unknown = {}, options: FetchOptions = {}): Promise<T> => {
  const token = await SecureStore.getItemAsync('token')
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    }
  }

  const url = `${BASE_URL}${endpoint}`
  const response = await fetch(url, {
    ...options,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    body: JSON.stringify(body),
  })
  if (!response.ok) {
    let errorMessage = response.statusText
    try {
      const errorResponse = await response.json()
      if (errorResponse.error) {
        errorMessage = errorResponse.error // Extract the custom error message
      }
    } catch (err) {
      console.warn('Failed to parse error response:', err)
    }

    throw new Error(errorMessage)
  }

  const res = await response.json()

  if ('token' in res && typeof res.token === 'string') {
    await SecureStore.setItemAsync('token', res.token)
  }

  return res as Promise<T>
}

export const put = async <T = unknown>(endpoint: string, body: unknown, options: FetchOptions = {}): Promise<T> => {
  const token = await SecureStore.getItemAsync('token')
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    }
  }

  const url = `${BASE_URL}${endpoint}`
  const response = await fetch(url, {
    ...options,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    body: JSON.stringify(body),
  })
  if (!response.ok) {
    let errorMessage = response.statusText
    try {
      const errorResponse = await response.json()
      if (errorResponse.error) {
        errorMessage = errorResponse.error // Extract the custom error message
      }
    } catch (err) {
      console.warn('Failed to parse error response:', err)
    }

    throw new Error(errorMessage)
  }

  return response.json() as Promise<T>
}

export const patch = async <T = unknown>(endpoint: string, body: unknown, options: FetchOptions = {}): Promise<T> => {
  const token = await SecureStore.getItemAsync('token')
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    }
  }

  const url = `${BASE_URL}${endpoint}`
  const response = await fetch(url, {
    ...options,
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    body: JSON.stringify(body),
  })
  if (!response.ok) {
    let errorMessage = response.statusText
    try {
      const errorResponse = await response.json()
      if (errorResponse.error) {
        errorMessage = errorResponse.error // Extract the custom error message
      }
    } catch (err) {
      console.warn('Failed to parse error response:', err)
    }

    throw new Error(errorMessage)
  }

  return response.json() as Promise<T>
}

export const del = async <T = unknown>(
  endpoint: string,
  queryParams: Record<string, unknown> = {},
  options: FetchOptions = {}
): Promise<T> => {
  const token = await SecureStore.getItemAsync('token')
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    }
  }

  const url = `${BASE_URL}${endpoint}${buildQueryString(queryParams)}`
  const response = await fetch(url, {
    ...options,
    method: 'DELETE',
  })
  if (!response.ok) {
    let errorMessage = response.statusText
    try {
      const errorResponse = await response.json()
      if (errorResponse.error) {
        errorMessage = errorResponse.error // Extract the custom error message
      }
    } catch (err) {
      console.warn('Failed to parse error response:', err)
    }

    throw new Error(errorMessage)
  }

  return response.json() as Promise<T>
}