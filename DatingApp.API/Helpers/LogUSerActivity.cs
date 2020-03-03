using System;
using System.Security.Claims;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;

namespace DatingApp.API.Helpers
{
    public class LogUSerActivity : IAsyncActionFilter
    {
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var resultContenxt = await next();

            var userId = int.Parse(resultContenxt.HttpContext.User
                .FindFirst(ClaimTypes.NameIdentifier).Value);
            var repo = resultContenxt.HttpContext.RequestServices.GetService<IDatingRepository>();
            var user = await repo.GetUser(userId);
            user.lastActive = DateTime.Now;
            await repo.SaveAll();
        }
    }
}