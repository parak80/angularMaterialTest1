using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularMaterialTest1.ViewModels
{
    public class ListFormViewModel
    {
        [Display(Name= "Namn")]
        public string Name { get; set; }

        [Display(Name="LastName")]
        public string LastName { get; set; }

        [Display(Name="Searched")]
        public DateTime Searched { get; set; }
    }
}
