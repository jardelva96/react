# back/api/urls.py

from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import DisciplinaViewSet

# Criando o roteador para o ViewSet
router = DefaultRouter()
router.register(r'disciplinas', DisciplinaViewSet, basename='disciplina')

urlpatterns = router.urls  # Usando as rotas configuradas no roteador
