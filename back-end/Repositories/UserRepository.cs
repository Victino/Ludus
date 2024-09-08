using System.Data.SqlClient;
using Dapper;
using Microsoft.Extensions.Configuration;

public class UserRepository
{
    private readonly string _connectionString;
    public UserRepository(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("DefaultConnection");
    }
    public User GetUser(string username, string password)
    {
        using (var connection = new SqlConnection(_connectionString))
        {
            connection.Open();
            var sql = "SELECT * FROM Users WHERE Username = @username AND Password = @password";
            var user = connection.QueryFirstOrDefault<User>(sql, new { username, password });
            return user;
        }
    }
    public User NewUser(string username, string password)
    {
        using (var connection = new SqlConnection(_connectionString))
        {
            connection.Open();
            var sql = "INSERT INTO Users (Username, Password) VALUES (@username, @password)";
            var user = connection.QueryFirstOrDefault<User>(sql, new { username, password });
            return user;
        }
    }

    public User GetUserById(int id)
    {
        using (var connection = new SqlConnection(_connectionString))
        {
            connection.Open();
            var sql = "SELECT * FROM Users WHERE Id = @id";
            var user = connection.QueryFirstOrDefault<User>(sql, new { id });
            return user;
        }
    }
}
