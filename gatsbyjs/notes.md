# Gastby
## 1
	Vou falar como uma determinada tecnologia me ajudou a performa melhores resultados

## f0rmig4
	Artesao de bits, unixmaniaco, apaixonado por tecnologia e todos cacarecos tecnologicos
	Porto Alegre Rio grande do Sul
	pai da luz
	Estudante de clarinete e Jazz

## O que é GatsbyJS?

	É um gerador de sites incrivelmente rápido para React, o site oficial define desta forma. Mas o que eles querem dizer:

	É incrivelmente rápido! Pode acreditar em mim, qualquer pessoa que visitar o seu site vai dizer Ohhhh!

	Você pode criar sites usando-o react.js e todo o seu conteúdo é gerado em por um build.

	Mais para frente eu vou abordar um case de sucesso

## Por que usar o Gatsby?

	Acessos Mobile 2021: > 50%
	2021 entra "Google Core Web Vital"
	Que é descrita pela Google como "a chave para o sucesso de qualquer site na web".

	Performace
	Acessibilidade
	Boas Praticas
	SEO

	Core Web Vitals nada mais é que um algoritomo com um conjunto de metricas relacionadas a velocidade, carregamento da página e facilidade de uso para dispositivos móveis, para compor os fatores de rankeamento do Google.

	Aí que o Gatsby entra, oferecendo uma arquitetura para os sites otimizaçao dos nossos websites

## Quem usa

## Como funciona

## Quais as vantagens
	Porque devemos considerar usar o Gasby
	Eu trouxe alguns itens que gostaria de abordar

# Performace
	Eu já mencionei o termo 'rápido' e 'velocidade' muitas vezes nesse artigo, e claro todos sabemos que arquivos estáticos trazem essa característica.

# Segurança

	Nunca mais vou me preocupar com vulnerabilidade na minha aplicação, pois arquivos estáticos não deixam nenhuma porta aberta para ataques.

# Plugins

	Existem muitos plugins úteis disponíveis no site oficial do Gatsby, que podem ser adicionados facilmente na aplicação via npm. Alguns exemplos de plugins:

    gatsby-plugin-image: Adicionar imagens responsivas ao seu site e, ao mesmo tempo, mantendo alto desempenho;

    gatsby-source-wordpress: Obtenha dados do WordPress de forma escalável e eficiente com WPGraphQL;

    gatsby-plugin-react-helmet: Usado para gerir metatags e SEO;

    gatsby-plugin-google-tagmanager: Adiciona facilmente o Google Tagmanager ao site Gatsby.

	Existem muitos plugins disponíveis que podem nos ajudar a acelerar a maior parte do trabalho e tornar nossa aplicação mais rica.

# Starters
	Os Staters do Gatsby são templates que já vem com a estrutura criada e que agiliza o processo de desenvolvimento. No site oficial tem um filtro onde você pode buscar uma template com determinada característica, por exemplo: Gatsby 3 + Bootstrap.

	A documentação é super amigável, e eu definitivamente recomendo que você comece por aí se quiser aprender Gatsby. 

# Baseado em ReactJs

	A comunidade ReactJs é poderosa com muitos componentes existentes a um clique de distância.

# Facilidade de integração com CMS

	Nos possibilita integração com os principais gerenciadores de conteúdo do mercado, o Wordpress por exemplo, que hoje gerencia mais de 30% de toda a internet.

# SEO
	Gatsby permite que seus sites aproveitem várias técnicas de otimização de SEO. Isso faz com que seu site seja classificado em uma posição mais elevada nos mecanismos de pesquisa. Existem também muitos plug-ins que podem ajudá-lo a facilitar o trabalho

# Case

# Show me de Code

brew install node
node - v
npm install -g gatsby-cli
gatsby --version
gatsby --help

gatsby new blog https://github.com/gatsbyjs/gatsby-starter-blog
cd blog
gatsby develop
gatsby build
gatsby clean