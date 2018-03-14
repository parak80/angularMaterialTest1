using System;
using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using AngularMaterialTest1.ViewModels;
using AngularMaterialTest1.Models;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;

namespace AngularMaterialTest1.Controllers
{
    public class FormController : Controller
    {
        SearchContext _context;
        public FormController(SearchContext context)
        {
            _context = context;
        }
        public IActionResult Search()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Search(SearchFormViewModel model)
        {
            if (!ModelState.IsValid)
                return View();

            var s = new Search();
            s.Name = model.Name;
            s.LastName = model.LastName;

            //Add to DB
            _context.Forms.Add(s);
            _context.SaveChanges();
            return RedirectToAction("index");
        }
        public IActionResult Index()
        {
            var sFromDB = _context.Forms.toArray();

            var viewModels = new List<ListFormViewModel>();
            foreach (var s in sFromDB)
            {
                var viewModel = new ListFormViewModel();
                viewModel.Name = s.Name;
                viewModel.Searched = s.Searched;

                viewModels.Add(viewModel);
            }
            return View();
        }
        public IActionResult Error()
        {
            return View();
        }
    }
}
