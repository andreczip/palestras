
Jekyll -Blogando como um Hacker

Vou falar sobre Jekyll, gerador de conteúdo estático utilizado pelo Github e criado por Tom Preston-Werner, co-fundador e também criador do GitHub.

- Sobre mim

- Por que vim aqui:
	
	Mantenho um blog a cada 4 anos sempre postando artigos referêntes a atualizadas de desenvolvimento de software, nesse meio tempo ja utilizei alguns CMS (quem não sabe o que é CMS) e o que eu mais me adaptei foi Wordpress.
	Emfim eu usei wordpress por todo esse tempo, mas nunca me adaptei com a interface de administração dele, como um bom programador tinha a necessidade de abrir o html e editar diretamente no codigo fonte.

	Só que isso é uma coisa um tanto quanto desmotivadora pois essas interfaces gráficas não fornecem um forma boa para edição do fonte, foi assim  que cheguei nos "statics generates", especificamente no Jekyll.

	E de cara foi amor a primeira vista, eu pirei de amor com a possibilidade de ter meu site inteiro em arquivos estáticos, podendo criar meus posts utilizando apenas o VIM.

	Sim, eu sei que é um sentimento nerd e que é difícil de explicar. Como um bom usuário Linux que sou, com poucos comando eu posso criar, buscar e fazer o deploy dos meus artigos utilizando apenas meu bom e velho console. Cheguei a quase chorar de emoção.


	 O post Blogging like a Hacker do Tom Preston-Werner, apresenta uma forma bem legal de blogar, onde todo o suporte fica por conta do Github.

- O que é Jekyll?
	Jekyll é um gerador de blog estático, em que você cria seus posts em Markdown (http://pt.wikipedia.org/wiki/Markdown) e eles são convertidos para HTML. É estático, ele não usa banco de dados ou conteúdo dinâmico gerado em runtime.


- Estrutura Jekyll e funcionamento (font)

	No meu Github você pode conferir como organizei meus arquivos. Inicialmente, tenho 4 diretórios importante: _layouts, _layouts, _attachments, _posts, _plugins. Esses diretórios são explicativos por si só, porém o diretório _plugins no meu caso serve para configurar o Bundler e permitir que eu utilize o Gemfile para gerenciar as depêndencias. 

- Motivos que devo usar "static generaters"	

	- Segurança - Eu nunca vou ter que me preocupar com as vulnerabilidades em WordPress ou PHP novamente.

	- Desempenho - Arquivos estáticos são rápidos.

	- Portabilidade - Se eu precisar migrar para outro host, eu posso instalar Jekyll no novo host ou simplesmente apertar a saída de uma instalação local Jekyll.

	- Custo - Hospedagem free no GitHub Pages, agora estou livre para cancelar meu serviço de hospedagem pago.

	- Domínio Próprio - Por padrão o site fica disponível em you_user.github.com, mas de forma simples existe a possibilidade de incluir um domínio próprio.


	Se todas essas razões soar bem para você, pergunte-se ...
	Devo migrar?
	
- Github Pages

	Quando estava reconstruindo o blog usando Jekyll achava que iria hospedar no Heroku. Mas depois conheci o Github Pages. Eu nunca tinha usado esse serviço do Github que hospeda conteúdo estático e achei a melhor opção. A cada push no repositório ele já detecta que tem alterações, refaz o conteúdo estático e faz o deploy. E como o Jekyll foi criado pelo próprio pessoal do Github, tem um FAQ bem completo pra tirar as dúvidas. 

- Comentários
	O que pode ser um pouco mais complicado são os comentários. Como Jekyll é estático, você tem que achar uma outra opção.Eu estou usando o DISQUS. 

- Migração Wordpress
	Aliás, por falar em Wordpress, o Jekyll tem diversas tasks para Blog Migrations
	https://github.com/mojombo/jekyll/wiki/blog-migrations

- Outros geradores
	- DocPad, um static generator em NodeJS (https://github.com/bevry/docpad)
	- Octopress	

- Sites que utilizam Jekyll
	
	github.com/mojombo/jekyll/wiki/Sites

	O primeiro site dessa lista é do Tom Preston-Werner.

	Caso você queira saber mais a respeito do jekyll, de como instala-lo e utiliza-lo, segue abaixo algumas referências:

- Referências

	- GitHub Pages https://help.github.com/categories/20/articles
	- Projeto Jekyll - GitHub https://github.com/mojombo/jekyll
	- Wiki Jekyll - https://github.com/mojombo/jekyll/wiki
	
	- http://andersonleite.com.br/2013/01/28/blogando-como-hacker.html

- Dúvidas

- Links	


- Obrigado por sua paciencia e por sua atenção e Que a força esteja com vocês!	