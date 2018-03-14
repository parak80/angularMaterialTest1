using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularMaterialTest1.Models
{
    public class SearchContext : DbContext
    {
        public DbSet<Search> Forms { get; set; }
        //protected override void onModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Search>().ToTable("Forms");
        //}
    }
}
