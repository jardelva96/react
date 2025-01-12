# back/api/models.py

from django.db import models

# Modelo para as Disciplinas
class Disciplina(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    notas = models.JSONField(default=list)  # Campo para armazenar notas em formato JSON

    def __str__(self):
        return self.nome
