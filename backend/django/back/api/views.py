# back/api/views.py

from rest_framework import viewsets
from .models import Disciplina
from .serializers import DisciplinaSerializer

# ViewSet para o modelo Disciplina
class DisciplinaViewSet(viewsets.ModelViewSet):
    queryset = Disciplina.objects.all()
    serializer_class = DisciplinaSerializer
