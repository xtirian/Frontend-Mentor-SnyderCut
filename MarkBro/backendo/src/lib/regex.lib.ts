export const regexLib = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{5,}$/, // verifica se o nome de usuário válido antes do @, um domínio válido após o @ e uma extensão de domínio de pelo menos 2 caracteres após o último ponto.
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/, // pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial, com um máximo de 24 caracteres.
  username: /^[a-zA-Z0-9]{3,18}$/, //pelo menos 3 caracteres e seja composto apenas por letras maiúsculas e minúsculas e números
  file_name: /^[a-zA-Z0-9]{3,64}$/, //pelo menos 3 e no máximo 64 caracteres e seja composto apenas por letras maiúsculas e minúsculas e números
  file_content: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,}$/, //pelo menos 1 caractere
  script_regex: /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  // verifica se o texto contém uma tag <script> e se contém, retorna true
}