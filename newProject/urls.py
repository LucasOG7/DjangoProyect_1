from django.urls import path
from . import views

urlpatterns = [
    path("IniciarSesion", views.IniciarSesion, name="IniciarSesion"),
    path("Registro", views.Registro, name="Registro"),
    path("Pag_pcpal", views.Pag_pcpal, name="Pag_pcpal"),
    path("Productos", views.Productos, name="Productos"),
    path("QuienesSomos", views.QuienesSomos, name="QuienesSomos"),
    path("Contactanos", views.Contactanos, name="Contactanos"),
    path("CarritoDeCompra", views.CarritoDeCompra, name="CarritoDeCompra"),
]