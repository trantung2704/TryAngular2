using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TryAngular2.Startup))]
namespace TryAngular2
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
