export const ADMIN_PASSWORD = "admin123" // In production, use proper auth system like Supabase Auth

export const verifyAdminPassword = (password: string): boolean => {
  return password === ADMIN_PASSWORD
}

export const getAdminSession = (): boolean => {
  if (typeof window === "undefined") return false
  return localStorage.getItem("admin_session") === "true"
}

export const setAdminSession = (value: boolean): void => {
  if (typeof window === "undefined") return
  if (value) {
    localStorage.setItem("admin_session", "true")
  } else {
    localStorage.removeItem("admin_session")
  }
}
