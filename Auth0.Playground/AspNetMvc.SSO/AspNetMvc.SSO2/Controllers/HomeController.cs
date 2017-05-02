using System.Configuration;
using System.Web.Mvc;

namespace AspNetMvc.SSO2.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            if (User.Identity.IsAuthenticated)
            {
                return RedirectToAction("Authenticated", "Home");
            }

            ViewBag.Auth0ClientId = ConfigurationManager.AppSettings["auth0:ClientId"];
            ViewBag.Auth0ClientSecret = ConfigurationManager.AppSettings["auth0:ClientSecret"];
            ViewBag.Auth0Domain = ConfigurationManager.AppSettings["auth0:Domain"];
            ViewBag.Auth0CallbackUrl = ConfigurationManager.AppSettings["auth0:CallbackUrl"];

            return View();
        }

        [Authorize]
        public ActionResult Authenticated()
        {
            return View();
        }
    }
}