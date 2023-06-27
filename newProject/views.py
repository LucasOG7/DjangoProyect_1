from django.shortcuts import render
from .models import Usuario, tipoUsuario
from .forms import UsuarioForm, tipoForm

# Create your views here.


def index(request):
    # usuario = usuario.objects.all()
    context = {}
    return render(request, "pages/index.html", context)



def IniciarSesion(request):
    context = {}

    if request.method != "POST":
        return render(request, "pages/IniciarSesion.html", context)
    else:
        username = request.POST["username"]
        password = request.PSOT["password"]


def Registro(request):
    context = {}
    return render(request, "pages/Registro.html", context)


def Pag_pcpal(request):
    context = {}
    return render(request, "pages/Pag_pcpal.html", context)


def Productos(request):
    context = {}
    return render(request, "pages/Productos.html", context)


def QuienesSomos(request):
    context = {}
    return render(request, "pages/QuienesSomos.html", context)


def Contactanos(request):
    context = {}
    return render(request, "pages/Contactanos.html", context)


def CarritoDeCompra(request):
    context = {}
    return render(request, "pages/CarritoDeCompra.html", context)