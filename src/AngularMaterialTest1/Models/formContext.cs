using AngularMaterialTest1.Controllers;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;

namespace AngularMaterialTest1.Controllers
{
    public class FormContext: DbContext
    {
        public DbSet<Search> form { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Search>().ToTable("form");
        }
    }
}
