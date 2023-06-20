from .models import Usuario, tipoUsuario
from django.forms import ModelForm

class UsuarioForm(ModelForm):
    class Meta:
        Model = Usuario
        field = "__all__"



class tipoForm(ModelForm):
    class Meta:
        model = tipoUsuario
        fields = [
            "tipoUsuario",
        ]
        labels = {
            "tipoUsuario": "tipoUsuario",
        }