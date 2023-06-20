from django.urls import path
from . import views

urlpatterns = [
    path("index", views.index, name="index"),
    path("IniciarSesion", views.IniciarSesion, name="IniciarSesion"),
    path("Registro", views.Registro, name="Registro"),
]