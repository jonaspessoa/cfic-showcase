# Segurança da demonstração

Este repositório contém uma demo pública, sem dados de produção ou conexão com o backend operacional.

## Credenciais públicas por definição

`demo@cfic.example` / `CFICdemo2026!` são valores ilustrativos para a tela de login. Estão publicados intencionalmente e não constituem segredo. A validação ocorre no cliente e pode ser inspecionada: não é uma barreira de segurança para dados privados.

Não reutilize essa senha em contas reais. Não conecte esta aplicação estática a uma base de alunos nem adicione chaves de serviço no código público.

## Dados e armazenamento

- Contatos são fixtures, com nomes de exemplo e telefones inválidos.
- Alterações ficam no `localStorage`, sob a chave `cfic-showcase-v1`.
- A sessão ilustrativa fica no `sessionStorage`, sob `cfic-showcase-session`.
- Não há formulário de upload de comprovante real.
- Não há chamada para Supabase, OpenWA, banco, gateway ou serviço de mensagens.
- Não há analytics de terceiros adicionado pela aplicação.
- O provedor de hospedagem pode manter seus registros normais de acesso.

Use apenas informações fictícias nos campos. O botão Restaurar demo substitui o conjunto local de exemplos; limpar o armazenamento do site também remove as alterações.

## Capturas

Os prints do produto mostram formulários vazios ou indicadores agregados. Os prints da demo mostram somente dados fictícios. Credenciais operacionais, e-mails da equipe, contatos reais, comprovantes e QR de conexão não devem aparecer em futuras capturas.

## Relatos

Falhas de interface da demo podem ser reportadas nas Issues deste repositório. Não publique senhas, tokens, dados de alunos ou detalhes de acesso ao sistema real em uma Issue pública.
