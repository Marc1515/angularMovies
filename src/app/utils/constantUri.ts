
const baseUrl = "https://api.themoviedb.org/3"

export class ConstantUri {
    public static readonly apiKey="a3cd814f876e29b589ce39fe46a0c305"
    public static readonly validateWithLogin = baseUrl + "/authentication/token/validate_with_login"
    public static readonly tokenNew = baseUrl + "/authentication/token/new"
}