# dashboard
Dashboard 0.1

O início dos anos 2000 marcou a transição do Macintosh para a interface Aqua. Diferente do minimalismo plano (flat design) e sem textura de hoje, o Mac OS X 10.1 trazia uma sofisticação tátil e analógica que gerava conforto e presença:
 • A Paleta e as Texturas: Listras horizontais sutis ao fundo das janelas (pinstripes), botões de controle arredondados e translúcidos em formato de "gema" (as icônicas cores vermelha, amarela e verde) e o uso elegante de elementos em cinza-escovado (brushed metal).
 • O Dock e os Gadgets: Componentes de interface com reflexos de vidro e sombras projetadas profundas, criando uma hierarquia visual clara entre o que é o seu espaço de trabalho (o Outliner) e o que são suas ferramentas de suporte (os Gadgets).
 • Mimetismo sem Distração: Trazer essa estética para a web não significa sobrecarregar o sistema com animações pesadas, mas adotar sua geometria reconfortante e tipografia nítida para criar um ambiente onde dá vontade de passar horas escrevendo.

Ferramentas web modernas operam sob o modelo de obsolescência e complexidade inflada. Seu dashboard adota o conceito de frugalidade digital:
 • Independência de Infraestrutura: O software opera com o mínimo de recursos possíveis. Ele não exige um servidor ligado, bancos de dados complexos executando queries ou pacotes pesados de frameworks (React, Vue ou bibliotecas de terceiros). É JavaScript baunilha (Vanilla), interpretado nativamente pelo motor que já existe no computador do usuário.
 • Legibilidade Universal: Um arquivo do seu Outliner gerado em 2026 permanecerá perfeitamente legível em 2056 por qualquer máquina, em qualquer sistema operacional, porque o dado subjacente é texto puro (.txt) com recuos. A interface do Mac OS X é uma lente bonita que organiza o dado, mas não o aprisiona.

As grandes plataformas de produtividade atuais (como Notion, Obsidian ou Roam Research) operam sob uma premissa perigosa: elas exigem que você confie seus pensamentos mais íntimos, planejamentos estratégicos e propriedade intelectual aos servidores deles, sob formatos proprietários ou sincronizações proprietárias em nuvem.
O seu dashboard quebra esses muros através de três pilares:
1. Soberania dos Dados: Seus dados nunca tocam a nuvem de terceiros. Eles residem onde devem residir: nas pastas locais do seu próprio disco rígido, sob o controle exclusivo das chaves de criptografia e do sistema de arquivos do seu sistema operacional.
2. Hospedagem Neutra: Embora o HTML seja baixado via GitHub Pages para conveniência de acesso universal, a aplicação é uma ferramenta de via única. Ela entrega o código e morre na rede, rodando estritamente na memória RAM local.
3. Foco Absoluto (Zero Ruído): Sem notificações, sem algoritmos de recomendação baseados no que você ouve ou escreve, sem atualizações forçadas que quebram seu fluxo de trabalho e sem telemetria rastreando seus cliques. Um espaço em branco, suas músicas, suas notas, seu tempo.

Para traduzir este conceito no layout que planejamos, a tela se comportará como um ambiente integrado de trabalho de altíssima fidelidade estética:
 • O Painel Principal (2/3 à Esquerda): Moldurado no estilo clássico do Finder do Mac OS X 10.1, com a barra superior cinza, botões em formato de gema gelatinosa e fundo com listras pinstripes milimétricas. Dentro dele, o Outliner limpo e expansível.
 • A Console de Utilidades (1/3 à Direita): Um espaço vertical onde residem os aparelhos analógicos: o tocador de música minimalista, o marcador de tempo, as folhas do calendário e o visor matemático.
