# back/manager.py

from django.core.management.base import BaseCommand
from api.models import Disciplina

class Command(BaseCommand):
    help = 'Cria as disciplinas iniciais para o banco de dados'

    def handle(self, *args, **kwargs):
        disciplinas = [
            {'nome': 'Matemática', 'descricao': 'Cálculos básicos', 'notas': [8, 9, 7.5]},
            {'nome': 'Física', 'descricao': 'Leis da física', 'notas': [6, 7, 8]},
            {'nome': 'Química', 'descricao': 'Reações químicas', 'notas': [10, 9.5]},
        ]
        
        for disciplina in disciplinas:
            Disciplina.objects.create(**disciplina)

        self.stdout.write(self.style.SUCCESS('Disciplinas iniciais criadas com sucesso!'))
