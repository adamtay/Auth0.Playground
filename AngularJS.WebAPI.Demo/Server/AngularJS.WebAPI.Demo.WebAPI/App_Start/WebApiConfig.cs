using System.Configuration;
using System.Web.Http;
using AngularJS.WebAPI.Demo.WebAPI.App_Start;

namespace AngularJS.WebAPI.Demo.WebAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.MessageHandlers.Add(new JsonWebTokenValidationHandler
            {
                Audience = ConfigurationManager.AppSettings["Auth0:clientId"],
                SymmetricKey = ConfigurationManager.AppSettings["Auth0:clientSecret"]
            });

            config.EnableCors();
        }
    }
}
