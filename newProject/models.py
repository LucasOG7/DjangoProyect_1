from django.db import models

# Create your models here.


class tipoUsuario(models.Model):
    idTipoUsuario = models.AutoField(
        primary_key = True, db_column = 'idTipo', verbose_name = 'ID_tipo_Usuario')
    tipoUsuario = models.CharField(max_length = 20, blank = False, null = False)

    def __str__(self):
        return str(self.tipoUsuario)



class Usuario(models.Model):
    rut = models.CharField(max_length = 10, primary_key = True)
    nombre = models.CharField(max_length = 50, blank = False, null = False)
    apPaterno = models.CharField(max_length = 30, blank = False, null = False)
    apMaterno = models.CharField(max_length = 30, blank = False, null = False)
    FechaNacimiento = models.DateField(blank = False, null = False)
    tipoUsuario = models.ForeignKey(
        'tipoUsuario', on_delete = models.CASCADE, db_column = 'idTipo')
    correo = models.EmailField(
        unique = True, blank = False, null = False, max_length = 100)
    telefono = models.CharField(max_length = 10, blank = False, null = False)
    activo = models.IntegerField()

    def __str__(self):
        return str(self.nombre)+" "+str(self.apPaterno)+" "+str(self.apMaterno)

class Cliente(models.Model):
    correo = models.EmailField(max_length=60, blank=False, null = False, primary_key = True)
    nombre = models.CharField(max_length=50, blank=False, null=False)
    apellidos = models.CharField(max_length=50, blank=False, null=False)
    region = models.CharField(max_length=50, blank=False, null=False)
    comuna = models.CharField(max_length=50, blank=False, null=False)
    direccion = models.CharField(max_length=50, blank=False, null=False)
    contraseña = models.CharField(max_length=50, blank=False, null=False)

    def __str__(self):
        return str(self.nombre) + " " + str(self.apellidos)