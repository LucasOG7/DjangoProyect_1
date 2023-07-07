from django.shortcuts import render
from .models import Usuario, tipoUsuario, Cliente, Contactos
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
        password = request.POST["password"]


def Registro(request):
    if request.method != "POST":
        cliente = Cliente.objects.all()
        context = {"cliente":cliente}
        return render(request, "pages/Registro.html", context)
    else:
        correo = request.POST["correo"]
        nombre = request.POST["nombre"]
        apellidos = request.POST["apellido"]
        region = request.POST["regiones"]
        comuna = request.POST["comunas"]
        direccion = request.POST["direccion"]
        contraseña = request.POST["password"]
        confirmar_contraseña = request.POST["password2"]
    
    objCliente = Cliente.objects.create(
        correo = correo,
        nombre = nombre,
        apellidos = apellidos,
        region = region,
        comuna = comuna,
        direccion = direccion,
        contraseña = contraseña,
        confirmar_contraseña = confirmar_contraseña,
    )
    
    objCliente.save()
    print("Agregado con exito")
    print(objCliente)
    context = {"mensaje": "OK Registrado Correctamente"}
    return render(request, "pages/Pag_pcpal.html", context)    


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
    if request.method != "POST":
        contacto = Contactos.objects.all()
        context = {"Contactos" : contacto}
        return render(request, "pages/Contactanos.html", context)
    else:
        nombre = request.POST["nombrect"]
        apellidos = request.POST["apellidosct"]
        correo = request.POST["Email"]
        asunto = request.POST["asunto"]
        mensaje = request.POST["mensaje"]

    objContactos = Contactos.objects.create(
        nombre = nombre,
        apellidos = apellidos,
        correo = correo,
        asunto = asunto,
        mensaje = mensaje,
    )
    objContactos.save()
    print("Agregado con exito")
    print(objContactos)
    context = {"mensaje": "OK Registrado Correctamente"}
    return render(request, "pages/Pag_pcpal.html", context)

