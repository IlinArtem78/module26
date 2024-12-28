using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Data;

namespace WebApplication1.Views.Home
{
    public class LoginModel : PageModel
    {
        public void OnGet()
        {


        }

        public void OnPost() {
            private bool Login(string username, string password)
            {
                using (var context = new MyDbContext())
                {
                    // ����� ������������ � ���� ������
                    var user = context.Users.FirstOrDefault(u => u.Username == username);
                    if (user != null && user.Password == password)
                    {
                        // ���������� ������ ������������ � ��������� ���������
                        localStorage.setItem("user", username);
                        return true;
                    }
                    return false;
                }
            }

            private void Logout()
            {
                using (var context = new MyDbContext())
                {
                    // �������� ������ ������������ �� ���� ������
                    context.Users.Remove(context.Users.Find(localStorage.getItem("user")));
                    localStorage.removeItem("user");
                }
            }


        }





    }





    public class User
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public Role Role { get; set; } // ���� ������������
    }


    public class Role
    {
        public string Admin { get; set; }
        public string User { get; set; }
        public string Oper { get; set; }
    }

}
