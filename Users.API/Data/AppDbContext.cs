using Microsoft.EntityFrameworkCore;
using Users.API.Data;
using Users.API.Models;

namespace Users.API.Data;

public class AppDbContext : DbContext
{
   public AppDbContext(DbContextOptions<AppDbContext> options) : base (options) { }
   
  public DbSet<Usuario> Usuarios { get; set; }
}
