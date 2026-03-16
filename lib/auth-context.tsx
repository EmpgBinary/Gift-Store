export interface User {
  id: string
  email: string
}

export const getStoredUsers = (): Record<string, { password: string; email: string }> => {
  if (typeof window === "undefined") return {}
  const users = localStorage.getItem("giftly_users")
  return users ? JSON.parse(users) : {}
}

export const getCurrentUser = (): User | null => {
  if (typeof window === "undefined") return null
  const user = localStorage.getItem("giftly_current_user")
  return user ? JSON.parse(user) : null
}

export const signUp = (email: string, password: string): { success: boolean; message: string } => {
  const users = getStoredUsers()
  if (users[email]) {
    return { success: false, message: "Email already registered" }
  }
  users[email] = { password, email }
  localStorage.setItem("giftly_users", JSON.stringify(users))
  const userId = Math.random().toString(36).substr(2, 9)
  localStorage.setItem("giftly_current_user", JSON.stringify({ id: userId, email }))
  return { success: true, message: "Account created successfully" }
}

export const login = (email: string, password: string): { success: boolean; message: string } => {
  const users = getStoredUsers()
  const user = users[email]
  if (!user || user.password !== password) {
    return { success: false, message: "Invalid email or password" }
  }
  const userId = Math.random().toString(36).substr(2, 9)
  localStorage.setItem("giftly_current_user", JSON.stringify({ id: userId, email }))
  return { success: true, message: "Logged in successfully" }
}
