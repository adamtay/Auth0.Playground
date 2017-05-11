using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;
using Swashbuckle.Swagger.Annotations;

namespace AngularJS.WebAPI.Demo.WebAPI.Controllers
{
    [Authorize]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ValuesController : ApiController
    {
        // GET api/
        [SwaggerOperation("GetAll")]
        public IEnumerable<string> Get()
        {
            return new List<string>
            {
                "Hi!",
                "I was loaded from the API!"
            };
        }
    }
}
