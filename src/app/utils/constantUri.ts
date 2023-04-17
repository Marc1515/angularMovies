
const baseUrl = "https://api.themoviedb.org/3"

export class ConstantUri {
    public static readonly apiKey="a3cd814f876e29b589ce39fe46a0c305"
    public static readonly validateWithLogin = baseUrl + "/authentication/token/validate_with_login"
    public static readonly tokenNew = baseUrl + "/authentication/token/new"
    public static readonly popularMovies = baseUrl + "/movie/popular"
    public static readonly movieDetail = baseUrl + "/movie"
    public static readonly pathImg = "https://image.tmdb.org/t/p/original"
}