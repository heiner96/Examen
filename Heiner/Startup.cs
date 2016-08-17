using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Heiner.Startup))]
namespace Heiner
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
