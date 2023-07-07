from django.contrib import admin

# Register your models here.
from .models import tipoUsuario, Usuario, Cliente, Contactos, Productos

admin.site.register(tipoUsuario)
admin.site.register(Usuario) 
admin.site.register(Cliente)
admin.site.register(Contactos)
admin.site.register(Productos)