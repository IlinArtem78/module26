using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using WebApplication1;


var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
/*
builder.Services.AddDbContext<YourDbContext>(options =>
    options.UseSqlServer(connectionString));
*/


// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=slider}/{id?}");
/*
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Site}/{id?}");
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=slider}/{id?}");
/*


/*
app.UseEndpoints(endpoints =>
{
    // Маппинг статических файлов

    endpoints.MapCss();
    endpoints.MapJs();
    endpoints.MapHtml();
});
*/

app.Run();





   
