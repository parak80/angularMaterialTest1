using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularMaterialTest1.ViewModels
{
    public class SearchFormViewModel 
    {
        [Display(Name="Namn")]
        public string Name { get; set; }

        [Display(Name="Efternamn")]
        public string LastName { get; set; }
        public bool SelectCheckB { get; set; }
    }
}
