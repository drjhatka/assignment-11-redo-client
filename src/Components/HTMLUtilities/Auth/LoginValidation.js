
export const validateInput = (email, password) => {
    const emailOkay = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(email.trim()) //basic email validation
    const passOkay = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password.trim())// password 6 chars 1 upper & 1 lower
    if (emailOkay, passOkay) {
        return true
    }
    return false
}