# Pipeline CI/CD

## 
Vamos la familia, hoje vamos falar o que é Continuous Integration (CI) e Continuous Deployment (CD). Ou Integração contínua ou Entrega Continua

Mas ja dando um spoiler superficial, o CI/CD aplica monitoramento e automação a todo o ciclo de vida de um software, juntas, essas práticas são chamadas de “pipeline de CI/CD”.


##
O que é Integração contínua ?

nada mais é do que automações na nossa pipeline, da nossa linha de produção de software 

Como eu ja falei, é um conjunto de práticas que leva a nossa equipe a implementar pequenas mudanças e fazer check-in do código toda vez que for dado um push pro repositorio

Por exemplo: Sempre ao gerar um Pull Request (PR) para um determinado
branch, vai rodar diversas rotinas para validar as mudanças, linting, testes unitários, testes de integração, teste de regressão, teste de componentes. 


##
Entrega contínua

Ou Continuous Deployment, Delivery é um mecanismo que nos ajudam a fazer entregas contínuas, essas duas técnicas vem dos princípios ágil e do manifesto ágil, para quem não conhece eu indico muito essa leitura.

O CD automatiza a entrega de aplicativos para diversos ambientes. Com bem sabemos, a maioria das equipes trabalha com vários ambientes diferentes de produção, como ambientes de desenvolvimento e teste, e o CD garante que haja uma maneira automatizada de enviar as nossas releases a esses ambientes.


##

(TDD) Desenvolvimento Orientado a Testes 

Test Driven Development (TDD), ou Test-first development, é um conjunto de técnicas orientado a testes associadas com Extreme Programming (XP) e metodologia ágil. Com TDD temos um desenvolvimento incremental do código, iniciado pelos testes (Miller,2004).


## 
o que é TDD?
Resumindo, 
Escreva os testes primeiro! 

Escreva testes para testar sua feature.
Execute testes (somente os novos testes podem falhar).
Escreva seu código para implementar o recurso.
Execute os testes (repita os passos 3 e 4 até passarem todos os testes).
Refatore o código (se necessário).

##
Porque devemos considerar o uso de CI/CD

##

1. Isolamentos de falhas

Conseguimos garantir mais velocidade em encontrar
e isolar o problema antes que ele possa causar mais queda de cabelo


##

2. Mais confiabilidade do teste

A confiabilidade do teste aumenta devido a utilização de teste unitário que irá cobrir parte dos cenários de testes da aplicação.

##

3. Menor lista de pendências

Incorporar CI / CD ao processo de desenvolvimento da nossa firma reduz o número de defeitos não críticos em nosso backlog. Esses pequenos defeitos são detectados antes de subir produção e corrigidos antes de serem liberados para os usuários finais.


##

4. Reduzir custos

Maior qualidade nas entregas, com menor indice de erro e retrabalho.


##
Show me de code

Bem agora chegou a hora de botar a mão na massa, pretendo criarmos juntos uma aplicação simples em Django aplicando as técnicas de TDD. Ao final da talk vamos configurar o Github Action para cumprir a premissa de CI.

mkdir djangoapp
cd djangoapp
pyenv activate resale
pip install django
python3 -m django --version

django-admin startproject core .
python3 manage.py startapp question

python3 manage.py migrate

# inserir o app
vi core/settings.py

python3 manage.py runserver


# organização dos testes unitários no Django

Como o nome sugere, é um teste de uma unidade. E o que é considerado uma unidade? Um bloco de código, como por exemplo um modelo é uma função, uma classe enfim.

A intenção em criar testes unitários é que você tenha principalmente um passo a passo de como resolver um problema.

A estrutura em árvore do projeto criado é semelhante à seguinte.

 
├── manage.py
├── core
└── question
   ├── migrations
   ├── admin.py
   ├── apps.py
   ├── models.py
   ├── tests.py
   └── views.py


O diretório ‘core’ é onde está o projeto Django e já o diretório ‘question’ onde encontra se a nossa aplicação que vamos trabalhar.

Geralmente os testes de cada aplicação devem estar dentro do arquivo question/teste.py, não existe problema em colocar os seus testes aqui.
Entretanto dentro de uma aplicação podemos realizar vários tipos de testes, como por exemplo, testes unitários para models, views e formulários.

Para organiuzarmpos nossos testes unitarios todos deste models ira ficar confuso, confoirme o projeto cresce aumenta o nivel de complexidade. Pensando nisso eu realizei uma pesquisa e atravez de outras expeiencias de projetos eu cheguei na seguinte estrutura


├── manage.py
├── core
└── question
   ├── migrations
   ├── admin.py
   ├── apps.py
   ├── models.py
   ├── tests
       └── unittest
        ├── tests_models.py
        ├── tests_views.py
           └── tests_forms.py
   └── views.py
 

Como nossa aplicação pode ter vários tipos de testes, como unitários, integração, eu sugiro criar um diretório para cada tipo de testes e posteriormente dividir as rotinas com as suas respectivas responsabilidades.

Essa estrutura é sugerida para cada aplicação, caso tenhamos 10 aplicações no projeto devemos seguir essa estrutura. Obviamente não é uma regra e sim apenas uma sugestão de padronização e organização.

# vamos agora criar o nosso arquivo __init__.py

2 -  Criando nossos testes

Antes de criar os nossos testes devemos iniciar criando nossos modelos, abaixo segue o exemplo criado para o nosso caso de estudo:

from django.db import models
 
class Question(models.Model):
   name = models.CharField('Name', max_length=100)
   amount = models.PositiveIntegerField('Amount')
 
   def __str__(self):
       return self.name
 
 

Com o modelo criado devemos criar nossas migrations:

python3 manage.py makemigrations
python3 manage.py migrate


Enfim vamos criar nosso primeiro teste, dentro do arquivo question/tests/tests_models.py


vamos criar a seguinte classe:

from django.test import TestCase
from ..models import Question

 
class QuestionTestCase(TestCase):

# minha ideia e criar o metodo setUp, esse metodo roda sempre antes dos testes, nele eu vou criar um question
   def setUp(self):
       Question.objects.create(
           name="Ola Mundo",
           amount=12
       )

# todo método de teste deve iniciar com “test_”
   def test_return_str(self):
# penso em criar um teste apenas para asegurar que minha modelo sempre vai retorna "ola mundo"
       q = Question.objects.get(name="Ola Mundo")
       self.assertEquals(q.__str__(), "Ola Mundo")
 

Agora vamos no terminal e vamos rodar os testes da nossa aplicação question:

python3 manage.py test question


Caso o seu teste rodou com sucesso, deve retornar um erro semelhante a esse:

❯ python3 manage.py test question
 
Creating test database for alias 'default'...
System check identified no issues (0 silenced).
.
----------------------------------------------------------------------
Ran 1 test in 0.002s
 
OK
Destroying test database for alias 'default'...

CI com Django usando Github Actions


# vamos upar o projeto no github
git init
git flow init
git config user.name "f0rmig4"
git config user.email f0rmig4@protonmail.com

Agora vamos criar uma rotina bem simples onde toda vez que dermos um push ele vai rodar todos os testes para nos e dar uma resposta.


Agora vamos no github para criar a nossa pipeline.
Primeiro acesse o repositório do github onde esta o seu projeto e depois acesse a aba actions

Agora selecione a opção “Python application” e vamos realizar o setup do nosso workflow

Agora devemos alterar nosso workflow para ficar algo semelhante com a imagem abaixo, podemos analisar que em cada passo é dado uma instrução e ainda devemos observar que será necessário criar o arquivo requirements.txt para instalar as dependências. Então na raiz do projeto execute os seguintes comandos.

git flow feature start requirement 
touch requirements.txt
echo "django" >> requirements.txt

Vamos agora dar um push na nossa branch e criar um PR no github

git add requirements.txt
git commit -m 'Create requirements' .
git push origin feature/requirement

Agora vamos retornar ao Github e ele vai nos informar que temos um novo branch.
Vamos fazer um compair e um pull request

Ponha uma mensagem se achar necessario e criei o pull request

# CD Heroku
https://devcenter.heroku.com/articles/django-app-configuration

heroku login

touch Procfile
echo "web: gunicorn myproject.wsgi" >> Procfile

## Este Procfile requer Gunicorn, o servidor web de produção que recomendamos para aplicativos Django. Para obter mais informações, consulte Implementando aplicativos Python com Gunicorn. 

pip install gunicorn
echo "gunicorn" >> requirements.txt

pip install django-heroku