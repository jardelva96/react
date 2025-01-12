# back/api/serializers.py

from rest_framework import serializers
from .models import Disciplina

# Serializer para o modelo Disciplina
class DisciplinaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disciplina
        fields = ['id', 'nome', 'descricao', 'notas']
