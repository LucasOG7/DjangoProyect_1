# Generated by Django 4.2.2 on 2023-06-29 06:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("newProject", "0006_cliente_confirmar_contraseña_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="cliente",
            name="confirmar_contraseña",
            field=models.CharField(max_length=50),
        ),
    ]
